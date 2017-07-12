import axios from 'axios'

//axios 插件 打包发布服务器环境下
export function postServer(url, data) {
    // const url = 'http://member.eqkaos.com/home/login'
    let params = new URLSearchParams()

    for (let i in data) {
        params.append(i, data[i])
    }

    return axios.post(url, params, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'codivTock': '132465'
        }
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}

