import Image from "next/image";
import { Inter } from "next/font/google";
import Docs from "./docs";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <>
  <Navbar />
  <div className="min-h-screen bg-white">
      <img
        className=' object-cover bg-white'
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-5xl text-center text-white p-4'>
        <h5>Explore. Experience. Enjoy.</h5>
        <h2 className='py-5'>Your journey begins here</h2>
      </div>
    </div>
    <div className='w-full mx-auto py-16 px-4 text-center text-black bg-white'>
        <p className='py-4 mb-6 text-3xl'>Embark on a journey of a lifetime with us where every trip is an adventure! <br />Start exploring now and turn your travel dreams into reality.</p>
        <div className='grid grid-rows-none md:grid-cols-5 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1509840841025-9088ba78a826?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
            <img className='w-full h-full object-cover' src= "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
    </div>
    <Footer />
  </>
  );
};
