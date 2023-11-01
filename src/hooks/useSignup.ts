import Cookies from 'js-cookie'
import { authService } from '@/services'
import { User } from '@/types/user'


export const useSignup = () => {
    const signup = async(username:string, email:string, password:string) => {
        const user = await authService.signup(username, email, password)
        if(user){
            Cookies.set('currentUser', JSON.stringify(user))
        }
        return user as User
    }
    return {signup}
}