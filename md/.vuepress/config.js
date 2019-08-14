module.exports = {
    head: [
        ['link', {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.6.0/dist/katex.min.css'}],
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
    title: 'Amazing',
    dest: 'dist',
    description: '苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为，所以动心忍性，曾益其所不能',
    plugins: {
        '@vuepress/google-analytics': {
            ga: 'UA-137262563-1',
        },
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: true,
            popupComponent: 'MySWUpdatePopup',
        }
    },
    themeConfig: {
        displayAllHeaders: true,
        lastUpdated: 'Last Updated',
        nav: [
            {text: 'Home', link: '/'},
            {
                text: 'FollowMe',
                items: [
                    {text: 'GitHub', link: 'https://github.com/AmazingMoon'},
                    {text: 'Weibo', link: 'https://weibo.com/amazingmoon'}
                ]
            },
            {
                text: 'Links',
                items: [
                    {text: '堂的博客', link: 'https://jintang.github.io'},
                ]
            }
        ],
        sidebar: [
            {
                title: 'Blockchain',
                children: [
                    'Blockchain/fabric-peer'
                ]
            },
            {
                title: 'CI',
                children: [
                    'CI/travis-ci-hexo'
                ]
            },
            {
                title: 'Math',
                children: [
                    'Math/linear-algebra-vector'
                ]
            },
            {
                title: 'MachineLearning',
                children: [
                    'MachineLearning/mnist'
                ]
            },
            {
                title: 'Mobile',
                children: [
                    'Mobile/custom-expansion-panel.md'
                ]
            },
            {
                title: 'Ruby',
                children: [
                    'Ruby/sidekiq-cron'
                ]
            }
        ]
    },
    // extendMarkdown: md => {
    //     md.set({breaks: true});
    //     md.use(require("markdown-it-katex"));
    // }
};