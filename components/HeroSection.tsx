<<<<<<< HEAD
import React from "react";
import { getAllUserInfo } from "@/helper/getAllUserInfo";
import Image from "next/image";
import { icons } from "@/constraint/icons";
import Link from "next/link";
import PersonIcon from '@mui/icons-material/Person';
=======
"use client"

import React, { FC } from 'react';
import { getPost } from '@/helper/getPost';
import HeroSectionLeft from './HeroSectionLeft';
import HeroSectionRight from './HeroSectionRight';
>>>>>>> fa43ad289e5580b995c934bd3cdeda1764791ad4


export const HeroSection = async () => {
  const userData = await getAllUserInfo();
  return (
<<<<<<< HEAD
    <div className="h-[80vh] flex items-center  my-6">
      <div className="w-[80%] mx-auto justify-start">
        <div className="text-center">
          <h1 className="font-bold text-[60px] uppercase my-2">
            {userData?.me?.name}
          </h1>
          <p className="text-lg my-2">{userData?.me?.bio?.markdown}</p>
=======
    <div className='my-6 py-6 px-6  '>
      <div className='flex flex-col sm:flex-row w-full gap-2'>
        <div className=' basis-2/3'>
          <HeroSectionLeft username={username} profilePic={profilePicture} post={posts} node={''} />
>>>>>>> fa43ad289e5580b995c934bd3cdeda1764791ad4
        </div>
        <div>
          <h2 className="text-center uppercase font-semibold">Follow me on</h2>
        </div>
        <div className="my-[2%] flex flex-wrap gap-2 justify-center">
          {Object.keys(userData?.me?.socialMediaLinks).map((ele, index) => {
            const socialMediaLink = userData?.me?.socialMediaLinks[ele];

            return (
              socialMediaLink &&
              socialMediaLink.length > 0 && (
                <div key={index}>
                  <div className="bg-blue-200 rounded-xl border-2 border-blue-500 shadow-lg py-2 px-4 hover:scale-95 hover:bg-blue-400 ">
                    <Link href={userData?.me?.socialMediaLinks[ele]}>
                      <Image
                        src={`/${icons[ele]}`}
                        height={50}
                        width={50}
                        alt="icons"
                        priority
                      />
                    </Link>
                  </div>
                </div>
              )
            );
          })}
        </div>
        <div className=" flex justify-center my-[2%] py-3 px-3 gap-3">
          <div className=" shadow-xl py-6 px-6 hover:border-2 border-black">
                  <h3 className="uppercase font-semibold">Following on Hasnode</h3>
                  <div className="my-2 flex justify-center items-center gap-2">
                      <PersonIcon/><span className="text-xl font-bold">{userData?.me?.followingsCount}</span>
                  </div>
          </div>
          <div className=" shadow-xl py-6 px-6  hover:border-2 border-black">
          <h3 className="uppercase font-semibold">Followers on Hasnode</h3>
                  <div className="my-2 flex justify-center items-center gap-2">
                      <PersonIcon/><span className="text-xl font-bold">{userData?.me?.followersCount}</span>
                  </div>
          </div>
           
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
<<<<<<< HEAD
=======

// import React, { FC, useEffect, useState } from 'react';
// import { getPost } from '@/helper/getPost';
// import HeroSectionLeft from './HeroSectionLeft';
// import HeroSectionRight from './HeroSectionRight';

// interface HeroSectionProps { }

// const HeroSection: FC<HeroSectionProps> = () => {
//   const [data, setData] = useState<any>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await getPost();
//         setData(result);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   if (!data) {
//     return null; // or loading indicator
//   }

//   const { username, profilePicture } = data.user;
//   const posts = data?.user?.posts?.edges[0];
//   const [, ...newposts] = data?.user?.posts?.edges;

//   return (
//     <div className='my-6 py-6 px-6'>
//       <div className='flex flex-col sm:flex-row w-full gap-2'>
//         <div className='basis-2/3'>
//           <HeroSectionLeft username={username} profilePic={profilePicture} post={posts} node={''} />
//         </div>
//         <div className='basis-1/3'>
//           <HeroSectionRight username={username} profilePic={profilePicture} posts={newposts} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
>>>>>>> fa43ad289e5580b995c934bd3cdeda1764791ad4
