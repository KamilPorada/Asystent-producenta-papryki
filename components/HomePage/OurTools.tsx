import SectionTitle from '@components/UI/SectionTitle'
import ToolItem from './ToolItem'

import image1 from '../../public/assets/img/trade-pepper-big.jpg'
import image2 from '../../public/assets/img/outgoings-big.jpg'
import image3 from '../../public/assets/img/balance-big.jpg'
import image4 from '../../public/assets/img/pesticides-big.jpg'
import image5 from '../../public/assets/img/fertigation-big.jpg'
import image6 from '../../public/assets/img/notes-big.jpg'

const OurTools = () => {
	return (
		<div className='container my-10'>
			<SectionTitle title='Nasze narzędzia' />
			<div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xl text-white'>
				<div className='flex flex-row justify-center items-center w-full h-32 bg-mainColor rounded my-2 shadow-inner'>
					<i className='fa-solid fa-arrow-trend-up text-4xl'></i>
					<p className='ml-3'>Sprzedaż papryki</p>
				</div>
				<div className='flex flex-row justify-center items-center w-full h-32 bg-secondaryColor rounded my-2 shadow-inner'>
					<i className='fa-solid fa-arrow-trend-down text-4xl'></i>
					<p className='ml-3'>Wydatki</p>
				</div>
				<div className='flex flex-row justify-center items-center w-full h-32 bg-mainColor rounded my-2 shadow-inner sm:order-1 md:order-none'>
					<i className='fa-solid fa-scale-balanced text-4xl'></i>
					<p className='ml-3'>Bilans zysków i strat</p>
				</div>
				<div className='flex flex-row justify-center items-center w-full h-32 bg-secondaryColor rounded my-2 shadow-inner sm:order-2 md:order-none'>
					<i className='fa-solid fa-skull-crossbones text-4xl'></i>
					<p className='ml-3'>Zabiegi cheminizacyjne</p>
				</div>
				<div className='flex flex-row justify-center items-center w-full h-32 bg-mainColor rounded my-2 shadow-inner sm:order-1 md:order-none'>
					<i className='fa-solid fa-droplet text-4xl'></i>
					<p className='ml-3'>Dziennik fertygacji</p>
				</div>
				<div className='flex flex-row justify-center items-center w-full h-32 bg-secondaryColor rounded my-2 shadow-inner'>
					<i className='fa-regular fa-clipboard text-4xl'></i>
					<p className='ml-3'>Notatki</p>
				</div>
			</div>
			<div>
				<ToolItem
					title='Sprzedaż papryki'
					describe='Moduł sprzedaży papryki w ramach Asystenta producenta papryki zapewnia wygodne i efektywne zarządzanie procesem sprzedaży tego cennego warzywa. Dzięki tej funkcji możesz śledzić ilość sprzedanej papryki, monitorować trendy cenowe na rynku i identyfikować kluczowych klientów. Moduł ten umożliwia generowanie raportów sprzedażowych, co pozwala na dokładną analizę wyników handlowych i podejmowanie strategii sprzedażowych.'
					imgPath={image1.src}
					imgLeft={true}
				/>
				<ToolItem
					title='Wydatki'
					describe='Moduł wydatków w ramach Asystenta producenta papryki pozwala na kompleksowe śledzenie i kontrolę kosztów związanych z produkcją papryki. Ten moduł umożliwia rejestrowanie i kategoryzowanie wszystkich wydatków związanych z uprawą, nawożeniem, ochroną roślin, sprzętem i innymi niezbędnymi zasobami. Dzięki temu masz pełen wgląd w swoje wydatki i możesz efektywnie zarządzać budżetem produkcji. Dodatkowo, moduł ten umożliwia generowanie raportów kosztowych, które umożliwiają analizę efektywności i identyfikację obszarów, w których można oszczędzić.'
					imgPath={image2.src}
					imgLeft={false}
				/>
				<ToolItem
					title='Bilans zysków i strat'
					describe='
                    Moduł bilansu zysków i strat w ramach Asystenta producenta papryki pozwala na monitorowanie i ocenę finansowej wydajności Twojego gospodarstwa rolnego. Dzięki temu narzędziu możesz śledzić przychody ze sprzedaży papryki oraz uwzględniać koszty produkcji, wydatki operacyjne i inne czynniki wpływające na rentowność Twojej działalności. Moduł generuje szczegółowe raporty finansowe, które przedstawiają dokładny obraz zysków i strat w określonym okresie czasu. Dzięki tym informacjom będziesz mógł dokładnie analizować i oceniać rentowność swojej produkcji papryki.'
					imgPath={image3.src}
					imgLeft={true}
				/>
				<ToolItem
					title='Zabiegi cheminizacyjne'
					describe='Moduł zabiegów chemizacyjnych w ramach Asystenta producenta papryki umożliwia precyzyjne śledzenie i zarządzanie wszystkimi przeprowadzanymi zabiegami ochrony roślin. Dzięki temu narzędziu możesz z łatwością planować, zapisywać i analizować aplikacje środków ochrony roślin, monitorować terminy i ilości stosowanych substancji czynnych oraz rejestrować efektywność przeprowadzonych zabiegów. Moduł zapewnia również dostęp do informacji o aktualnych zagrożeniach i zaleceniach dotyczących ochrony papryki, co pozwala Ci podejmować odpowiednie działania w odpowiednim czasie.'
					imgPath={image4.src}
					imgLeft={false}
				/>
				<ToolItem
					title='Dziennik fertgacji'
					describe='Dziennik fertygacji w ramach Asystenta producenta papryki umożliwia kompleksowe zarządzanie nawożeniem roślin. Ten moduł pozwala na precyzyjne monitorowanie i zapisywanie wszystkich przeprowadzanych aplikacji nawozów, śledzenie ilości stosowanych składników odżywczych oraz analizowanie efektywności przeprowadzonych zabiegów nawozowych. Możesz łatwo planować harmonogramy nawożenia, uwzględniając potrzeby i etapy wzrostu papryki, co pozwala zoptymalizować proces i zapewnić optymalne warunki dla roślin.'
					imgPath={image5.src}
					imgLeft={true}
				/>
				<ToolItem
					title='Notatki'
					describe='
                    Moduł notatek w Asystencie producenta papryki umożliwia łatwe gromadzenie i organizowanie informacji na temat Twojej uprawy papryki. Możesz tworzyć i przechowywać notatki dotyczące różnych aspektów produkcji, takich jak ważne terminy, obserwacje, pomysły czy uwagi. Dzięki temu modułowi masz zawsze pod ręką miejsce, gdzie możesz zapisywać istotne informacje i uwagi dotyczące swojej uprawy. Moduł notatek jest świetnym narzędziem do organizacji i śledzenia postępów oraz planowania kolejnych działań w ramach produkcji papryki. To wygodne i praktyczne rozwiązanie, które pomaga utrzymać porządek i efektywność w zarządzaniu Twoim gospodarstwem rolnym.'
					imgPath={image6.src}
					imgLeft={false}
				/>
			</div>
		</div>
	)
}

export default OurTools
