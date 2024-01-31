import React from 'react'
import { getAllUserInfo } from '@/helper/getAllUserInfo'
import Image from 'next/image';
import { icons } from '@/constraint/icons';
import Link from 'next/link';

export const HeroSection = async () => {
   
    const userData = await getAllUserInfo();
    console.log(userData)
  return (
    <div className='h-[80vh] flex items-center  my-[5%]'>
            <div className='w-[80%] mx-auto justify-start'>
                  <div className='text-center'>
                      <h1 className='font-bold text-[60px] uppercase my-2'>{userData?.me?.name}</h1>
                      <p className='text-lg my-2'>{userData?.me?.bio?.markdown}</p>
                  </div>
                 <div>
                    <h2 className='text-center uppercase font-semibold'>Follow me on</h2>
                 </div>
                <div className='my-[2%] flex flex-wrap gap-2 justify-center'>
                {Object.keys(userData?.me?.socialMediaLinks).map((ele, index) => {
    const socialMediaLink = userData?.me?.socialMediaLinks[ele];

    return (
      socialMediaLink && socialMediaLink.length > 0 && (
        <div key={index}>
          <div className='bg-blue-200 rounded-xl border-2 border-blue-500 shadow-lg py-2 px-4 '>
            <Link href={userData?.me?.socialMediaLinks[ele]}> 
            <Image src={`/${icons[ele]}`} height={50} width={50} alt='icons' priority />
            </Link>
          </div>
        </div>
      )
    );
  })}
                </div>

            </div>
    </div>
  )
}


export default HeroSection
