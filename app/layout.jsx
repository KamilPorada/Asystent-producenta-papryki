import Navigation from '@components/HomePage/Navigation'
import Footer from '@components/HomePage/Footer'
import Provider from '@components/Provider'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

import '@styles/globals.css'

export const metadata = {
	title: 'Asystent Producenta Papryki',
	description: 'In the future...',
}

const RootLayout = ({ children }) => (
	<html lang='pl'>
		<head>
			<script src='https://kit.fontawesome.com/1c70c2797d.js'></script>
			<link
				href='https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap'
				rel='stylesheet'
			/>
		</head>
		<body>
			<Provider>
				<Navigation/>
				<main className='app'>{children}</main>
				<Footer/>
			</Provider>
		</body>
	</html>
)

export default RootLayout
