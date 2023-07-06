import React from 'react'

function TradeOfPepperTableHeader() {
	return (
		<>
			<div className='flex w-[1137px] text-sm lg:text-base h-auto  bg-mainColor text-white font-semibold text-center rounded-sm ring-1 ring-mainColor shadow z-10000'>
				<div className='flex flex-row justify-between items-center w-full h-full'>
					<p className='w-10 ring-1 ring-black'>L.P.</p>
					<p className='w-24 ring-1 ring-black'>Data</p>
					<p className='w-28 ring-1 ring-black'>Klasa</p>
					<p className='w-28 ring-1 ring-black'>Kolor</p>
					<p className='w-20 ring-1 ring-black'>Cena [zł]</p>
					<p className='w-28 ring-1 ring-black'>Masa [kg]</p>
					<p className='w-20 ring-1 ring-black'>VAT [%]</p>
					<p className='w-28 ring-1 ring-black'>Suma [zł]</p>
					<p className='w-80 ring-1 ring-black'>Punkt sprzedaży</p>
					<p className='w-20 ring-1 ring-black'>Akcja</p>
				</div>
			</div>
		</>
	)
}

export default TradeOfPepperTableHeader
