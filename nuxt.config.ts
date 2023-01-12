// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            titleTemplate: "ORZ Consultores | %s",
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            link: [      
                // <link rel="stylesheet" href="https://myawesome-lib.css">      
                // { rel: 'stylesheet', href: '@assets/css/main.css' }   
            ],
            
        },
    },
    css: [
        '@/assets/css/main.css'
    ]
})
