import Link from "next/link"
import { BsCheckLg } from "react-icons/bs";

export const Steps = () => {
  return (
    <section>
      <ul className="flex justify-between items-center text-xs lg:text-base 2xl:text-xl">
        <li>
          <Link
            href="#"
            className="flex items-center justify-center flex-col md:flex-row gap-2 flex-wrap"
          >
            <BsCheckLg className="w-5 h-5 2xl:w-10 2xl:h-10 p-[2px] flex justify-center items-center bg-lightGreen text-white text-sm 2xl:text-xl rounded-full" />
            <p className="flex gap-1">
              <span className="hidden md:flex">Step 1 :</span>Cart Review
            </p>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex items-center justify-center flex-col md:flex-row gap-2 flex-wrap"
          >
            <BsCheckLg className="w-5 h-5 2xl:w-10 2xl:h-10 p-[2px] flex justify-center items-center bg-lightGreen text-white text-sm 2xl:text-xl rounded-full" />
            <p className="flex gap-1">
              <span className="hidden md:flex">Step 2 :</span>Checkout
            </p>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex items-center justify-center flex-col md:flex-row gap-2 flex-wrap"
          >
            <span className="w-5 h-5 2xl:w-10 2xl:h-10 p-[2px] flex justify-center items-center bg-lightBlue text-white text-sm 2xl:text-xl rounded-full">
              3
            </span>
            <p className="flex gap-1 font-bold">
              <span className="hidden md:flex">Step 3 :</span>Special Offer
            </p>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex items-center justify-center flex-col md:flex-row gap-2 flex-wrap"
          >
            <span className="w-5 h-5 2xl:w-10 2xl:h-10 p-[2px] flex justify-center items-center outline outline-1 outline-lightBlue text-lightBlue text-sm 2xl:text-xl rounded-full">
              4
            </span>
            <p className="flex gap-1">
              <span className="hidden md:flex">Step 4 :</span>Confirmation
            </p>
          </Link>
        </li>
      </ul>
    </section>
  );
}
