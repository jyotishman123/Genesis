import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='flex items-center justify-center w-full h-[200px] shadow-2xl py-6 border bg-slate-500 class'>
      <div className='text-white text-center'>
        <h1 className='text-xl font-medium'>Developed by</h1>
        <br />
        <Link href="https://github.com/jyotishman123" target="_blank" rel="noopener noreferrer">
          Jyotishman Goswami
        </Link>
        <br />
        <Link href="https://github.com/Devkant21" target="_blank" rel="noopener noreferrer">
          Devkant Swargiary
        </Link>
        <p className='py-2 slate'>License @MIT 2024</p>
      </div>
    </div>
  );
};

export default Footer;
