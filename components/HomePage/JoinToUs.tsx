import Button from "@components/UI/Button"
import React, { useState, useEffect } from 'react'
import { signIn, useSession, getProviders } from 'next-auth/react'
import { LiteralUnion, ClientSafeProvider } from 'next-auth/react'
import { BuiltInProviderType } from 'next-auth/providers'
import logoGoogle from '../../public/assets/img/logo-google.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faUsers
} from '@fortawesome/free-solid-svg-icons'

const JoinToUs = () => {
	const { data: session } = useSession()

	const [providers, setProviders] = useState<Record<
		LiteralUnion<BuiltInProviderType, string>,
		ClientSafeProvider
	> | null>(null)

	useEffect(() => {
		;(async () => {
			const res = await getProviders()
			setProviders(res)
		})()
	}, [])
	return (
		<div className='h-72 flex flex-col justify-center items-center text-center bg-secondaryColor' >
			<p className='mb-4 text-2xl md:text-3xl lg:text-4xl'>Nie masz jeszcze konta?</p>
			<FontAwesomeIcon icon={faUsers} className='mb-2 text-4xl lg:text-5xl' />
			<p className='mb-4 text-xl font-light'>Zapraszamy do nas za pośrednictwem konta Google!</p>
			{providers &&
				!session?.user?.name &&
				Object.values(providers).map(provider => (
					<div
						className='flex flex-row justify-between mx-3 sm:text-lg rounded font-semibold bg-mainColor hover:scale-105 cursor-pointer transition-transform'
						onClick={() => {
							signIn(provider.id)
						}}
						key={provider.id}>
						<div className='bg-gray-100 p-2 ring-mainColor rounded'>
							<img alt='Google "G" Logo' src={logoGoogle.src} className='w-7 rounded-sm' />
						</div>
						<button className='mx-5'>Dołącz do nas</button>
					</div>
				))}
		</div>
	)
}

export default JoinToUs
