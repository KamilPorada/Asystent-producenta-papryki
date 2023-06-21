import logo from '@public/assets/img/logo.png'

const Brand = () => {
	return (
		<>
			<div className='flex flex-row items-center w-1/2'>
				<img className='w-14 md:w-16 mx-2' src={logo.src} alt='Logo strony internetowej Pod osłonami' />
				<p className='text-xl md:text-2xl font-semibold leading-4'>
					Asystent Producenta Papryki
				</p>
			</div>
		</>
	)
}

export default Brand
