import { BiSolidPhoneCall, BiSolidMap } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="">
    <div className="bg-[#001446] ">
    <div className="   border-b-[1px] border-gray-600">
      <div className="flex items-center p-5 pb-0 md:max-w-[1480px] mx-auto justify-between ">
        <div className="flex items-center text-white">
          <BiSolidPhoneCall className="mr-5" />
          <FaEnvelope  className="mr-5"/>
          <BiSolidMap className="mr-5"/>
          <p className="text-sm">EXPLORE THE DESTINATION</p>
        </div>
        <div className="text-center text-[#dcb84e] font-serif mr-16 ">
          <h1 className="text-2xl">AL ZAMALUXE</h1>
          <h2 className="text-xl">The Royel</h2>
          <p className="text-xs">Dhaka</p>
        </div>
        <div className="">
          <button className="px-8 bg-[#877a52] hover:bg-[#d3aa2f] duration-700 py-3 text-white">Book Now</button>
        </div>
      </div>

    </div>
          <div className="flex w-3/5 mx-auto justify-between py-3 text-white text-sm">
          <a href="#">STAYS</a>
          <a href="#">DINING</a>
          <a href="#">ENTERTAINMENT</a>
          <a href="#">ADVENTURES</a>
          <a href="#">EXPRIENCE</a>
          <a href="#">EVENTS</a>
          <a href="#">OFFERS</a>
        </div>
    </div>
    </div>
  );
};

export default Navbar;
