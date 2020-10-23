module.exports = {
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}],
        ['link', {rel: 'icon', href: '/favicon-16x16.png', sizes: "16x16", type: "image/png"}],
        ['link', {rel: 'icon', href: '/favicon-32x32.png', sizes: "32x32", type: "image/png"}],
        ['link', {rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: "180x180"}],
        ['link', {rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: "#5bbad5"}],
        ['link', {rel: 'manifest', href: '/site.webmanifest'}],
        ['meta', {name: 'msapplication-TileColor', content: "#da532c"}],
        ['meta', {name: 'theme-color', content: "#ffffff"}],
        ['meta', {name: 'msapplication-config', content: "/browserconfig.xml"}]
    ],
    title: "Amazing",
    dest: 'dist',
    description: 'Talk is cheap. Show me the code.',
    permalink: "/:year-:month-:day:regular",
    theme: '@vuepress/blog',
    themeConfig: {
        dateFormat: 'YYYY-MM-DD',
        smoothScroll: true,
        nav: [
            {
                text: 'Blog',
                link: '/posts/',
            },
            // {
            //     text: 'Essay',
            //     link: '/writings/',
            // },
            {
                text: 'Tags',
                link: '/tag/',
            },
            // {
            //     text: '堂的博客',
            //     link: 'https://jintang.github.io',
            // },
        ],
        directories: [
            {
                id: 'home',
                dirname: '_home',
                path: '/',
                layout: 'HomeLayout',
            },
            {
                id: 'post',
                dirname: '_posts',
                path: '/posts/',
                title: 'Blog',
            },
            {
                id: 'writing',
                dirname: '_writings',
                path: '/writings/',
                title: 'Essay',
            }
        ],
        footer: {
            contact: [
                {
                    type: 'github',
                    link: 'https://github.com/AmazingMoon',
                },
                {
                    type: 'twitter',
                    link: 'https://twitter.com/amazingmooon',
                },
                {
                    type: 'instagram',
                    link: 'https://www.instagram.com/amazingmooon/',
                },
            ],
            copyright: [
                {
                    text: 'MIT Licensed | Copyright © 2017-present Amazing',
                    link: '/',
                },
            ],
        },
        sitemap: {
            hostname: 'https://amazingmoon.github.io/'
        },
        feed: {
            canonical_base: 'https://amazingmoon.github.io/',
            rss: true,
            atom: false,
            json: false
        },
        pwa: {
            serviceWorker: true,
            updatePopup: true
        },
    },
    plugins: {
        '@vuepress/google-analytics': {
            ga: 'UA-137262563-1',
        },
        'latex': {},
        'vuepress-plugin-container': {
            type: 'danger',
            defaultTitle: {
                '/': 'TIP',
                '/zh/': '提示',
            },
        },
        '@vuepress/medium-zoom': {
            selector: '.vuepress-blog-theme-content :not(a) > img',
        },
        '@vuepress/back-to-top': {},
        'vuepress-plugin-live2d': {
            modelName: ['hijiki', 'tororo'],
            mobileShow: true
        }
    },
};
