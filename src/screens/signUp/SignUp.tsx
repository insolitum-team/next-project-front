'use client'
import React from 'react'
import { useSignup } from '@/hooks/useSignUp'
import { useState } from 'react'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { Card } from '@nextui-org/card'
import { useRouter } from 'next/navigation'
const SignUpp = (): JSX.Element => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const { signup } = useSignup()
    const router = useRouter()
    const handleSubmit = () => {
        if (!username || !email || !password) {
            alert('Please enter information')
        } else {
            signup(username, email, password)
                .then((res) => router.push('/'))
                .catch((e) => alert(e))
        }
    }

    return (
        <Card>
            <Input
                value={username}
                onValueChange={setUsername}
                type='email'
                placeholder='Username'
            />
            <Input
                value={email}
                onValueChange={setEmail}
                type='email'
                placeholder='Email'
            />
            <Input
                name='password'
                value={password}
                onValueChange={setPassword}
                placeholder='password'
            />
            <Button type='submit' onPress={handleSubmit}>
                Submit
            </Button>
        </Card>
    )
}

export default SignUpp
