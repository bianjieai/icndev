module.exports = {
    title:'Game of NFTs',
    description:'',
    base:'/',
    headers:[
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'keywords', content: 'GoN、Game of NFT、Interchain NFTs、IBC、Metadata、ICS-721' }],
    ],
    themeConfig:{
        search: false,
        navbar: false,
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