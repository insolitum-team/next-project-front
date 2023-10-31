'use client'
import React from 'react'
import { useLogin } from '@/hooks/useLogin'
import { useState } from 'react'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { Card } from '@nextui-org/card'
import { useRouter } from 'next/navigation'
const LogInn = (): JSX.Element => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useLogin()
    const router = useRouter()
    const handleSubmit = () => {
        if (!email || !password) {
            alert('Please enter information')
        } else {
            login(email, password)
                .then((res) => router.push('/'))
                .catch((e) => alert(e))
        }
    }

    return (
        <Card>
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

export default LogInn
