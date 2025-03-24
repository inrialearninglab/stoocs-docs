export default defineAppConfig({
    shadcnDocs: {
        site: {
            name: "Stoocs documentation",
        },
        theme: {
            customizable: false,
            color: "custom",
            radius: 0.75,
        },
        header: {
            title: "Stoocs",
            showTitle: true,
            darkModeToggle: true,
            logo: {
                light: "/logo.svg",
                dark: "/logo-dark.svg",
            },
            nav: [],
            links: [
                {
                    icon: "lucide:github",
                    to: "https://github.com/inrialearninglab/stoocs",
                    target: "_blank",
                },
            ],
        },
        aside: {
            useLevel: true,
            collapse: false,
        },
        main: {
            breadCrumb: true,
            showTitle: true,
        },
        footer: {
            credits: "Copyright © 2024",
            links: [
                {
                    icon: "lucide:github",
                    to: "https://github.com/inrialearninglab/stoocs",
                    target: "_blank",
                },
            ],
        },
        toc: {
            enable: true,
            title: "Dans cette page",
            links: [
                {
                    title: "Star sur GitHub",
                    icon: "lucide:star",
                    to: "https://github.com/inrialearninglab/stoocs",
                    target: "_blank",
                },
                {
                    title: "Créer une issue",
                    icon: "lucide:circle-dot",
                    to: "https://github.com/inrialearninglab/stoocs/issues",
                    target: "_blank",
                },
            ],
        },
        search: {
            enable: true,
            inAside: false,
        },
    },
});
