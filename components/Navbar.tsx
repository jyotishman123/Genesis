import React from "react";
import Avatar from "@mui/material/Avatar";
import { getUserInfo } from "@/helper/getUserInfo";
import Link from "next/link";

// eslint-disable-next-line @next/next/no-async-client-component
const Navbar = async () => {
  const userDetails = await getUserInfo();

  return (
    <div className="py-4 px-6 shadow-s">
      <div className="flex justify-around items-center px-6">
        <div>
          <h1 className="text-2xl  uppercase">Hashnode</h1>
        </div>
 
              

              <div>
                    <ul>
                      <Link href='/Github'> 
                        <li className="inline  mx-3 cursor-pointer text-s">github</li>
                       </Link>
                        <Link href='/Blogs'> 
                        <li className="inline  mx-3 cursor-pointer text-s">blogs</li>
                        </Link>
                    </ul>
              </div>


        <div className="  flex items-center">
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
      </div>
    </div>
  );
};

export default Navbar;
