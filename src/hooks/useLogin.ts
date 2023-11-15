import Cookies from 'js-cookie'
import { authService } from '@/services'
import { User } from '@/types/user'

export const useLogin = () => {
    const login = async (username: string, password: string) => {
        const user = await authService.login(username, password)
        console.log(user.accessToken)
        const userInfo = await authService.getUserInfo(user.accessToken)
        console.log(userInfo)
        if (user) {
            Cookies.set('currentUser', JSON.stringify({user, userInfo}))
        }
        return user as User
    }
    return { login }
}
