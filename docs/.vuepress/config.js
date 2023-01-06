module.exports = {
    title:'Game of NFTs',
    description:'',
    base:'/',
    head:[
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'keywords', content: 'GoN、Game of NFT、Interchain NFTs、IBC、Metadata、ICS-721、Cosmos、IRISnet、NFT Hub' }],
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
    }
}