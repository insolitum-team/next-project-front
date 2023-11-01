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
} from '@nextui-org/dropdown'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { useLogout } from '@/hooks/useLogout'

function NavBar() {
    const user = useCurrentUser()
    const router = useRouter()
    const { logout } = useLogout()
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
                    <Dropdown>
                        <DropdownTrigger>
                            <Button variant='light'>Categories</Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            variant='faded'
                            aria-label='Static Actions'
                        >
                            <DropdownItem key='new'>Python</DropdownItem>
                            <DropdownItem key='copy'>Java</DropdownItem>
                            <DropdownItem key='edit'>JavaScript</DropdownItem>
                            <DropdownItem key='delete'>React</DropdownItem>
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
        </Navbar>
    )
}

export default NavBar
