import React from 'react';
import { useSession } from 'next-auth/react';
import { useTopBar } from '../contexts/TopBarContext';

function TopBar() {
  const { data: session } = useSession();
  const { selectedYear, handleYearChange } = useTopBar();

  const currentYear = new Date().getFullYear();
  const seasons = [];

  for (let i = 10; i > 0; i--) {
    const year = currentYear - i;
    seasons.push(year);
  }
  seasons.push(currentYear);
  for (let i = 1; i <= 10; i++) {
    const year = currentYear + i;
    seasons.push(year);
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
	handleYearChange(parseInt(event.target.value));
  };
  

  return (
    <div className='fixed flex flex-row justify-end items-center t-0 l-0 w-full h-16 bg-mainColor z-10'>
      <select
        className='absolute top-1/2 left-1/3 sm:left-1/2 transform -translate-y-1/2 sm:-translate-x-1/2 text-lg sm:text-xl md:text-2xl font-semibold bg-mainColor border-none focus:outline-none'
        value={selectedYear}
        onChange={handleSelectChange}>
        {seasons.map((year) => (
          <option className='text-sm' key={year} value={year}>
            Sezon {year}
          </option>
        ))}
      </select>
      <div className='flex flex-row mr-1 sm:mr-10'>
        {session?.user?.image && typeof session.user.image === 'string' && (
          <img src={session.user.image} width={37} height={37} className='rounded-full' alt='profile' />
        )}
        <p className='ml-2 self-center md:text-lg'>{session?.user?.name}</p>
      </div>
    </div>
  );
}

export default TopBar;
