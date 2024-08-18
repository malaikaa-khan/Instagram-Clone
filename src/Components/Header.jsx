'use client'
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
  const {data: session} =useSession();
  console.log(session);
  
  return (
    
    <div className="sticky bg-white shadow-sm  border-b z-30 p-3">
     <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/*Logo*/}
         <Link href={'/'} className="hidden lg:inline-flex">
         <Image
            src='/Instagram_logo_black.webp'
            width={96}
            height={96}
            alt="logo"
             />
            
         </Link>
         <Link href={'/'} className="lg:hidden">
         <Image
            src='/800px-Instagram_logo_2016.webp'
            width={40}
            height={40}
            alt="logo"
             />
            
         </Link>
        

        {/*Input tag*/}
        <input type="text" placeholder="Search" className="bg-gray-50 border w-full py-2 px-4 max-w-[210px] text-sm rounded border-gray-200"/>
        {/*Menu*/}
          {session ? (
             
              <img
               src={session.user.image} 
               alt={session.user.name} 
               className="w-10 h-10 rounded-full cursor-pointer"
               onClick={signOut}
               />
             ):
               
           (<button onClick={signIn} className="text-sm font-semibold text-blue-500">Log In</button> )
          }
     </div>
    </div>
  )
}
