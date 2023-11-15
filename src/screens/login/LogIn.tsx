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
import { MailIcon } from '@/ui/icons/MailIcon'

const LogInn = (): JSX.Element => {
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
                <CardHeader className='flex flex-col pb-0 pt-8'>
                    <p className='font-extrabold  text-4xl'>
                        Login and learn! 🎓
                    </p>
                    <p className='text-s font-medium text-xl text-[#545F71] mb-4'>
                        Or create an account
                    </p>
                </CardHeader>
                <CardBody className='flex gap-3'>
                    <Input
                        value={email}
                        onValueChange={setEmail}
                        type='email'
                        label='email'
                        variant='bordered'
                        isInvalid={isInvalid}
                        color={isInvalid ? 'danger' : 'default'}
                        errorMessage={isInvalid && 'Please enter a valid email'}
                        endContent={
                            <MailIcon className='text-2xl text-default-400 pointer-events-none' />
                        }
                    />
                    <Input
                        value={password}
                        onValueChange={setPassword}
                        label='Password'
                        variant='bordered'
                        endContent={
                            <button
                                className='focus:outline-none'
                                type='button'
                                onClick={toggleVisibility}
                            >
                                {isVisible ? (
                                    <EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />
                                ) : (
                                    <EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />
                                )}
                            </button>
                        }
                        type={isVisible ? 'text' : 'password'}
                    />
                    <Button
                        type='submit'
                        color='primary'
                        onPress={handleSubmit}
                    >
                        Submit
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default LogInn
