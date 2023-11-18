import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'

const Message = (): JSX.Element => {
    return (
        <Card className='mb-8 w-[959px] p-9 !important bg-[#FFFAEF] border-solid border-4 border-[#F6BE2C]'>
            <CardHeader className='flex justify-center'>
                <p>
                    A little <span>warning</span> here
                </p>
            </CardHeader>
            <CardBody>
                <p>
                    Our resource is not entirely legal 😇.
                    <br />
                    Many materials have been obtained by our own efforts and
                    experience, but we also use materials from other authors
                    (including 💵 paid and 🔒 closed ones) for your learning,
                    with whom the use of these materials is not agreed. <br />{' '}
                    <br /> In this regard, our website is not indexed in any way
                    and is a pirate resource 🏴‍☠️.{' '}
                </p>
            </CardBody>
            <CardFooter className='flex justify-center'>
                <p>Yo-ho-ho!</p>
            </CardFooter>
        </Card>
    )
}

export default Message
