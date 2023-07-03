import React, { ChangeEvent, useState } from 'react';

interface SearchInputProps {
  onSearch: (searchTerm: string) => void;
}

function SearchInput({ onSearch }: SearchInputProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className='relative flex flex-row justify-between items-center w-full p-1 mt-4 text-black bg-white rounded ring-1 ring-zinc-300 before:absolute before:top-1 before:left-8 before:bottom-0 before:w-[2px] before:h-6 before:bg-mainColor'>
      <i className='fa-solid fa-magnifying-glass relative mr-4 p-1 outline-none border-none'></i>
      <input
        type='text'
        className='w-full focus:outline-none'
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchInput;
