import { useCurrentUser } from './useCurrentUser'
import { authService } from '@/services'

export const useDeleteUser = () => {
    const { user: currentUser } = useCurrentUser()
    const deleteUser = async () => {
        return await authService.deleteUser(
            currentUser?.user.accessToken,
            currentUser?.userInfo.id
        )
    }

    return { deleteUser }
}
