'use client'
import { Button } from '@nextui-org/button'
import Image from 'next/image'
import React, { FC } from 'react'
import Categories from './Categories'
import Message from './Message'
import { useCurrentUser } from '@/hooks/useCurrentUser'

const HomePage: FC = () => {
    return (
        <div className='flex justify-center items-center flex-col space-y-9'>
            <p className='text-4xl'>👨🏻‍💻DEVELOPER</p>
            <div className='bg-[#19191C] rounded-[36px] p-5'>
                <p className='text-[#D28852] text-xl'>
                    From <span className='text-[#D3D3D3]'>Scratch</span>
                </p>
                <p className='text-[#D28852] text-xl'>
                    with{' '}
                    <span className='text-[#21A2D9]'>
                        no_additional_resources
                    </span>
                </p>
            </div>
            <div className='w-[549px] h-[115px] flex flex-col justify-center items-center'>
                <p className='font-normal text-black text-[15px] text-center tracking-[0] leading-[23.2px] mb-5'>
                    <span className='font-medium'>
                        A website about how easy it is to quickly and correctly
                        become a developer. And most importantly, it&#39;s{' '}
                    </span>
                    <span className='font-extrabold'>free</span>
                    <span className='font-medium'>
                        .✨ <br />
                        Completely.
                    </span>
                </p>
                <Button
                    color='primary'
                    variant='solid'
                    className='w-1/4 h-1/4 p-5'
                >
                    Let’s start
                </Button>
            </div>
            <div className='space-y-0 -mb-10 z-0'>
                <Image
                    src='/webFrame.svg'
                    width={962}
                    height={525}
                    alt='Avatar'
                    className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300'
                />
            </div>
            <Categories />
            <Message />
        </div>
    )
}
export default HomePage
