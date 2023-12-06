const Navbar = () => {
  return (
    <div className="w-full h-20 text-black text-black bg-white">
      <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
        <h1 className="text-2xl uppercase font-bold">Travel</h1>
        <ul className="hidden lg:inline-flex items-center gap-8 uppercase text-sm font-semibold">
          <li className="navbarLi">Home</li>
          <li className="navbarLi">About</li>
          <li className="navbarLi">Services</li>
          <li className="navbarLi">Contact</li>
        </ul>
        <div className="hidden lg:inline-flex gap-8 items-center">
          <button className="w-48 h-14 text-white bg-black uppercase text-sm font-semibold rounded-md hover:bg-darkRed hover:text-white duration-300">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
