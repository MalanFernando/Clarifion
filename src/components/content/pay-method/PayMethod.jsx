import Image from "next/image";
import { FiLock } from 'react-icons/fi';
import visa from '../../../../public/visa.png'
import pay from '../../../../public/pay.png'
import payPal from '../../../../public/paypal.png'
import masterCard from '../../../../public/mastercard.png'
import applePay from '../../../../public/applepay.png'
import gPay from '../../../../public/Gpay.png'
import amex from '../../../../public/amex.png'

export const PayMethod = () => {
  return (
    <section className="flex flex-col justify-center items-center xl:flex-row xl:justify-between py-2 px-4 text-xs text-gray outline outline-1 outline-grayOpacity rounded-md">
      <div className="flex justify-center gap-2 xl:gap-0 pb-2 border-b border-grayOpacity xl:border-none xl:p-0">
        <span className="border-r border-grayOpacity pr-2 xl:pr-3">
          Free shipping
        </span>
        <span className="flex gap-2 justify-center items-center xl:px-4 xl:border-r border-grayOpacity">
          <FiLock />
          Secure 256-bit SSL encryption
        </span>
      </div>
      <picture className="flex gap-1 pt-2 xl:p-0">
        <Image src={visa} alt="visa" width={24} height={14} />
        <Image src={pay} alt="pay" width={24} height={14} />
        <Image src={payPal} alt="payPal" width={24} height={14} />
        <Image src={masterCard} alt="master card" width={24} height={14} />
        <Image src={applePay} alt="google pay" width={24} height={14} />
        <Image src={gPay} alt="apple pay" width={24} height={14} />
        <Image src={amex} alt="amex" width={24} height={14} />
      </picture>
    </section>
  );
}
