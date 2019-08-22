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
    title: 'Amazing',
    dest: 'dist',
    description: 'Talk is cheap. Show me the code.',
    permalink: "/:year-:month-:day:regular",
    plugins: {
        '@vuepress/google-analytics': {
            ga: 'UA-137262563-1',
        },
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: true,
            popupComponent: 'MySWUpdatePopup',
        },
        mathjax: {
            target: 'chtml',
            presets: [
                '\\def\\lr#1#2#3{\\left#1#2\\right#3}',
            ],
        },
        '@vuepress/medium-zoom': {
            selector: '.theme-default-content :not(a) > img',
        },
        '@vuepress/back-to-top': {},
        'vuepress-plugin-live2d': {
            modelName: '',
            mobileShow: true
        }
    },
    themeConfig: {
        displayAllHeaders: true,
        lastUpdated: 'Last Updated',
        logo: '/panda.png',
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
                title: 'Flutter',
                children: [
                    'Flutter/custom-expansion-panel'
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
                title: 'Ruby',
                children: [
                    'Ruby/sidekiq-cron'
                ]
            }
        ]
    },
    extendMarkdown: md => {

    }
};