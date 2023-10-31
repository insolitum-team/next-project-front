import axios, {AxiosInstance} from 'axios'

export class AuthService{
    protected readonly instance: AxiosInstance
    public constructor (url:string){
        this.instance = axios.create({
            baseURL: url,
            timeout:3000,
            timeoutErrorMessage: 'Time out'
        })
    }

    login = (username:string, password:string) => {
        return this.instance
        .post('/sign-in', {
            username,
            password
        })
        .then((res) => {
            return {
                accessToken:res.data.access_token
            }
        })
    }
}