const config = require('./config/config.json')
module.exports = {
    title:'Game of NFTs',
    description:'',
    base:'/',
    head:[
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'keywords', content: 'GoN、Game of NFT、Interchain NFTs、IBC、Metadata、ICS-721、Cosmos、IRISnet、NFT Hub' }],
        ['meta', { property:'og:title',content: 'Game of NFTs'}],
        ['meta', { property:'og:description',content: 'Game of NFTs (GoN) is an event coming to Cosmos with public incentivized testnets and a hackathon where you can test and build on top of Interchain NFTs.'}],
        ['meta', { property:'og:image',content: 'https://storage.googleapis.com/irisnet_asia_resources/brief_gon.png'}],
        ['meta', { name:'viewport',content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;'}],
        ['meta', { name:'http-equiv',content:'upgrade-insecure-requests'}],
        ['script', { src:`https://www.googletagmanager.com/gtag/js?id=${config.GoogleAnalyticsId}`,async: true}],
        ['script', {},` window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', ${config.GoogleAnalyticsId});`] // 处理谷歌统计插件不兼容的问题
    ],
    themeConfig:{
        search: false,
        navbar: false,
        logo: '',
        nextLinks: false,
        prevLinks: false,
        activeHeaderLinks: false,
        nav:[
            {
                text:'InterChain NFTs'
            }
        ]
    },
    configureWebpack: {
        node: {
            global: true,
            process: true
        },
    },
}