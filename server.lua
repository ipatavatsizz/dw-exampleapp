local function registerApp()
    local success, err = pcall(function()
        exports['dw-phone']:registerApp({
            id = 'dev.dwscripts.external.exampleapp',
            name = 'Example App',
            author = 'ipatavatsizz',
            version = '1.0.0',
            isHidden = false,
            isSystemApp = false,
            categories = {'COMMUNICATION'},
            permissions = {'CONTACTS'},
            description = 'Example app for demonstrating how to integrate with dw-phone.',
            icon = 'https://play-lh.googleusercontent.com/TViTe4ePsFQawXjjJhD0VN-fV7sk_GovVn6nJBLalgLJETbM32eW6pvfAW-j6HolLXA',
            url = 'https://cfx-nui-dw-exampleapp/index.html'
        })
    end)

    if success then
        print('[Example App] Successfully registered to dw-phone.')
    else
        -- dw-phone çalışmıyorsa veya registerApp export'u henüz yoksa hata fırlatılır ve buraya düşer
        print('[Example App] dw-phone is not ready yet or not running. Waiting for reload event...')
    end
end

AddEventHandler('onResourceStart', function(resourceName)
    if resourceName == GetCurrentResourceName() then
        registerApp()
    end
end)

AddEventHandler('dw-phone:appstore:ready', function()
    registerApp()
end)