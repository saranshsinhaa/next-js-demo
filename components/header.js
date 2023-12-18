export default function header() {
  return (
    <>
    <div className="h-0.5 bg-red-500"></div>
    <header className="bg-zinc-100">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center p-3">
            <div className="mx-10">
                <input type="text " className="input-text" placeholder="Search.."/>
            </div>
            <div className="shrink w-80 order-2">
            <div class="font-bold uppercase text-3xl text-black">RED<span class="font-bold uppercase text-3xl text-red-500">NOSE</span>CODER</div>

               
            </div>
            <div className="w-96 order-3 flex justify-center">
                <div className="flex gap-6">
                    <a className="hover:text-red-800" href="https://www.timeanddate.com/countdown/christmas">CountDown!</a>
                    <a className="hover:text-red-800" href="https://www.northpole.com/">Santa</a>
                    <a className="hover:text-red-800" href="https://www.christmasmusic.com/">Music</a>
                </div>

            </div>
        </div>

    </header>
    <div className="h-0.5 bg-red-500"></div>
</>
  )
}
