'use client'
import { Progress } from '@nextui-org/progress'
export default function Loading() {
    return (
        <div className='flex justify-center column mt-[15%] h-[50%] p-8'>
            <h2 className='global'>Loading...</h2>
            <Progress
                size='lg'
                isIndeterminate
                aria-label='Loading...'
                className='max-w-md'
            />
        </div>
    )
}
