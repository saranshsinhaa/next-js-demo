import Image from "next/image"

export default function Section1() {
  return (
    <section className="py-10">
        <div className="container mx-auto px-20 ">
            <h1 className="font-bold text-4xl pd-5 mb-12 text-center italic">Trending</h1>
        
        {Slide()}
        
        </div>
    </section>
  )
}

function Slide(){
    return(
    <>
        <div className="grid md:grid-cols-2">
            <div className="image my-10 mr-10">
                <Image src={"/images/new.jpeg"} width={500}height={500} className="rounded-lg"/>
            </div>
            <div className="info my-10 ml-10">
                <div className="cat">
                    <div className="title">
                        <p className="text-orange-600 italic">Dec 1,2023</p>
                        <p className="text-neutral-300 mb-5 italic">Illuminate the festive season with something extraordinary</p>
                        <a className="text-6xl">Tech the Halls: A Christmas Coding Spectacle</a>
                        
                        <p className="mt-10">"Step into the festive coding spirit! Embrace the magic of upskilling with open source contributions and Advent of Code challenges. 
                            Let's make this season shine with the joy of learning and coding celebrations!"</p>
                       

                    </div>

                </div>

            </div>

        </div>
        <div className="grid md:grid-cols-3 mt-20 xl:container xl:mx-auto flex flex-col items-center justify-between text-center">
            <div>
                <Image 
                className="border border-red-700 p-2 m-4 rounded-lg transition-transform transform hover:translate-x-2 hover:translate-y-2 rounded-lg"
                src={"/images/adventofcoder.png"} width={320}height={320}/>
                
            </div>
            <div>
            <Image
             className="border border-red-700 p-2 m-4 rounded-lg transition-transform transform hover:translate-x-2 hover:translate-y-2 rounded-lg"
             src={"/images/swoc.png"} width={330}height={330}/>
                
            </div>
            <div>
            <Image
            className="border border-red-700 p-2 m-4 rounded-lg transition-transform transform hover:translate-x-2 hover:translate-y-2 rounded-lg"
             src={"/images/github.png"} width={420}height={420} />
                
            </div>
        </div>
        <br /><br /><br /><br /><br />
      

        <div className="grid grid-cols-2 gap-4 mt-20 xl:container xl:mx-auto">
            
            <div className="flex justify-between items-center p-4 ">
                
                <p className="text-slate-800"><a href="https://adventofcode.com/"className="text-2xl text-red-700 text-left underline underline-offset-2 mr-30 italic hover:text-yellow-500">ADVENT OF CODE: Code The Countdown Leading Up to Christmas</a>
                <br /><br/>
                    Advent of Code is an annual set of Christmas-themed computer programming challenges that follow an Advent calendar. 
                    It has been running since 2015. The programming puzzles cover a variety of skill sets and skill levels and can be 
                    solved using any programming language.</p></div>
            
            
            <div>
            
            <Image src={"/images/adventofcoder.png"} width={320}height={320} className="flex justify-between items-center ml-20 bg-lime-50 rounded-xl"/>
            </div>
            

        </div><br /><br /><br /><br /><br />
        <div className="grid grid-cols-2 gap-4 mt-20 xl:container xl:mx-auto">
            
            <div >
            <Image src={"/images/swoc.png"} width={320}height={320} className="flex justify-between items-center ml-20 bg-lime-50 rounded-xl"/>
            </div>
                    
            
            <div className="flex justify-between items-center p-4 ">

            <p className="text-slate-800"><a href="https://www.socialwinterofcode.com/"className="text-2xl text-red-700 text-left underline underline-offset-2 mr-30 italic hover:text-yellow-500">SWOC: Social Winter Of Code</a>
                <br /><br/>
                Social Winter of Code is an open-source program envisioned by the Social. It aims to bring students into the world of open source development and see the power of
                 unified problem-solving in real time. 
                The projects that we will host have been carefully hand-picked to invigorate creative thinking and encourage collaboration among all participants.</p>
            
            </div>
            

        </div><br /><br /><br /><br /><br />
        <div className="grid grid-cols-2 gap-4 mt-20 xl:container xl:mx-auto">
            
            <div className="flex justify-between items-center p-4 ">
                
                <p className="text-slate-800"><a href="https://www.githubwrapped.io/"className="text-2xl text-red-700 text-left underline underline-offset-2 mr-30 italic hover:text-yellow-500">GitHubWrapped: Reflect on your year of coding with GitHub Wrapped</a>
                <br /><br/>
                Dive into analytics of your year as a developer. Total commits, top repositories, and favourite languages</p></div>
            
            
            <div>
            
            <Image src={"/images/github.png"} width={320}height={320} className="flex justify-between items-center ml-20 bg-lime-50 rounded-xl"/>
            </div>
            

        </div>
        
        </>  
    )
}
