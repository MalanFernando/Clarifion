import Image from "next/image";
import clarifionLogo from '../../../public/ClarifionLogo.png'
import mcafee from '../../../public/mcaf.png'
import norton from '../../../public/norton.png'
import { IoIosArrowBack, IoIosArrowForward, IoMdHeartEmpty } from 'react-icons/io';
import { BsPatchCheck } from 'react-icons/bs';
import { PiTruck } from 'react-icons/pi';
import { IoSyncOutline } from 'react-icons/io5';


export default function Header() {
  return (
    <header className="w-full grid gap-5">
      <section className="w-full bg-darkBlue text-white">
        <div className="m-auto flex gap-2 justify-between px-4 py-2 max-w-6xl">
          <button className="lg:hidden">
            <IoIosArrowBack />
          </button>
          <ul className="w-full flex justify-center sm:justify-between items-center gap-2 text-xs font-light">
            <li className="flex gap-2 items-center">
              <BsPatchCheck />
              <span>30-DAY SATISFACTION GUARANTEE</span>
            </li>
            <li className="gap-2 items-center hidden sm:flex">
              <PiTruck />
              <span>Free delivery on orders over $40.00</span>
            </li>
            <li className="gap-2 items-center hidden md:flex">
              <IoMdHeartEmpty />
              <span>50.000+ HAPPY CUSTOMERS</span>
            </li>
            <li className="gap-2 items-center hidden lg:flex">
              <IoSyncOutline />
              <span>100% Money Back Guarantee</span>
            </li>
          </ul>
          <button className="lg:hidden">
            <IoIosArrowForward />
          </button>
        </div>
      </section>
      <picture className="m-auto w-full flex justify-between items-center p-5 max-w-6xl">
        <Image
          src={clarifionLogo}
          alt="Clarifion logotype"
          width={106}
          height={20}
          className="sm:w-32 2xl:w-40"
        />
        <div className="flex gap-4">
          <Image
            src={mcafee}
            alt="MacAfee logotype"
            width={44}
            height={16}
            className="sm:w-14 2xl:w-20"
          />
          <Image
            src={norton}
            alt="Norton logotype"
            width={41}
            height={16}
            className="sm:w-14 2xl:w-20"
          />
        </div>
      </picture>
    </header>
  );
}
