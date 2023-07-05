import React from 'react'

const TradeOfPepperItem: React.FC<{
	index: number
	date: string
	clas: string
	color: string
	price: number
	weight: number
	vatRate: number
	totalSum: number
	pointOfSale: string
}> = props => {
	return (
		<>
			<div className='flex w-[1137px] h-auto bg-white text-sm lg:text-base text-black text-center ring-1 ring-black overflow-x-auto'>
				<div className='flex flex-row justify-evenly items-center w-full h-full'>
					<p className='w-10 h-full ring-1 ring-black'>{props.index}</p>
					<p className='w-20 ring-1 ring-black'>{props.date}</p>
					<p className='w-28 ring-1 ring-black'>{props.clas}</p>
					<p className='w-28 ring-1 ring-black'>{props.color}</p>
					<p className='w-20 ring-1 ring-black'>{props.price}zł</p>
					<p className='w-24 ring-1 ring-black'>{props.weight}kg</p>
					<p className='w-20 ring-1 ring-black'>{props.vatRate}%</p>
					<p className='w-24 ring-1 ring-black'>{props.totalSum}zł</p>
					<p className='w-80 ring-1 ring-black'>{props.pointOfSale}</p>
					<div className='flex flex-row justify-evenly w-32 text-white ring-1 ring-black '>
						<button className='scale-75 px-[10px] bg-mainColor hover:bg-green-800 transition'>
							<i className='fa-solid fa-pen-to-square'></i>
						</button>
						<button className='scale-75 px-[10px] bg-mainColor hover:bg-green-800 transition'>
							<i className='fa-solid fa-trash'></i>
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default TradeOfPepperItem
