'use client'
import React from 'react'
import { useLogin } from '@/hooks/useLogin'
import { useState } from 'react'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { Card, CardHeader, CardBody } from '@nextui-org/card'
import { useRouter } from 'next/navigation'
import { EyeFilledIcon } from '@/ui/icons/EyeFilledIcon'
import { EyeSlashFilledIcon } from '@/ui/icons/EyeSlashFilledButton'
import { UserIcon } from '@/ui/icons/UserIcon'
import { User } from '@nextui-org/user'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { useLogout } from '@/hooks/useLogout'

const UserPage = (): JSX.Element => {
    const { user: currentUser } = useCurrentUser()
    const { logout } = useLogout()
    console.log(currentUser)
    //input controls
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //log in function
    const { login } = useLogin()
    const router = useRouter()
    const handleSubmit = () => {
        if (!email || !password) {
            alert('Please enter information')
        } else {
            login(email, password)
                .then((res) => {
                    router.push('/')
                    router.refresh()
                })
                .catch((e) => alert(e))
        }
    }
    //password button
    const [isVisible, setIsVisible] = React.useState(false)
    const toggleVisibility = () => setIsVisible(!isVisible)

    //email validation
    const validateEmail = (value: string) =>
        value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)
    const isInvalid = React.useMemo(() => {
        if (email === '') return false
        return validateEmail(email) ? false : true
    }, [email])

    return (
        <div className='flex justify-center mt-[15%] h-[50%] p-8 '>
            <Card className='w-[50%] h-[50%] bg-gradient-to-br from-white to-default-200'>
                <CardHeader className='pb-0 pt-8'>
                    <User
                        className='w-60 h-40'
                        name={currentUser?.userInfo.username}
                        description={currentUser?.userInfo.email}
                    />
                </CardHeader>
                <CardBody className='flex gap-3'>
                    <Button
                        color='danger'
                        variant='bordered'
                        startContent={
                            <UserIcon
                                filled={undefined}
                                size={undefined}
                                height={undefined}
                                width={undefined}
                                label={undefined}
                            />
                        }
                    >
                        Delete user
                    </Button>
                    <Button
                        color='danger'
                        variant='bordered'
                        startContent={
                            <UserIcon
                                filled={undefined}
                                size={undefined}
                                height={undefined}
                                width={undefined}
                                label={undefined}
                            />
                        }
                        onPress={() => {
                            
                        }}
                    >
                        Log out
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default UserPage
