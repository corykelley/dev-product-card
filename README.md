# Dev Product Card

## Getting Started on a new project

> 💡 Everything below this point can be used for the readme, if using Adastra. Double check the information below is up-to-date or update as needed.

## Project/Code Do's and don'ts

- Please _DO_ cut all new branches from `Production` unless noted otherwise.
- Please _DO_ pull down the latest updates to your branch before work - this includes your feature, testing, uat, production, etc. branches. **This is important as we use the Github integration with Shopify, so the Shopify admin may make repo changes without our knowledge!**
- Please _DO_ comment your code when possible and appropriate for future developers.
- If possible, please _DON'T_ write Javascript inside of liquid code. Code is seperated for a reason.
- Please _DO_ place appropriate testing notes, urls, developer and QA context, etc. in your Asana task. Contact your PM, lead developer, designer, and QA when task is ready for testing.
- Please _DON'T_ write one-off Tailwind classes or inline CSS if possible. Please communicate with your designer if colors/styles are required to complete a task that are not currently in the style guide, all styles **_should_** be in the styleguide.

## Getting Started

- Clone the repository
- Install all dependencies using `yarn install`.

- Use documentation below for launching the development server for the first time.

> 💡 At the time of writing, the current working Node version is **v xx.xx.x**. Please note, you may also be required to upgrade your Ruby version. For more information on keeping Ruby up to date, reference this documentation: [RVM](https://rvm.io/rvm/install).

## Launching development server

### Using Adastra CLI ✨

This theme is built on top of Adastra, below you will find theme and Adastra specific information useful for working with this project.

To launch the development server for the first time, first duplicate the `shopify.theme.toml.example` file. Once the file is duplicated, remove `.example` from the copy so that it reads `shopify.theme.toml`. Second, update the theme id (to your development theme id) and password in this file, your lead developer should be able to help provide this information.

If you choose to not use a dedicated devlopment theme, you may ignore the `shopify.theme.toml.example` file altogether and update the `package.json` file slightly:

```json
"scripts": {
  - "dev": "adastra dev --environment dev -s yourstore.myshopify.com",
  "dev": "adastra dev -s yourstore.myshopify.com",
  ...
}
```

> 💡 The command will launch two dev servers, the first for Vite at `localhost:5173` to server static files from the `src` directory and the second for Shopify at `localhost:9292` to serve your theme.

## Theme Structure

Inside your theme project, you'll see the following folders and files.

1. Most Shopify themes files and folders remain the same.
2. There is only one additional **Super Special** folder called `src` (you can change its name in `vite.config.js` file).
3. Instead of directly editing static assets in the theme `assets` directory, you will use the new `src` directory instead.
4. Static files inside the `src` directory are served by [Vite](https://vitejs.dev).
5. When launching the developement sever command `npm run dev` the command launches two dev servers, one for [Vite](https://vitejs.dev) to serve static files and the other one for Shopify to upload the development theme to remote Shopify server (Takes a bit of time).

```shell
/
├── assets
├── config
├── layout
├── locales
├── sections/
│   └── hello-world.liquid
├── snippets/
│   └── colors.liquid
├── src/  # Source directory (name can be changed in vite.config.js)
│   ├── entrypoints/ # Entrypoints directory (name can be changed in vite.config.js)
│   │   ├── base.css
│   │   └── index.js
│   └── hello-world.js
├── templates
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── package.json
```

Adastra ✨ detects entrypoint files automatically in the `entrypoints/` directory. In this case `theme.css` for styles and `theme.js` for modules.

You can create other folders like `src/utils/` if you want, or a `src/components/` folder for Native/React/Vue/Lit/Preact components. Only the files/modules imported in the entrypoint files will be served by Vite.

Any static assets, like custom fonts, manifest files, `.css.liquid` or `.js.liquid`, can be placed inside the `assets` theme folder, just make sure to add the configuration below to avoid clearing the assets directory when building for production.

```js
// vite.config.js

import { defineConfig } from 'vite';
import adastra from 'adastra-plugin';

export default defineConfig({
  plugins: [adastra()],
  build: {
    emptyOutDir: false,
  },
});
```

> 💡 This project uses Github actions to compile CSS and JS when pushing code to the Testing, UAT, Staging, and Production branches. This is done to eliminate the extra step of building CSS and JS before pushing code. Please note that this step will not run when pushing code to any other branches. These actions can be found, updated, or manipulated in `build.yml` file found in `.github/workflows` directory.

## Commands

Adastra CLI ✨ is built on top of Shopify CLI 3.X, this means that existing Adastra commands are the same as Shopify's.

```bash
adastra dev -s example-store.myshopify.com
# same as shopify theme dev -s example-store.myshopify.com
```

All commands are run from the root of the theme project, from a terminal:

### Other commands

| Command                  | Action                                                                |
| :----------------------- | :-------------------------------------------------------------------- |
| `npm install`            | Installs dependencies                                                 |
| `npm run build`          | Build and minifies your production static files to `./assets/` folder |
| `npm run preview`        | Preview of your remote development theme, before deploying            |
| `npm run check`          | Run theme check to lint the theme                                     |
| `npm run adastra ...`    | Run CLI commands like `adastra dev`, `adastra check`                  |
| `npm run adastra --help` | Get help using the Adastra CLI                                        |

## Want to learn more?

Feel free to jump into the Adastra ✨ [Discord server](https://help.blanklob.com).

Adastra ✨ was built and is maintained by [Blankblob](https://github.com/blanklob).
