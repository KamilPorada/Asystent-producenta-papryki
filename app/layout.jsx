import Navigation from '@components/Navigation/Navigation'
import Footer from '@components/HomePage/Footer'
import { TopBarProvider } from '@components/contexts/TopBarContext' // Import TopBarProvider
import Provider from '@components/Provider'
import { ToastContainer, Zoom } from 'react-toastify'

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
			<Provider> {/* Provider otacza całą aplikację */}
				<TopBarProvider> {/* TopBarProvider jest renderowany wokół Navigation */}
					<Navigation /> {/* Navigation, który ma dostęp do TopBarProvider */}
					<main className='app'>{children}</main>
				</TopBarProvider>
				<Footer />
				<ToastContainer draggable={false} transition={Zoom} autoClose={4000} />
			</Provider>
		</body>
	</html>
)

export default RootLayout
