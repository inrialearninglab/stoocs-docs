// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    extends: ["shadcn-docs-nuxt"],
    compatibilityDate: "2024-07-06",
    site: {
        url: "https://inrialearninglab.github.io",
    },
    app: {
        baseURL: "/stoocs-docs",
    },
});
