<<<<<<< HEAD
 
import HeroSection from "@/components/HeroSection"
import BlogSection from "@/components/BlogSection"
export default  function Home() {
=======
import HeroSection from "@/components/HeroSection"
import { getPost } from '@/helper/getPost';
import { getUserInfo } from "@/helper/getUserInfo";
import Image from "next/image";
import Link from "next/link";
>>>>>>> fa43ad289e5580b995c934bd3cdeda1764791ad4

export default async function Home() {
   const userDetails = await getUserInfo();
   const data = await getPost();
   if (!data) {
      return;
   }
   const { username, profilePicture, name } = data.user;
   return (
      <>
<<<<<<< HEAD
         <HeroSection/>
         <BlogSection/>
      </>  
        
=======
         <div className="flex flex-col-2">
            <div className="p-5 text-2xl max-w-prose">
               Hi this is {userDetails?.me?.name}. <br></br>
               I am a {userDetails?.me?.bio?.markdown}
            </div>
            <div className="">
               <Image
                  src={userDetails?.me?.profilePicture}
                  alt="user"
                  width={200}
                  height={200}
                  className="rounded-xl shadow-2xl"
               />
            </div>

         </div>
         <div className="flex gap-4">
            <Link href="{userDetails?.me?.socialMediaLinks?.github}" target="_blank">
               Github
            </Link>
            <Link href="{userDetails?.me?.socialMediaLinks?.twitter}" target="_blank">
               Twitter
            </Link>
            <Link href="{userDetails?.me?.socialMediaLinks?.website}" target="_blank">
               Website
            </Link>

         </div>

      </>

>>>>>>> fa43ad289e5580b995c934bd3cdeda1764791ad4
   )
}