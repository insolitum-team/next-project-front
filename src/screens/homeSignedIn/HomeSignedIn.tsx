'use client'

import { useLogin } from '@/hooks/useLogin'
import { useState } from 'react'
import { Input } from '@nextui-org/input'

import { Card, CardHeader, CardBody } from '@nextui-org/card'
import { useRouter } from 'next/navigation'
import { EyeFilledIcon } from '@/ui/icons/EyeFilledIcon'
import { EyeSlashFilledIcon } from '@/ui/icons/EyeSlashFilledButton'
import { MailIcon } from '@/ui/icons/MailIcon'
import { Button } from '@nextui-org/button'
import Image from 'next/image'
import React, { FC } from 'react'
import CodeEditor from '@/components/codeEditor/CodeEditor'
import { Avatar, AvatarGroup, AvatarIcon } from '@nextui-org/avatar'
import { useCurrentUser } from '@/hooks/useCurrentUser'

const HomePageSignedIn: FC = () => {
    const { user: currentUser } = useCurrentUser()
    return (
        <div className='flex justify-center mt-[15%] h-[50%] p-8 '>
            <Card className='w-[50%] h-[50%] bg-gradient-to-br from-white to-default-200'>
                <CardHeader className='pb-0 pt-8'>
                    <div className='flex flex-row justify-center items-center'>
                        <Avatar
                            name={currentUser?.userInfo.username}
                            classNames={{
                                base: 'w-[98px] h-[98px] mr-9',
                            }}
                        />
                        <div>
                            <h1>{currentUser?.userInfo.username}</h1>
                            <p>{currentUser?.userInfo.email}</p>
                        </div>
                    </div>
                    <div>
                        <p>🎓 My learning</p>
                        <p>📒 My contacts</p>
                    </div>
                </CardHeader>
                <CardBody className='flex gap-3'></CardBody>
            </Card>
        </div>
    )
}
export default HomePageSignedIn
