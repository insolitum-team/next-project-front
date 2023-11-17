'use client'
import { useEffect } from 'react'
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
import { motion, useScroll, useSpring } from 'framer-motion'
import { User } from '@nextui-org/user'
import { DeleteIcon } from '@/ui/icons/DeleteIcon'
import { EditIcon } from '@/ui/icons/EditIcon'
import { UserIcon } from '@/ui/icons/UserIcon'
import { cn } from '@nextui-org/react'
import { useLogout } from '@/hooks/useLogout'
import { useDeleteUser } from '@/hooks/useDeleteUser'
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from '@nextui-org/modal'
import { Link } from '@nextui-org/link'

function NavBar() {
    const iconClasses =
        'text-xl text-default-500 pointer-events-none flex-shrink-0'
    const { user: currentUser } = useCurrentUser()
    const { logout } = useLogout()
    const { deleteUser: deleteFunction } = useDeleteUser()
    const router = useRouter()
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })
    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    return (
        <Navbar className='mb-5'>
            <NavbarContent justify='start' className='pr-32'>
                <NavbarItem>
                    <NavbarBrand>
                        <Avatar src='/avatar.png' className='mr-4' />
                        <Link className='font-bold text-inherit cursor-pointer' onPress={() => {router.push('/')}}>
                            Insolitum learn
                        </Link>
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
                    <Button variant='light'>Make a donation</Button>
                </NavbarItem>
                <NavbarItem>
                    <Button variant='light'>Join us</Button>
                </NavbarItem>
                <Divider orientation='vertical' className='h-8' />

                {currentUser ? (
                    <NavbarItem>
                        <Dropdown placement='bottom-end'>
                            <DropdownTrigger>
                                <User
                                    as='button'
                                    name={currentUser.userInfo.username}
                                    description={currentUser.userInfo.email}
                                />
                            </DropdownTrigger>
                            <DropdownMenu
                                aria-label='Profile Actions'
                                variant='flat'
                            >
                                <DropdownItem
                                    key='edit'
                                    startContent={
                                        <EditIcon className={iconClasses} />
                                    }
                                >
                                    Edit user
                                </DropdownItem>
                                <DropdownItem
                                    key='delete'
                                    className='text-danger'
                                    color='danger'
                                    onPress={() => {
                                        logout()
                                        router.push('/auth/login')
                                    }}
                                    startContent={
                                        <UserIcon
                                            className={iconClasses}
                                            filled={undefined}
                                            size={undefined}
                                            height={undefined}
                                            width={undefined}
                                            label={undefined}
                                        />
                                    }
                                >
                                    Log out
                                </DropdownItem>
                                <DropdownItem
                                    key='delete'
                                    className='text-danger'
                                    color='danger'
                                    onPress={onOpen}
                                    startContent={
                                        <DeleteIcon
                                            className={cn(
                                                iconClasses,
                                                'text-danger'
                                            )}
                                        />
                                    }
                                >
                                    Delete user
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarItem>
                ) : (
                    <>
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
                    </>
                )}
            </NavbarContent>
            <motion.div className='progress-bar' style={{ scaleX }} />
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className='flex flex-col gap-1'>
                                Deleting user
                            </ModalHeader>
                            <ModalBody>
                                <p>
                                    Are you shure you want to delete your
                                    account?
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color='danger'
                                    variant='light'
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                                <Button
                                    color='primary'
                                    onPress={() => {
                                        deleteFunction()
                                        logout()
                                        router.push('/auth/signup')
                                    }}
                                >
                                    Yes, i understand everything
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </Navbar>
    )
}

export default NavBar
