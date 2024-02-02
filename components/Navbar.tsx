import React from "react";
import Avatar from "@mui/material/Avatar";
import { getUserInfo } from "@/helper/getUserInfo";
import Link from "next/link";
import MobileNav from "./MobileNav";

// eslint-disable-next-line @next/next/no-async-client-component
const Navbar = async () => {
  const userDetails = await getUserInfo();

  return (
    <div className="py-4 z-50 px-6 min-h-[70px] shadow-s fixed w-full top-0 bg-white">
      <div className="flex sm:justify-around justify-between items-center px-6">
        <div>
          <Link href='/'> 
          <h1 className="text-2xl  uppercase">Genesis</h1>
          </Link>
        </div>
 
              

              <div className="sm:block hidden">
                    <ul>
                      <Link href='/Github'> 
                        <li className="inline  mx-3 cursor-pointer text-s uppercase">github</li>
                       </Link>
                        <Link href='/Blogs'> 
                        <li className="inline  mx-3 cursor-pointer text-s uppercase">blogs</li>
                        </Link>
                        
                    </ul>
              </div>


        <div className=" hidden sm:flex items-center">
          <div className="mx-2">
            <h2 className="text-sm">{userDetails?.me?.name}</h2>
          </div>
          <div className="mx-2">
            <Avatar
              alt={userDetails?.me?.name}
              src={userDetails?.me?.profilePicture}
            />
          </div>
        </div>
        <div className="sm:hidden">
           <MobileNav user={userDetails}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
