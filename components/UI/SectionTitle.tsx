const SectionTitle: React.FC<{ title: string }> = props => {
    return (
      <div className="relative">
        <h2 className="pb-1 text-center text-black text-lg md:text-xl lg:text-2xl uppercase font-semibold">
          <span className="absolute w-[100px] h-[3px] md:h-[4px] bg-mainColor bottom-0 left-1/2 transform -translate-x-1/2"></span>
          {props.title}
        </h2>
      </div>
    );
  };
  
  export default SectionTitle;
  