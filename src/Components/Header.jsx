'use client'
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Modal from "react-modal"
import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaCamera } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

export default function Header() {
  const {data: session} =useSession();
  const [isOpen, setIsOpen] =useState(false);
  
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
             <div className="flex gap-3 items-center">
              <IoMdAddCircleOutline  className="text-2xl cursor-pointer transform hover:scale-125 transition duration-300 hover:text-red-500"
              onClick={()=> setIsOpen(true)}/>
               <img
               src={session.user.image} 
               alt={session.user.name} 
               className="w-10 h-10 rounded-full cursor-pointer"
               onClick={signOut}
               />
             </div>
           
             ):
               
           (<button onClick={signIn} className="text-sm font-semibold text-blue-500">Log In</button> )
          }
     </div>
     {
      isOpen && (
        <Modal isOpen={isOpen} className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] shadow-md bg-white rounded-md"
        onRequestClose={()=> setIsOpen(false)}
        ariaHideApp={false}
        >
          <div className="flex flex-col justify-center items-center">
             <FaCamera  className="text-5xl text-gray-400 cursor-pointer"/>
             <input
            type='text'
            maxLength='150'
            placeholder='Please enter you caption...'
            className='m-4 border-none text-center w-full focus:ring-0 outline-none'

          />
          <button className="w-full bg-red-600 text-white p-2 shadow-md rounded-lg cursor-pointer hover:brightness-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:brightness-100">Upload</button>
          </div>
          
          <ImCross className="absolute cursor-pointer top-5 right-2 hover:text-red-600 transition duration-300
          "
          onClick={()=> setIsOpen(false)}/>
        </Modal>
      )
     }
    </div>
  )
}
