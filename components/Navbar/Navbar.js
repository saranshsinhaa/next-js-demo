const Navbar = () => {
  return (
    <>
    <nav className="bg-violet-100"style={{ width: '1060px', height: '70px' , display: 'flex' }}>
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row">
            <div className="w-full order-3 flex justify-center">
                <div className="flex gap-6 mr-20">
                    <a className="text-violet-500 hover:text-violet-900 text-xl font-bold" href="#">Home</a>
                    <a className="text-violet-500 hover:text-violet-900 text-xl font-bold" href="#">About Us</a>
                    <a className="text-violet-500 hover:text-violet-900 text-xl font-bold" href="#">Services</a>
                </div>
                <input type="text " className="input-text py-2 px-4 rounded-lg border-2 border-violet-300" placeholder="Search cakes..."/>
            </div>
        </div>
    </nav>
    </>
  );
};

export default Navbar;

