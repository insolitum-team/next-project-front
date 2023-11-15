import { useCurrentUser } from './useCurrentUser'
import Cookies from 'js-cookie'
import { authService } from '@/services'
import { UserInfo } from '@/types/userinfo'

export const useUserInfo = () => {
    const getUserInfo = async () => {
        const accessToken = Cookies.get('currentUser')
        const userInfo = Cookies.get('currentUser')
        if (userInfo) {
            Cookies.set('userInfo', JSON.stringify(userInfo))
        }
        return userInfo
    }
    return { getUserInfo }
}
