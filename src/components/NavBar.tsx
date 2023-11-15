'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Divider } from '@nextui-org/divider'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from '@nextui-org/navbar'
import { Button } from '@nextui-org/button'
import { Avatar } from '@nextui-org/avatar'
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    DropdownSection,
} from '@nextui-org/dropdown'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { useLogout } from '@/hooks/useLogout'
import { motion, useScroll, useSpring } from 'framer-motion'
import { UserInfo } from '../types/userinfo';


function NavBar() {
    const user = useCurrentUser()
    const router = useRouter()
    const { logout } = useLogout()
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <Navbar className='mb-5'>
            <NavbarContent justify='start' className='pr-32'>
                <NavbarItem>
                    <NavbarBrand>
                        <Avatar src='/avatar.png' className='mr-4' />
                        <p className='font-bold text-inherit'>
                            Insolitum learn
                        </p>
                    </NavbarBrand>
                </NavbarItem>
                <NavbarItem>
                    <Dropdown
                        classNames={{
                            base: 'before:bg-default-200', // change arrow background
                            content:
                                'py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black',
                        }}
                    >
                        <DropdownTrigger>
                            <Button variant='light'>Categories</Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            variant='faded'
                            aria-label='Static Actions'
                        >
                            <DropdownSection
                                title='Backend development'
                                showDivider
                            >
                                <DropdownItem key='new'>Python</DropdownItem>
                                <DropdownItem key='copy'>Java</DropdownItem>
                            </DropdownSection>
                            <DropdownSection title='Frontend development'>
                                <DropdownItem key='edit'>
                                    JavaScript
                                </DropdownItem>
                                <DropdownItem key='delete'>React</DropdownItem>
                            </DropdownSection>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify='end'>
                <NavbarItem>
                    {/* This button logout user for now */}
                    <Button
                        onPress={() => {
                            logout()

                            router.push(window.location.href)
                            router.refresh()
                        }}
                        variant='light'
                    >
                        Make a donation
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Button variant='light'>Join us</Button>
                </NavbarItem>
                <Divider orientation='vertical' className='h-8' />
                <NavbarItem>
                    <Button
                        variant='light'
                        onPress={() => router.push('/auth/login')}
                    >
                        Log in
                    </Button>
                </NavbarItem>
                {user ? (
                    <NavbarItem>
                        <Button
                            onPress={() => router.push('/auth/signup')}
                            color='primary'
                            variant='solid'
                        >
                            {user.userInfo.username}
                        </Button>
                    </NavbarItem>
                ) : (
                    <NavbarItem>
                        <Button
                            onPress={() => router.push('/auth/signup')}
                            color='primary'
                            variant='solid'
                        >
                            You need to sign up
                        </Button>
                    </NavbarItem>
                )}
                <NavbarItem>
                    <Button
                        onPress={() => router.push('/auth/signup')}
                        color='primary'
                        variant='solid'
                    >
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <motion.div className='progress-bar' style={{ scaleX }} />
        </Navbar>
    )
}

export default NavBar
