'use client'
import HomePage from '../../screens/home/Home'
import HomePageSignedIn from '@/screens/homeSignedIn/HomeSignedIn'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { useEffect } from 'react'

export default function Home() {
    return <HomePageSignedIn />
}