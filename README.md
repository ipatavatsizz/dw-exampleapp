# dw-exampleapp 📱

![dwscripts-brand](https://cdn.dwscripts.dev/horizontal-brand.png)

The official boilerplate and modular external app template for **dw-phone**. 

This repository provides a clean, ready-to-use foundation for developers looking to create custom applications for `dw-phone` without modifying the core phone resources. By using this template, you can build standalone apps that seamlessly integrate with the phone's ecosystem.

## 📂 File Structure

- `index.html` - The frontend UI of your custom application.
- `server.lua` / `server.js` - Backend logic examples (choose the one that fits your stack).
- `fxmanifest.lua` - The resource manifest for FiveM.

## 🚀 Getting Started

1. **Clone or download** this repository into your development environment.
2. **Rename** the folder to your desired app name.
3. **Modify** `index.html`, backend scripts, and `fxmanifest.lua` to build your app.

## ⚠️ Important: The Phone SDK

To allow your external app to communicate properly with the `dw-phone` system (e.g., sending notifications, closing the app, accessing phone data), you **must** include the `dw-phone` SDK in your frontend.

Add the following script tag inside the `<head>` or `<body>` of your `index.html`:

```html
<script src="nui://dw-phone/phone/phone-sdk.js"></script>

<script src="https://cfx-nui-dw-phone/phone/phone-sdk.js"></script>
````

*Note: Ensure that your `fxmanifest.lua` has the correct dependencies set so that `dw-phone` starts before your custom application.*

## 📚 Documentation

For detailed API references, advanced SDK usage, event listeners, and comprehensive guides on building external apps, please visit our official documentation:

**👉 [docs.dwscripts.dev](https://docs.dwscripts.dev)**

-----

*Created for the FiveM community by ipatavatsizz/dwscripts*