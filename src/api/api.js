import {commonParams} from './config'
import axios from 'axios'

//axios 插件 webpack环境下，配制dev-sever.js，建立虚拟域名
export function getDiscList() {
    const url = '/api/getDiscList'

    const data = Object.assign({}, commonParams, {
        platform: 'yqq',
        hostUin: 0,
        sin: 0,
        ein: 29,
        sortId: 5,
        needNewCode: 0,
        categoryId: 10000000,
        rnd: Math.random(),
        format: 'json'
    })

    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}

export function postQsdata(url, data) {
    // const url = '/api/getQsdata'
    let params = new URLSearchParams()
    // params.append('loginname', '15296284098')
    // params.append('password', '123456')
    for (let i in data) {
        params.append(i, data[i])
    }

    return axios.post(url, params).then((res) => {
        return Promise.resolve(res.data)
    })
}
//axios 插件 打包发布服务器环境下
export function postServer(url, data) {
    // const url = 'http://member.eqkaos.com/home/login'
    let params = new URLSearchParams()

    for (let i in data) {
        params.append(i, data[i])
    }

    return axios.post(url, params, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}

