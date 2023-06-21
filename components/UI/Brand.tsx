import logo from '@public/assets/img/logo.png'

const Brand = () => {
	return (
		<>
			<div className='flex flex-row items-center w-1/2'>
				<img className='w-14 md:w-15 mx-2' src={logo.src} alt='Logo strony internetowej Pod osłonami' />
				<p className='text-xl  font-semibold leading-5'>
					Asystent Producenta Papryki
				</p>
			</div>
		</>
	)
}

export default Brand
