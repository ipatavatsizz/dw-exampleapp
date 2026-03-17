const registerApp = () => {
  try {
    const phoneExports = exports['dw-phone']

    if (phoneExports && phoneExports.registerApp) {
      phoneExports.registerApp({
        id: 'dev.dwscripts.external.exampleapp',
        name: 'Example App',
        author: 'ipatavatsizz',
        version: '1.0.0',
        isHidden: false,
        isSystemApp: false,
        categories: ['COMMUNICATION'],
        permissions: ['CONTACTS'],
        description:
          'Example app for demonstrating how to integrate with dw-phone.',
        icon: 'https://play-lh.googleusercontent.com/TViTe4ePsFQawXjjJhD0VN-fV7sk_GovVn6nJBLalgLJETbM32eW6pvfAW-j6HolLXA',
        url: 'https://cfx-nui-dw-exampleapp/index.html',
      })
      console.log('[Example App] Successfully registered to dw-phone.')
    } else {
      console.log(
        '[Example App] dw-phone is not ready yet. Waiting for reload event...',
      )
    }
  } catch (error) {
    // Failsafe if the resource is completely stopped
    console.log(
      '[Example App] dw-phone is not running. Waiting for reload event...',
    )
  }
}

on('onResourceStart', (resourceName) => {
  if (resourceName === GetCurrentResourceName()) {
    registerApp()
  }
})
on('dw-phone:appstore:ready', () => registerApp())
