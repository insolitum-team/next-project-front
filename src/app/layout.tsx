'use client'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const jetbrains = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Insolitum learn',
    description: 'Educational resource for programmers',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en' className='light'>
            <body className={jetbrains.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
