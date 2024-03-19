import React, { useState, useEffect } from 'react'
import Brand from '@components/UI/Brand'
import logoGoogle from '../../public/assets/img/logo-google.png'

import { signIn, useSession, getProviders } from 'next-auth/react'
import { LiteralUnion, ClientSafeProvider } from 'next-auth/react'
import { BuiltInProviderType } from 'next-auth/providers'

function MainNavigation() {
    const [isScrolled, setIsScrolled] = useState(false)
    const { data: session } = useSession()

    const [providers, setProviders] = useState<Record<
        LiteralUnion<BuiltInProviderType, string>,
        ClientSafeProvider
    > | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            const headerHeight = document.getElementById('header')?.offsetHeight || 0

            setIsScrolled(scrollPosition > headerHeight)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        (async () => {
            const res = await getProviders()
            setProviders(res)
        })()
    }, [])

    const handleSignInClick = (providerId: string, e: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>) => {
        e.preventDefault() 
        signIn(providerId)
    }

    return (
        <nav
            className={`flex flex-row justify-between md:justify-around items-center fixed top-0 left-0 w-screen h-20 transition-colors duration-300 z-10 ${
                isScrolled ? 'bg-black bg-opacity-60' : ''
            }`}>
            <Brand />
            {providers &&
                !session?.user?.name &&
                Object.values(providers).map(provider => (
                    <div
                        className='flex flex-row justify-between mx-3 sm:text-lg rounded font-semibold bg-mainColor hover:scale-105 cursor-pointer transition-transform'
                        onClick={(e) => {
                            handleSignInClick(provider.id, e)
                        }}
                        key={provider.id}>
                        <div className='bg-gray-100 p-2 ring-mainColor rounded'>
                            <img alt='Google "G" Logo' src={logoGoogle.src} className='w-7 rounded-sm' />
                        </div>
                        <button className='mx-5'>Zaloguj się</button>
                    </div>
                ))}
        </nav>
    )
}

export default MainNavigation
