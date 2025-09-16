// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/image', '@nuxt/ui', '@nuxt/content', 'nuxt-og-image'],

    devtools: {
        enabled: true,
    },

    css: ['~/assets/css/main.css'],

    content: {
        build: {
            markdown: {
                toc: {
                    searchDepth: 1,
                },
            },
        },
    },

    compatibilityDate: '2024-07-11',

    nitro: {
        prerender: {
            routes: ['/'],
            crawlLinks: true,
            autoSubfolderIndex: false,
        },
    },

    icon: {
        provider: 'iconify',
    },
});
