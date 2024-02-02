 
import React from "react";
import { getAllUserInfo } from "@/helper/getAllUserInfo";
import Image from "next/image";
import { icons } from "@/constraint/icons";
import Link from "next/link";
import PersonIcon from '@mui/icons-material/Person';
 


export const HeroSection = async () => {
  const userData = await getAllUserInfo();
  return (
    <div className="sm:h-[80vh] h-[100vh] min-h-[800px]  flex items-center my-6">
      <div className="w-[80%] mx-auto justify-start">
        <div className="text-center">
          <h1 className="font-bold sm:text-[60px] text-[35px] uppercase my-6 sm:my-2">
            {userData?.me?.name}
          </h1>
          <p className="text-lg sm:my-2 my-6">{userData?.me?.bio?.markdown}</p>
 
        </div>
        <div>
          <h2 className="text-center uppercase my-4 sm:my-0 font-semibold">Follow me on</h2>
        </div>
        <div className="sm:my-[2%]  my-[8%] flex flex-wrap gap-2 justify-center">
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
        <div className="  flex flex-col sm:flex-row justify-center my-[4%] py-3 px-3 gap-3">
      
              <div className="shadow-lg py-4 px-4 text-center hover:bg-black hover:text-white">
                   <div><span className="text-lg font-bold uppercase">Followers on Hashnode: </span>  <span className="text-lg font-bold uppercase">{userData?.me?.followersCount}</span></div>
              </div>

              <div className="shadow-lg py-4 px-6 text-center hover:bg-black hover:text-white">
                   <div><span className="text-lg font-bold uppercase">Followers on Hashnode: </span>  <span className="text-lg font-bold uppercase">{userData?.me?.followersCount}</span></div>
              </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;

