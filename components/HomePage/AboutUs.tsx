import SectionTitle from '@components/UI/SectionTitle'
import map from '../../public/assets/img/mapa.png'

const AboutUs = () => {
	return (
		<div className='container my-14' id='aboutus'>
			<SectionTitle title='Klika słów o naszej platformie' />
			<div className='flex flex-col md:flex-row-reverse items-center justify-between my-8'>
				<img src={map.src} alt='Mapa Polski z zaznaczonym Centrum Produkcji Papryki' className='drop-shadow-2xl md:w-1/2' />
				<p className='mt-5 md:mr-10 lg:text-lg text-black'>
				<span className='font-semibold text-mainColor'>Asystent Plantatora Papryki</span> to wszechstronne narzędzie dla producentów papryki pod osłonami. Dzięki niemu,
					łatwo gromadzisz informacje o sprzedanych plonach, śledzisz dochody i zarządzasz wydatkami. Platforma zapewnia
					pełną kontrolę nad produkcją, umożliwiając tworzenie dzienników fertygacji, chemizacji i notatek. Asystent
					Plantatora Papryki to niezawodny towarzysz w zarządzaniu gospodarstwem rolnym, pomagając osiągnąć sukces w
					uprawie papryki. W południowym Mazowszu, zwłaszcza w regionie Potworowa, koncentruje się centrum uprawy
					papryki w Polsce i Europie, zapewniając dogodne warunki klimatyczne i glebowe dla wysokiej jakości plonów.
				</p>
			</div>
		</div>
	)
}

export default AboutUs
