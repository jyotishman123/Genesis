import React from "react";
import Avatar from "@mui/material/Avatar";
import { getUserInfo } from "@/helper/getUserInfo";
import Link from "next/link";

const Navbar = async () => {
  const userDetails = await getUserInfo();

  return (
    <div className="py-4 px-6 shadow-s">
      <div className="flex justify-around items-center px-6">
        <div>
          <h1 className="text-2xl  uppercase">Genesis</h1>
        </div>
        <div>
          <ul>
            <li className="inline  mx-3 cursor-pointer text-s">
              <Link href="/Github">
                Github
              </Link>
            </li>
            <li className="inline  mx-3 cursor-pointer text-s">
              <Link href="/Blogs">
                Blogs
              </Link>
            </li>
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
