# Demo

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
# Stack trace

npm init vue@latest

Vue.js - The Progressive JavaScript Framework

✔ Nom du projet : … Demo
✔ Nom du package : … demo
✔ Ajouter TypeScript ? … Non / Oui
✔ Ajouter le support de JSX ? … Non / Oui
✔ Ajouter Vue Router pour le développement d'applications _single page_ ? … Non / Oui
✔ Ajouter Pinia pour la gestion de l'état ? … Non / Oui
✔ Ajouter Vitest pour les tests unitaires ? … Non / Oui
✔ Ajouter une solution de test de bout en bout (e2e) ? › Cypress
✔ Ajouter ESLint pour la qualité du code ? … Non / Oui
✔ Ajouter Prettier pour le formatage du code ? … Non / Oui

npm install

npm install ant-design-vue --save

npm i unplugin-vue-components -D

npm install vue-i18n@9

npm install -D vite-plugin-pages

npm i @intlify/unplugin-vue-i18n

npm install @openapitools/openapi-generator-cli -D

npm i vee-validate --save

npm install --save-dev eslint @intlify/eslint-plugin-vue-i18n

npm i --save-dev typescript @typescript-eslint/parser

npm install -S yup

npm install --save-dev eslint @intlify/eslint-plugin-vue-i18n

npm i --save-dev typescript @typescript-eslint/parser