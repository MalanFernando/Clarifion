import { FaArrowRight } from "react-icons/fa6";

export const ButtonClaim = () => {
  return (
    <button className="flex justify-center items-center gap-4 uppercase text-sm 2xl:text-lg text-white font-medium bg-green py-2 2xl:py-4 rounded-full">
      Yes - Claim my discount <FaArrowRight />
    </button>
  );
}
