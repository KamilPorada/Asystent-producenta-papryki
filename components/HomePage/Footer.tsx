import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col bg-gray-200 py-4 text-center text-black text-md md:text-lg">
      <p>&copy; {currentYear} Asystent Producenta Papryki</p>
      <p>Wszelkie prawa zastrzeżone</p>
    </footer>
  );
}

export default Footer;
