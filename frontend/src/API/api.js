import * as axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:4000/api",
    withCredentials: true,
})


export const UsersAPI = {
    getUsers() {
        return instance.get(`auth/user`)
            .then(response => {
                return response
            })
    }
}

export const PostsAPI = {
    getPosts() {
        return instance.get(`/posts`)
            .then(response => {
                return response.data
            })
    },
    getCurrentPost(id) {
        return instance.get(`/posts/${id}`)
            .then(response => {
                return response.data
            })
    }
}
export const LoginAPI = {
    login() {
        return instance.post(`/user/login`, { email: "leshka.l1337@gmail.com", password: "LehaS30072002" })
            .then(payload => {
                console.log(payload)
            })
    }
}