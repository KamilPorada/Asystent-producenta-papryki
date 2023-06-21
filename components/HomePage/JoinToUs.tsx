import Button from "@components/UI/Button"

const JoinToUs = () => {
	return (
		<div className='h-72 flex flex-col justify-center items-center text-center bg-secondaryColor' >
			<p className='mb-4 text-2xl md:text-3xl lg:text-4xl'>Nie masz jeszcze konta?</p>
			<i className='fa-solid fa-users mb-2 text-4xl lg:text-5xl'></i>
			<p className='mb-4 text-xl font-light'>Dołącz do nas!</p>
			<Button>Zarejestruj się</Button>
		</div>
	)
}

export default JoinToUs
