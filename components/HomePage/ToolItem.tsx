const ToolItem: React.FC<{
    title: string
    imgPath: string
    describe: string
    imgLeft: boolean
  }> = props => {
    const mainDivClasses = `flex flex-col sm:flex-row my-10 text-black ring-black ring-1 rounded-md bg-white overflow-hidden ${
      !props.imgLeft ? 'sm:flex-row-reverse' : ''
    }`;
  
    return (
      <div className={mainDivClasses}>
        <img
          src={props.imgPath}
          alt={props.describe}
          className="sm:w-1/2 object-cover hover:scale-105 transition-transform"
        />
        <div className="h-full p-2 sm:p-8 self-center overflow-hidden">
          <p className="text-mainColor font-semibold text-lg lg:text-xl">{props.title}</p>
          <p className="flex-grow">{props.describe}</p>
        </div>
      </div>
    );
  };
  
  export default ToolItem;
  