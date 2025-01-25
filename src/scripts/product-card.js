// Object to store DOM elements
const dom = {};

// Selectors for various elements
const selectors = {
  productContainer: '.product-card__container',
  swatch: '[data-product-swatch]',
};

// Cache DOM elements
const cacheDom = () => {
  dom.swatchArray = Array.from(document.querySelectorAll(selectors.swatch));
};

// Remove selected class from all swatches
const removeSelected = () => {
  dom.swatchArray.forEach((swatch) => {
    swatch.classList.remove('border', 'border-gray-800');
  });
};

// Handle swatch click events
const handleSwatches = () => {
  if (dom.swatchArray.length) {
    dom.swatchArray.forEach((swatch) => {
      swatch.addEventListener('click', (e) => {
        // Remove selected class from all swatches
        removeSelected();
        // Add selected class to the clicked swatch
        swatch.classList.add('border', 'border-gray-800');

        // Get the parent product container, swatch value, product handle, and product image el
        const parent = e.target.closest(selectors.productContainer);
        const swatchValue = e.target.dataset.swatchValue;
        const productHandle = parent.dataset.productHandle;
        const productImage = parent.querySelector('.product-card-image');

        // Fetch product data (could use storefront API here as well)
        fetch(`/products/${productHandle}.js`)
          .then((res) => res.json())
          .then((data) => {
            // Find the selected variant based on the swatch value
            const selectedVariant = data.variants.find((variant) => {
              return variant.title.toLowerCase().includes(swatchValue);
            });

            if (selectedVariant) {
              // Update the product image source
              productImage.src = selectedVariant.featured_image.src;

              // Update all anchor tags inside the parent element
              const anchorTags = parent.querySelectorAll('a');
              anchorTags.forEach((anchor) => {
                anchor.href = `${anchor.href.split('?')[0]}?variant=${selectedVariant.id}`;
              });
            }
          });
      });
    });
  }
};

// Initialize the product card functionality
const productCard = {
  init() {
    cacheDom();
    handleSwatches();
  },
};

export default productCard;
