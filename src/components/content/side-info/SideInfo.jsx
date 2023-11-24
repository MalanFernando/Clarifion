import Image from "next/image";
import clarifionShort from '../../../../public/clarifion-short.png'
import { GoStarFill } from 'react-icons/go';

export const SideInfo = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex gap-4 lg:gap-0">
        <div className="w-2/6 md:w-2/5">
          <Image
            src={clarifionShort}
            alt="Clarifion Air Ionizer"
            width={80}
            height={80}
            className="md:w-24 xl:w-[100px] 2xl:w-32 bg-lightBlue rounded-xl"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h3 className="text-sm md:text-lg 2xl:text-lg">
              Clarifion Air Ionizer
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-xs 2xl:text-base text-gray line-through">$180</span>
              <h3 className="text-sm 2xl:text-lg font-semibold text-lightBlue">$84</h3>
            </div>
          </div>
          <span className="flex items-center gap-1 text-sm xl:text-lg">
            <button>
              <GoStarFill className="text-yellow" />
            </button>
            <button>
              <GoStarFill className="text-yellow" />
            </button>
            <button>
              <GoStarFill className="text-yellow" />
            </button>
            <button>
              <GoStarFill className="text-yellow" />
            </button>
            <button>
              <GoStarFill className="text-yellow" />
            </button>
          </span>
          <p className="flex items-center gap-4 text-xs md:text-base">
            <input
              type="radio"
              checked
              className="stock-input w-3 h-3 flex justify-center items-center bg-opacityBlue rounded-full"
            />
            12 left in Stock
          </p>
          <div>
            <p className="hidden md:flex col-span-3 text-xs md:text-sm text-center md:text-left text-gray">
              Simply plug a Clarifion into any standard outlet and replace
              bulky, expensive air purifiers with a simple.
            </p>
          </div>
        </div>
      </div>
      <p className="col-span-4 text-xs md:text-sm text-center md:text-left text-gray md:hidden">
        Simply plug a Clarifion into any standard outlet and replace bulky,
        expensive air purifiers with a simple.
      </p>
    </section>
  );
}
