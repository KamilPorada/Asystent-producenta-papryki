import React from 'react';

function TradeOfPepperTableFooter({ totalSum, weightSum }: { totalSum: number; weightSum: number }) {
  const formatNumber = (number: number) => {
    return number.toLocaleString('pl-PL', {
      style: 'currency',
      currency: 'PLN',
      minimumFractionDigits: 2,
    });
  };

  return (
    <>
      <div className='flex w-[1137px] text-sm lg:text-base h-auto bg-mainColor text-white font-semibold text-center rounded-sm ring-1 ring-mainColor shadow z-10000'>
        <div className='flex flex-row justify-between items-center w-full h-full'>
          <p className='w-[135px] ring-1 ring-black'>Suma:</p>
          <p className='w-[303px] ring-1 ring-black text-mainColor'>-</p>
          <p className='w-[112px] ring-1 ring-black'>{weightSum.toLocaleString()} kg</p>
          <p className='w-[80px] ring-1 ring-black text-mainColor'>-</p>
          <p className='w-[111px] ring-1 ring-black'>{formatNumber(totalSum)}</p>
          <p className='w-[399px] ring-1 ring-black text-mainColor'>-</p>
        </div>
      </div>
    </>
  );
}

export default TradeOfPepperTableFooter;
