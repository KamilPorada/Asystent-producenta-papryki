import heroSmall from "@/public/assets/img/hero-small.jpg";
import heroBig from "@/public/assets/img/hero-big.jpg";

const Header = () => {
  return (
    <header className="flex justify-center items-center flex-col relative w-screen h-screen p-4">
      <img
        src={heroSmall.src}
        alt="Hero Image Small"
        className="md:hidden absolute top-0 left-0 w-full h-full object-cover object-center"
      />
      <img
        src={heroBig.src}
        alt="Hero Image Big"
        className="md:block absolute top-0 left-0 w-full h-full object-cover object-center"
      />
      <div className="flex flex-col justify-center items-center z-10">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Witaj na naszej stronie!
        </h1>
        <p className="mt-4 text-center text-md sm:text-xl text-white opacity-70">
          Oferujemy wsparcie w skutecznym zarządzaniu produkcją od posadzenia pierwszej sadzonki aż do ostatniego zbioru!
        </p>
        <a href="#aboutus" className="cursor-pointer">
          <button className="mt-8 px-6 py-1 text-sm md:text-md lg:text-lg uppercase rounded-lg ring-1 ring-white cursor-pointer transition-transform duration-300 hover:scale-105 z-1000">
            poznaj nas
          </button>
        </a>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
      <a href="#aboutus" className="absolute bottom-5 text-2xl md:text-4xl p-3 cursor-pointer">
        <i className="fa-solid fa-angles-down fa-bounce cursor-pointer"></i>
      </a>
    </header>
  );
};

export default Header;
