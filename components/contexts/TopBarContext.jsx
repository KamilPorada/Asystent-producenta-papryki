// TopBarContext.js
'use client'
import React, { createContext, useContext, useState } from 'react';

const TopBarContext = createContext();

export const TopBarProvider = ({ children }) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  return (
    <TopBarContext.Provider value={{ selectedYear, handleYearChange }}>
      {children}
    </TopBarContext.Provider>
  );
};

export const useTopBar = () => useContext(TopBarContext);
