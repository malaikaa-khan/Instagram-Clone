import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import SectionWrapper from "@/Components/SessionWrapper";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Instagram Clone",
  description: "Create Instagram Clone with Next JS and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
   
         <html lang="en">
      <body className={inter.className}>
     
      
      <SectionWrapper>
       <Header />
        {children}
       
        </SectionWrapper>
        </body>
    </html>
 
  
 
   
  );
}
