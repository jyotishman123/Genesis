import HeroSection from "@/components/HeroSection"
import { getPost } from '@/helper/getPost';
import { getUserInfo } from "@/helper/getUserInfo";

export default async function Home() {
   const userDetails = await getUserInfo();
   const data = await getPost();
   if (!data) {
      return;
   }
   const { username, profilePicture, name } = data.user;
   return(
      <>  
         <div className="p-5 text-2xl">Hi this is {userDetails?.me?.name}. I am a {userDetails?.me?.bio?.markdown}</div>
      </>  
        
   )
}