import {
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-center ">
      <div className="flex flex-row items-center justify-between w-full bg-green-950 text-white py-5 px-10 rounded-b-3xl">
        <p className="text-lg font-light">
          Selamat datang di Bank Sampah Depok!
        </p>
        <div className="flex flex-row gap-5 text-xl">
          <FaFacebookF />
          <FaYoutube />
          <FaLinkedin />
          <AiFillInstagram />
        </div>
      </div>
      <div className="flex flex-row w-full justify-between px-20 h-20">
        <div className="flex flex-row items-center h-fit gap-5 justify-center py-8">
          <div className="flex flex-row items-center justify-center bg-orange-300 w-60 h-24 rounded-full z-50"></div>
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex flex-row items-center w-fit h-full gap-5 justify-center">
            <div className="flex flex-row items-center justify-center bg-orange-300 w-10 h-10 rounded-full text-green-950">
              <FaLocationDot />
            </div>
            <div className="flex flex-col">
              <p className="text-sm">Location</p>
              <p className="text-sm font-semibold">
                Jl. Merdeka Raya No.1 RT05/RW01,
                <br />
                Kel. Abadijaya, Kec. Sukmajaya, Kota Depok
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center h-full gap-5 justify-center">
            <div className="flex flex-row items-center justify-center bg-orange-300 w-10 h-10 rounded-full text-green-950">
              <FaPhone />
            </div>
            <div className="flex flex-col">
              <p className="text-sm">Contact</p>
              <p className="text-sm font-semibold">0813-1086-2475</p>
            </div>
          </div>
          <div className="flex flex-row items-center h-full gap-5 justify-center">
            <div className="flex flex-row items-center justify-center bg-orange-300 w-10 h-10 rounded-full text-green-950">
              <FaMailBulk />
            </div>
            <div className="flex flex-col">
              <p className="text-sm">Email</p>
              <p className="text-sm font-semibold">rumahharum@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center h-14 bg-blue-400">
        <ul className="flex flex-row gap-5">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Servis</a>
          </li>
          <li>
            <a href="">Program</a>
          </li>
          <li>
            <a href="">Gallery</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
