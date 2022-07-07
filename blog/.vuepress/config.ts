import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
const { katexPlugin } = require("@renovamen/vuepress-plugin-katex");
export default defineUserConfig({
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['link', { rel: 'icon', href: '/favicon-16x16.png', sizes: "16x16", type: "image/png" }],
        ['link', { rel: 'icon', href: '/favicon-32x32.png', sizes: "32x32", type: "image/png" }],
        ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: "180x180" }],
        ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: "#5bbad5" }],
        ['link', { rel: 'manifest', href: '/site.webmanifest' }],
        ['meta', { name: 'msapplication-TileColor', content: "#da532c" }],
        ['meta', { name: 'theme-color', content: "#ffffff" }],
        ['meta', { name: 'msapplication-config', content: "/browserconfig.xml" }]
    ],
    lang: 'en-US',
    title: 'Amazing',
    description: 'Just playing around',
    theme: defaultTheme({
        logo: '/panda.png',
        docsDir: 'blog',
        navbar: [
            {
                text: 'blockchain',
                children: ['/blockchain/fabric-peer.md'],
            },
            {
                text: 'ci',
                children: ['/ci/travis-ci-hexo.md'],
            },
            {
                text: 'flutter',
                children: ['/flutter/custom-expansion-panel.md'],
            },
            {
                text: 'js',
                children: [
                    '/js/array.md',
                    '/js/axios.md',
                    '/js/concise-code.md'
                ],
            },
            {
                text: 'machine-learning',
                children: ['/machine-learning/linear-algebra-vector.md', '/machine-learning/mnist.md'],
            },
            {
                text: 'ruby',
                children: ['/ruby/sidekiq-cron.md'],
            },
        ],
    }),
    plugins: [
        katexPlugin()
    ]
})
// module.exports = {
//     head: [
//         ['link', { rel: 'icon', href: '/favicon.ico' }],
//         ['link', { rel: 'icon', href: '/favicon-16x16.png', sizes: "16x16", type: "image/png" }],
//         ['link', { rel: 'icon', href: '/favicon-32x32.png', sizes: "32x32", type: "image/png" }],
//         ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: "180x180" }],
//         ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: "#5bbad5" }],
//         ['link', { rel: 'manifest', href: '/site.webmanifest' }],
//         ['meta', { name: 'msapplication-TileColor', content: "#da532c" }],
//         ['meta', { name: 'theme-color', content: "#ffffff" }],
//         ['meta', { name: 'msapplication-config', content: "/browserconfig.xml" }]
//     ],
//     title: "Amazing",
//     dest: 'dist',
//     description: 'Talk is cheap. Show me the code.',
//     permalink: "/:year-:month-:day:regular",
//     theme: '@vuepress/blog',
//     themeConfig: {
//         dateFormat: 'YYYY-MM-DD',
//         smoothScroll: true,
//         nav: [
//             {
//                 text: 'Blog',
//                 link: '/posts/',
//             },
//             {
//                 text: 'Tags',
//                 link: '/tag/',
//             },
//         ],
//         directories: [
//             {
//                 id: 'home',
//                 dirname: '_home',
//                 path: '/',
//                 layout: 'HomeLayout',
//             },
//             {
//                 id: 'post',
//                 dirname: '_posts',
//                 path: '/posts/',
//                 title: 'Blog',
//             },
//         ],
//         footer: {
//             contact: [
//                 {
//                     type: 'github',
//                     link: 'https://github.com/AmazingMoon',
//                 },
//                 {
//                     type: 'twitter',
//                     link: 'https://twitter.com/amcee3000',
//                 },
//                 {
//                     type: 'instagram',
//                     link: 'https://www.instagram.com/amcee3000/',
//                 },
//             ],
//             copyright: [
//                 {
//                     text: 'MIT Licensed | Copyright © 2017-present Amazing',
//                     link: '/',
//                 },
//             ],
//         },
//         sitemap: {
//             hostname: 'https://amazingmoon.github.io/'
//         },
//         feed: {
//             canonical_base: 'https://amazingmoon.github.io/',
//             rss: true,
//             atom: false,
//             json: false
//         },
//         pwa: {
//             serviceWorker: true,
//             updatePopup: true
//         },
//     },
//     plugins: []
//     // plugins: {
//     //     '@vuepress/google-analytics': {
//     //         ga: 'UA-137262563-1',
//     //     },
//     //     'latex': {},
//     //     'vuepress-plugin-container': {
//     //         type: 'danger',
//     //         defaultTitle: {
//     //             '/': 'TIP',
//     //             '/zh/': '提示',
//     //         },
//     //     },
//     //     '@vuepress/medium-zoom': {
//     //         selector: '.vuepress-blog-theme-content :not(a) > img',
//     //     },
//     //     '@vuepress/back-to-top': {},
//     //     'mermaidjs':{},
//     //     'vuepress-plugin-live2d': {
//     //         modelName: ['hijiki', 'tororo'],
//     //         mobileShow: true
//     //     }
//     // },
// };
