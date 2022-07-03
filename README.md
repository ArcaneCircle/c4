# Sudoku

Version of [this other project](https://github.com/raravi/sudoku) for Delta Chat

## Features

- ⚡️ [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 😃 Use icons from any icon sets in [Pure CSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- ✅ Use [Vitest](http://vitest.dev/) for unit and components testing

- 🦾 TypeScript, of course

- 📱 Use the [Webxdc simulator](https://github.com/webxdc/hello) to test your Webxdc right on the browser while developing,
  and use [Eruda](https://github.com/liriliri/eruda) to debug inside Delta Chat.

- 📦 Automatically minify, build and release your `.xdc` file

## Pre-packed

### Plugins

- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use react/react-router-dom API and others without importing
- [usehooks-ts](https://usehooks-ts.com/) - collection of useful React hooks

## Usage

### Installing Dependecies

After cloning this repo for the first time, install dependecies:

```
pnpm i
```

### Testing

To test your work in real time while developing:

```
pnpm dev
```

**💡 TIP:** To debug inside Delta Chat, uncomment the `script` tag at the end of
`index.html` file and your Webxdc will be packaged with developer tools inside!

### Building

To package your webxdc file:

```
pnpm build
```

The resulting optimized `.xdc` file is saved in `dist/` folder.

### Releasing

To automatically build and create a new GitHub release with your `.xdc` file:

```
git tag v1.0.1
git push origin v1.0.1
```

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/webxdc/webxdc-react/generate).
