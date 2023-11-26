import Image from "next/image";
import { Inter } from "next/font/google";
import Docs from "./docs";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

const HomePage = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start"
      style={{
        backgroundImage: 'url("https://drinkprime.com/cdn/shop/files/BF_Sale_Drop_Banner_US_-_DESKTOP_2_1600x.jpg?v=1700503365")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        padding: '20px',
      }}
    >
      <div className="text-black text-4xl mb-4">PRIME</div>
      
      <div className="flex flex-wrap justify-center">
        <div className="text-lg mb-2">SHOP</div>
        <div className="w-20 h-1 bg-white mb-4"></div>

        <div className="text-lg mb-2">ABOUT PRIME</div>
        <div className="w-20 h-1 bg-white mb-4"></div>

        <div className="text-lg mb-2">WHERE TO BUY</div>
        <div className="w-20 h-1 bg-white mb-4"></div>

        <div className="text-lg mb-2">VERIFY YOUR PRIME</div>
        <div className="w-20 h-1 bg-white"></div>
      </div>
    </div>
  );
};

export default HomePage;
