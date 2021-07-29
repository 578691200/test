/**
 * 
 * 环境配置
 * 
 */

const env = import.meta.env.MODE || 'prod';
const EnvConfig = {
    dev:{
        baseApi:'/',
        mockApi:'https://www.fastmock.site/mock/255ded97257ef2186ae28f599e078d00/api'
    },
    test:{
        baseApi:'//test.futurefe.com/api',
        mockApi:'https://www.fastmock.site/mock/255ded97257ef2186ae28f599e078d00/api'
    },
    prod:{
        baseApi:'/futurefe.com/api',
        mockApi:'https://www.fastmock.site/mock/255ded97257ef2186ae28f599e078d00/api'
    }
}

export default {
    env,
    mock:true,
    ...EnvConfig[env]
}
