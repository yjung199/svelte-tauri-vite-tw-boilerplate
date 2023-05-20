# Svelte + Tauri + Vite + TailwindCSS + Typescript

![Svelte](https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white)
![Tauri](https://img.shields.io/badge/tauri-%2324C8DB.svg?style=for-the-badge&logo=tauri&logoColor=%23FFFFFF)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

This boilerplate should help get you started developing with <a href="https://tauri.app">Tauri</a>, <a href="https://svelte.dev">Svelte</a> and <a href="https://www.typescriptlang.org">TypeScript</a> in <a href="https://vitejs.dev">Vite</a> with <a href="https://tailwindcss.com">TailwindCSS</a>! It also comes with DaisyUI 🌼, which you can choose not to use.

<div align="center">
  <img src="./static/img.png" alt="Boilerplate preview"/>

</div>

## Install

Clone the repo, or download as a zip file:

```bash
git clone https://github.com/yjung199/svelte-tauri-vite-tw-boilerplate.git your-project-name
cd your-project-name
yarn
```

## Development

Start the app in `development` mode (hot-code reloading, error reporting, etc.)

```bash
yarn tauri dev
```

## Build

Build the app for production

```bash
yarn tauri build
```

## Help with Tauri

```bash
yarn tauri help
```

## Disabling DaisyUI

If you wish to disable DaisyUI, to use other TailwindCSS components, you can do so by removing the plugin from `tailwind.config.js`:

```
// tailwind.config.js
export default {
...
  // remove require("daisyui") if you don't want to use daisyUI
  // plugins: [require("daisyui")],
  plugins: [],
};

```
