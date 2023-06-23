import heroSeedlingSmall from "@/public/assets/img/seedling-small.jpg";
import heroSeedlingBig from "@/public/assets/img/seedling-big.jpg";

const HeroSeedling = () => {
  return (
    <div className="relative w-screen h-96 -z-10">
      <img
        src={heroSeedlingSmall.src}
        alt="Hero Seedling Image Small"
        className="md:hidden absolute top-0 left-0 w-full h-full object-cover object-center"
      />
      <img
        src={heroSeedlingBig.src}
        alt="Hero Seedling Image Big"
        className="hidden md:block absolute top-0 left-0 w-full h-full object-cover object-center"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
      <div className="flex justify-center items-center absolute top-1/4 left-1/4 w-1/2 h-1/2 p-5 text-center sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ring-2 ring-white rounded">
        <p>Uprawiaj paprykę z pewnością sukcesu - skorzystaj z naszej platformy!</p>
      </div>
    </div>
  );
};

export default HeroSeedling;
