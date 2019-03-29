module.exports = {
    head: [
        ['link', {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.6.0/dist/katex.min.css'}],
        ['link', { rel: 'icon', href: `/favicon.ico` }],
    ],
    title: 'Amazing',
    dest:'dist',
    description: '文艺青年',
    serviceWorker: true,
    themeConfig: {
        displayAllHeaders: true,
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Weibo', link: 'https://weibo.com/amazingmoon'},
            {text: 'GitHub', link: 'https://github.com/AmazingMoon'},
        ],
        sidebar: [
            {
                title: 'Blockchain',
                collapsable: false,
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
                title: 'Ruby',
                children: [
                    'Ruby/sidekiq-cron'
                ]
            },
        ]
    },
    markdown: {
        config: md => {
            md.use(require("markdown-it-katex"));
        }
    }
};