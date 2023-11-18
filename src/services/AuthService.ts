import axios, { AxiosInstance } from 'axios'

export class AuthService {
    protected readonly instance: AxiosInstance
    public constructor(url: string) {
        this.instance = axios.create({
            baseURL: url,
            timeout: 3000,
            timeoutErrorMessage: 'Time out',
        })
    }

    login = (username: string, password: string) => {
        return this.instance
            .post('/auth/sign-in', {
                username,
                password,
            })
            .then((res) => {
                return {
                    accessToken: res.data.access_token,
                }
            })
    }

    signup = (username: string, email: string, password: string) => {
        return this.instance
            .post('/auth/sign-up', {
                username,
                email,
                password,
            })
            .then((res) => {
                return {
                    accessToken: res.data.access_token,
                }
            })
    }
    getUserInfo = (accessToken: string) => {
        return this.instance
            .get('/users/current', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((res) => {
                return {
                    // username: res.data.username,
                    // id: res.data.id,
                    // email: res.data.email,
                    username: res.data.data.username,
                    id: res.data.data.id,
                    email: res.data.data.email,
                }
            })
    }
    deleteUser = (accessToken: string, id: string) => {
        return this.instance.delete(`/users/user/${id}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
    }
}
