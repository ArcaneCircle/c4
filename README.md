# DeltaConnect

Connect 4 board game clon for Delta Chat

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
