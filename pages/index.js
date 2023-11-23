import Image from "next/image";
import { Inter } from "next/font/google";
import Docs from "./docs";
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/Header";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div class="main h-screen bg-red-200 m-0 p-0 flex  ">
      <link rel="stylesheet" href="starbucks.css"></link>
      <Header />
        <div class="text mt-40 ml-16"> 
        <br></br>
        <p class ="mt-2 mb-2 w-11">SUMMER DRINKS</p>
        <h1>Meet our new</h1>
            <h1>Summer Coffee Drinks</h1>
            <p class="mt-2 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis lectus ac nunc gravida pretium. Donec nec massa auctor ipsum euismod rutrum ut nec orci. Sed porttitor massa quis magna luctus molestie.</p>
            <button class="order-now h-10 w-32 bg-green-900 text-white mb-5 mt-2">Order Now</button>
            <div class="icons">
                <img src="https://i.ibb.co/zfKKLY1/facebook.png" class="facebook" height="25px"/>
                <img src="https://i.ibb.co/LrT15Gm/instagram.png" class="instagram ml-2 mr-2" height="25px"/>
                <img src="https://i.ibb.co/0YqQPxq/twitter.png" class="twitter" height="25px"/>
            </div>
        </div>
        <img src="https://i.ibb.co/kM1xQcF/drinks.png" class="drinks hover:scale-75"/>
    </div>
  )
}
