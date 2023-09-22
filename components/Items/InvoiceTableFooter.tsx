import React from 'react'

function InvoiceTableFooter({ totalSumSum }: { totalSumSum: number }) {
	const formatNumber = (number: number) => {
		return number.toLocaleString('pl-PL', {
			style: 'currency',
			currency: 'PLN',
			minimumFractionDigits: 2,
		})
	}

	return (
		<>
			<div className='flex w-[1137px] text-sm lg:text-base h-auto bg-mainColor text-white font-semibold text-center rounded-sm ring-1 ring-mainColor shadow z-10000'>
				<div className='flex flex-row justify-between items-center w-full h-full'>
					<p className='w-[389px] ring-1 ring-black'>Suma:</p>
					<p className='w-44 ring-1 ring-black'>{formatNumber(totalSumSum)}</p>
					<p className='w-[708px] ring-1 ring-black text-mainColor'>-</p>
				</div>
			</div>
		</>
	)
}

export default InvoiceTableFooter
