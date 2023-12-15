import type { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export default function middleware(req: NextRequest) {
    let verify = req.cookies.get('currentUser')
    let url = req.url

    if (!verify && url.includes('/homePage')) {
        return NextResponse.redirect('http://localhost:3000/')
    }

    if (verify && url === 'http://localhost:3000/') {
        return NextResponse.redirect('http://localhost:3000/homePage')
    }
    if (verify && url === '/auth/login') {
        return NextResponse.redirect('http://localhost:3000/homePage')
    }
    if (verify && url === '/auth/signup') {
        return NextResponse.redirect('http://localhost:3000/homePage')
    }
}
