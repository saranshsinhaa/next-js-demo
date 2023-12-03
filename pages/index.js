import Image from "next/image";
import { Inter } from "next/font/google";
import Docs from "./docs";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

const HomePage = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start relative"
      style={{
        backgroundImage: 'url("https://drinkprime.com/cdn/shop/files/BF_Sale_Drop_Banner_US_-_DESKTOP_2_1600x.jpg?v=1700503365")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        padding: '20px',
      }}
    >
      <a className="text-black text-5xl mb-4 font-serif font-bold hover:underline">PRIME</a>
      
      <div className="flex flex-wrap justify-center">
        <a href="https://drinkprime.com/shop" className="text-sm font-medium font-serif mb-2 mr-10 hover:underline">SHOP</a>

        <a href="https://drinkprime.com/pages/about-prime" className="text-sm font-medium font-serif mb-2 mr-10 hover:underline">ABOUT PRIME</a>

        <a href="https://drinkprime.com/pages/where-to-buy" className="text-sm font-medium font-serif mb-2 mr-10 hover:underline">WHERE TO BUY</a>

        <a href="https://drinkprime.com/pages/verify-your-prime-usa" className="text-sm font-medium font-serif mb-2 hover:underline">VERIFY YOUR PRIME</a>
      </div>

      {/* Powerup section yuh yuh....*/}
      <div className="absolute bottom-0 left-0 mb-8 ml-8">
        <div className="text-center mb-4">
          <h3 className="text-2xl font-bold mb-2 font-thin text-left">POWER UP</h3>
          <p className="text-4xl text-white mb-5 font-bold text-left">LIMITLESS HYDRATION</p>
        </div>

        {/* Shp Nw Btn yuh yuh.... */}
        <a href="https://drinkprime.com/collections/hydration" className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200">
          Shop Now
        </a>
      </div>

      {/* Cmng Snn Sxn yuh yuh..... */}
      <div className="bg-white p-10 rounded-md text-center mt-20">
        <h2 className="text-2xl font-bold mb-4">Coming Soon!</h2>
        <p className="text-gray-600 text-2xl font-semibold mb-4">Pre-Order NOW!</p>
        
        {/* Eml Fm yuh yuh */}
        <form className="flex flex-col items-center mb-4">
          <input
            type="email"
            placeholder="Your Email Address"
            className="border p-2 text-black rounded-md mb-2"
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
