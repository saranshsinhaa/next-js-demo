import Image from "next/image";
import { Inter } from "next/font/google";
import Docs from "./docs";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
  <div className="min-h-screen flex flex-col items-center bg-purple-50">
  <div className="w-full h-1 bg-violet-500"></div>
  <div className="flex items-center">
        <img
          src="https://i.postimg.cc/4ypL2RM8/Free-Sample-By-Wix.jpg"
          style={{ width: '200px', height: '70px' }}
        />
        <Navbar />
  </div>
  <div className="w-full h-1 bg-violet-500"></div>
  <div className="flex flex-col items-center">
  <div className="text-4xl font-bold my-8 text-center text-violet-400 mb-8">⭒˚ʚ🍰ɞ｡ Welcome to The Pastry Cafe ˚ʚ🍰ɞ｡⋆‧</div>
  <div class="hover:scale-110">
  <img src="https://c4.wallpaperflare.com/wallpaper/217/609/258/food-cake-cake-cream-wallpaper-preview.jpg"
   style={{ width: '1000px', height: '400px' }} 
   className="rounded-xl"/>
   </div>
   <div className="flex flex-col items-center">
        <div className="text-4xl font-bold my-8 text-center text-violet-400">
          ⋆⭒˚ʚ🍰ɞ｡ About Us ˚ʚ🍰ɞ｡⋆‧
        </div>
        <p className="max-w-2xl text-center text-gray-700 mb-8">
          Welcome to Pastry Cafe! We are passionate about crafting delicious pastries and desserts that bring joy to your taste buds. Our journey began with a simple goal - to create a place where people can indulge in delightful treats in a warm and inviting atmosphere.
        </p>
        <p className="max-w-2xl text-center text-gray-700 mb-8">
          At Purple Cafe, we use only the finest ingredients to ensure every bite is a moment of bliss. From exquisite cakes to mouth-watering cookies, our talented bakers pour their heart into every creation. We believe in the power of a sweet treat to brighten your day and create lasting memories.
        </p>
        <p className="max-w-2xl text-center text-gray-700 mb-8">
          Join us on this culinary adventure, and let our pastries tell a story of flavor and passion. Thank you for being a part of the Purple Cafe family. We look forward to serving you!
        </p>
      </div>
      <div className="text-4xl font-bold my-8 text-center text-violet-400">
          ⋆⭒˚ʚ🍰ɞ｡ Shop Cakes ˚ʚ🍰ɞ｡⋆‧
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <img
          src="https://i.pinimg.com/originals/7e/f0/35/7ef035e51316c5d4780e43e0eb850b82.jpg"
          style={{ width: '380px', height: '380px' }}
          className="rounded-xl hover:scale-90"
          
        />
        <img
          src="https://i.pinimg.com/736x/b1/14/23/b114235456732f663ff0e4eab9002763.jpg"
          style={{ width: '380px', height: '380px' }}
          className="rounded-xl hover:scale-90 mb-4"
        />
        <img
          src="https://i.pinimg.com/1200x/5f/f5/42/5ff54271b20d3dd8362b8fddbbf47161.jpg"
          style={{ width: '420px', height: ' 380px' }}
          className="rounded-xl hover:scale-90"
        />
      </div>
      
      <div className="flex flex-wrap justify-center gap-80 mb-10">
        <button className="bg-violet-500 hover:bg-violet-300 text-white font-bold py-2 px-4 rounded">Rs 450</button>
        <button className="bg-violet-500 hover:bg-violet-300 text-white font-bold py-2 px-4 rounded">Rs 500</button>
        <button className="bg-violet-500 hover:bg-violet-300 text-white font-bold py-2 px-4 rounded"> Rs 600</button>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <img
          src="https://i.pinimg.com/564x/06/e2/5d/06e25d51d09f28e324fde6b757a0e640.jpg"
          style={{ width: '380px', height: '380px' }}
          className="rounded-xl hover:scale-90"
        />

        <img
          src="https://i.pinimg.com/564x/b4/0f/69/b40f69c3692a8a2685a74e2f6f2d0023.jpg"
          style={{ width: '380px', height: '380px' }}
          className="rounded-xl hover:scale-90 mb-4"
        />

        <img
          src="https://i.pinimg.com/564x/4b/b0/5b/4bb05bef969f47db442a7e91bbf5ffce.jpg"
          style={{ width: '420px', height: ' 380px' }}
          className="rounded-xl hover:scale-90"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-80">
        <button className="bg-violet-500 hover:bg-violet-300 text-white font-bold py-2 px-4 rounded">Rs 450</button>
        <button className="bg-violet-500 hover:bg-violet-300 text-white font-bold py-2 px-4 rounded">Rs 500</button>
        <button className="bg-violet-500 hover:bg-violet-300 text-white font-bold py-2 px-4 rounded"> Rs 600</button>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold my-8 text-center text-violet-400">
          ⋆⭒˚ʚ🍰ɞ｡ Our Services ˚ʚ🍰ɞ｡⋆‧
        </div>
        <div className="max-w-2xl text-center text-gray-700 mb-8">
          <p>
            At the Pastry Cafe, we take pride in offering a variety of services to cater to your sweet cravings. Whether you're celebrating a special occasion or simply satisfying your dessert desires, our bakery has something for everyone.
          </p>
          <p>
            Explore our delightful services:
          </p>
          <p className="mt-4">
          ₊✩‧₊˚౨ৎ˚₊✩‧₊
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl text-violet-500 font-bold mb-2">₊˚⊹♡ Custom Cakes ₊˚⊹♡</h2>
            <p className="text-gray-700">
              Celebrate your special moments with our custom-designed cakes. From birthdays to weddings, our cakes are crafted with love and creativity to make your celebration extra sweet.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl text-violet-500 font-bold mb-2">₊˚⊹♡ Assorted Pastries ₊˚⊹♡</h2>
            <p className="text-gray-700">
              Indulge in a selection of delicious pastries that will tantalize your taste buds. From flaky croissants to creamy éclairs, our assortment is sure to satisfy your pastry cravings.
            </p>
          </div>

           <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl text-violet-500 font-bold mb-2">₊˚⊹♡ Catering Services ₊˚⊹♡</h2>
            <p className="text-gray-700">
              Make your events memorable with our catering services. We provide a delectable spread of desserts and pastries to elevate your gatherings and events.
            </p>
          </div>
        </div>
      </div>
   <Footer />
  </div>
  </div>
  );
}
