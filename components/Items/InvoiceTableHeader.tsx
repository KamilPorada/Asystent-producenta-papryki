import React from 'react'

function InvoiceTableHeader() {
	return (
		<>
			<div className='flex w-[1137px] text-sm lg:text-base h-auto  bg-mainColor text-white font-semibold text-center rounded-sm ring-1 ring-mainColor shadow z-10000'>
				<div className='flex flex-row justify-between items-center w-full h-full'>
					<p className='w-16 ring-1 ring-black'>L.P.</p>
					<p className='w-28 ring-1 ring-black'>Data</p>
					<p className='w-44 ring-1 ring-black'>Numer faktury</p>
					<p className='w-40 ring-1 ring-black'>Kwota [zł]</p>
					<p className='w-80 ring-1 ring-black'>Punkt sprzedaży</p>
					<p className='w-36 ring-1 ring-black'>Status</p>
					<p className='w-44 ring-1 ring-black'>Akcja</p>
				</div>
			</div>
		</>
	)
}

export default InvoiceTableHeader
