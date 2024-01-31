import HeroSection from "@/components/HeroSection"
import { getPost } from '@/helper/getPost';
import { getUserInfo } from "@/helper/getUserInfo";
import Image from "next/image";
export default async function Home() {
   const userDetails = await getUserInfo();
   const data = await getPost();
   if (!data) {
      return;
   }
   const { username, profilePicture, name } = data.user;
   return(
      <>  
      <div className="flex flex-col-2">
            <div className="p-5 text-2xl max-w-prose">Hi this is {userDetails?.me?.name}. I am a {userDetails?.me?.bio?.markdown}</div>
            <div className="">
               <Image src={userDetails?.me?.profilePicture} alt="user" width={200} height={200} className="rounded-xl shadow-2xl" />
            </div>
            
      </div>
         
      </>  
        
   )
}