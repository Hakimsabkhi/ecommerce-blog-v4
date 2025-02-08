import Headertop from "@/components/menu/Headertop";
import HeaderBottom from "@/components/menu/Headerbottom";
import LogoComponent from "@/components/menu/LogoComponent";


const Header = async () => {

  return (
    <>
      <Headertop />
      <div className="w-full h-[80px] bg-primary flex justify-center items-center max-lg:justify-around gap-4 border-y border-gray-600">
        <div className="w-[90%] flex justify-between items-center max-lg:justify-around gap-4 min-h-[150px]">
          <LogoComponent />
        </div>
      </div>
      <HeaderBottom />
    </>
  );
};

export default Header;
