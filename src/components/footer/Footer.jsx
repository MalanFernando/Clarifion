import React from 'react'
import { FiLock } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="w-full bg-darkBlue text-white">
      <section className="m-auto flex justify-center sm:justify-between items-center flex-wrap p-5 gap-4 text-xs max-w-6xl">
        <div className="flex gap-2 h-6">
          <span className="py-1 border-r border-grayOpacity pr-3">
            Copyright (c) 2023
          </span>
          <span className='py-1'>Clarifionsupport@clarifion.com</span>
        </div>
        <p className="flex items-center gap-4">
          <FiLock />
          Secure 256-bit SSL encryption.
        </p>
      </section>
    </footer>
  );
}
