export default defineAppConfig({
    ui: {
        colors: {
            primary: 'primary',
            neutral: 'zinc',
        },
        footer: {
            slots: {
                root: 'border-t border-default',
                left: 'text-sm text-muted',
            },
        },
    },
    seo: {
        siteName: 'Stoocs Docs',
    },
    header: {
        title: 'Stoocs Docs',
        to: '/',
        logo: {
            alt: '',
            light: '',
            dark: '',
        },
        search: true,
        colorMode: true,
        links: [],
    },
    footer: {
        credits: `Inria learning lab • © ${new Date().getFullYear()}`,
        colorMode: false,
        links: [],
    },
    toc: {
        title: 'Table des matières',
        bottom: {
            title: 'Communauté',
            edit: 'https://github.com/inrialearninglab/stoocs-docs/content',
            links: [
                {
                    icon: 'i-lucide-star',
                    label: 'Star sur GitHub',
                    to: 'https://github.com/nuxt/ui',
                    target: '_blank',
                },
                {
                    icon: 'i-lucide-book-open',
                    label: 'Nuxt UI docs',
                    to: 'https://ui4.nuxt.com/docs/getting-started/installation/nuxt',
                    target: '_blank',
                },
            ],
        },
    },
});
