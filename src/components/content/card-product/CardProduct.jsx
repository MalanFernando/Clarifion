import Image from "next/image";
import clarifion from '../../../../public/clarifion.png';
import guarantee from '../../../../public/guarantee.png';
import { SideInfo } from "../side-info/SideInfo";
import { ButtonClaim } from "../button/ButtonClaim";
import { PayMethod } from "../pay-method/PayMethod";
import Link from "next/link";
import { FaCheck } from 'react-icons/fa6';
import UserComments from "../user-comments/UserComments";

export default function CardProduct() {
  return (
    <section className="grid justify-items-center gap-6 md:grid-cols-2">
      <h2 className="text-2xl text-center md:hidden">
        <span className="text-lightBlue">ONE TIME ONLY</span> special price for
        6 extra Clarifion for only{' '}
        <span className="text-lightBlue">$14 each</span> ($84.00 total!)
      </h2>
      <div className="md:col-span-1 grid justify-items-center gap-6">
        <Image
          src={clarifion}
          alt="Clarifion"
          width={575}
          height={591}
          className="min-w-[320px] min-h-[328px]"
        />
        <UserComments />
      </div>
      <div className="grid max-w-md md:min-w-full justify-self-center gap-6">
        <h2 className="text-2xl 2xl:text-3xl text-center hidden md:block md:text-left">
          <span className="text-lightBlue">ONE TIME ONLY</span> special price
          for 6 extra Clarifion for only{' '}
          <span className="text-lightBlue">$14 each</span> ($84.00 total!)
        </h2>
        <SideInfo />
        <ul className="grid gap-4 text-xs md:text-sm xl:text-base text-gray">
          <li className="flex gap-3">
            <FaCheck className="text-lightBlue text-xl font-extrabold" />
            <p>
              Negative Ion Technology may
              <span className="font-bold">help with allergens</span>
            </p>
          </li>
          <li className="flex gap-3">
            <FaCheck className="text-lightBlue text-xl font-extrabold" />
            <p>
              Designed for <span className="font-bold">air rejuvenation</span>
            </p>
          </li>
          <li className="flex gap-3">
            <FaCheck className="text-lightBlue text-xl font-extrabold" />
            <p>
              <span className="font-bold">Perfect for every room</span> in all
              types of places.
            </p>
          </li>
        </ul>
        <div className="w-full flex gap-4 justify-center items-center bg-opacityBlue px-4 py-2 rounded-lg">
          <span className="w-6 h-6 p-3 text-xs md:w-7 md:h-7 lg:text-sm bg-lightBlue text-white flex justify-center items-center rounded-full">
            %
          </span>
          <p className="w-full text-sm xl:text-base">
            Save <span className="text-lightBlue">53%</span> and get{' '}
            <span className="text-lightBlue">6 extra Clarifision</span> for only
            <span className="text-lightBlue">$14 Each</span>.
          </p>
        </div>
        <ButtonClaim />
        <PayMethod />
        <Link
          href="#"
          className="text-center text-xs md:text-sm 2xl:text-base text-red font-medium uppercase underline"
        >
          No thanks, I don’t want this.
        </Link>
        <div className="w-full flex gap-4 items-start">
          <Image
            src={guarantee}
            alt="Guarantee satisfaction sticker"
            width={48}
            height={48}
            className="2xl:w-20 2xl:h-20"
          />
          <p className="text-xs md:text-sm 2xl:text-base text-gray">
            If you are not completely thrilled with your Clarifion - We have a{' '}
            <span className="font-bold">30 day satisfaction guarantee</span>.
            Please refer to our return policy at the bottom of the page for more
            details. Happy Shopping!
          </p>
        </div>
      </div>
    </section>
  );
}
