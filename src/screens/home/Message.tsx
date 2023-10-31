import React from 'react'
import { CommentBox } from './CommentBox'

const Message = (): JSX.Element => {
    return (
        <div className='w-[962px] h-[461px]'>
            <div className='w-[968px] h-[461px] top-0 left-0'>
                <div className='relative w-[962px] h-[461px]'>
                    <CommentBox
                        className='!h-[451px] !rounded-[20px] !flex ![overflow:unset] !w-[962px]'
                        hasDiv={false}
                    />
                    ;
                    <p className='absolute w-[387px] left-[287px] font-medium text-transparent text-[24px] text-center tracking-[-0.48px] z-200 mt-4'>
                        <span className='text-black'>A little </span>
                        <span className='text-[#d36500]'>warning</span>
                        <span className='text-black'> here</span>
                    </p>
                    <p className='absolute w-[885px] h-[299px] top-[97px] left-[38px]   text-black text-lg text-justify tracking-[-0.48px] leading-[36.5px] mb-7'>
                        Our resource is not entirely legal 😇. <br />
                        Many materials have been obtained by our own efforts and
                        experience, but we also use materials from other authors
                        (including 💵 paid and 🔒 closed ones) for your
                        learning, with whom the use of these materials is not
                        agreed. <br />
                        <br />
                        In this regard, our website is not indexed in any way
                        and is a pirate resource 🏴‍☠️.
                    </p>
                    <div className='absolute w-[387px] h-[100px] top-[400px] left-[287px]  font-medium text-black text-[24px] text-center tracking-[-0.48px] leading-[22px]'>
                        Yo-ho-ho!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
