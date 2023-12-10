import Image from "next/image";
import Link from 'next/link';
import profile from '../public/profile.jpg';
import reacttodo from '../public/reacttodo.jpg';
import firebot from '../public/firebot.jpg';
import ball from '../public/ball.jpg';



export default function Home() {
  return (
    <main>
      <div>
        <p className='text-center text-yellow-400 font-bold pt-20 text-6xl'>HELLO! I AM GAURI</p>
      </div>
      <div className='h-screen flex items-center justify-center pt-0'>
      <Image src= {profile} alt="profile" width={400} height={70}>
      </Image>
      </div>
      
      <div>
        <p className='text-center font-bold text-4xl'>About Me</p>
        <p className='text-center text-2xl font-normal py-7 px-40'>I am Gauri a dynamic computer science student with an insatiable curiosity for the intricacies of the digital realm. Currently pursuing a Bachelor's degree in Computer Science at SRM University Chennai. I have profound interest in cutting-edge technologies like web development and also towards competitve programming.
                    Beyond the classroom , I am actively engaged in student-led clubs and community in technical domain. This passion extends to various personal projects and committed to gaining practical experience through internships and collaborative ventures
</p>
      </div>
    <div className='mx-20 my-10 rounded-xl border-2 px-40 py-10 bg-gray-900'>
      <h2 className='text-center font-bold text-4xl'>Educational Details</h2>
      <ol className='text-center py-7'>
                        <li><strong>Bachelor of Technology</strong> - S.R.M University (2022-2026)</li>
                        <li><strong>School </strong> - St. Joseph's Convent Girls Sen. Sec School, Jabalpur (2022)</li>
                       
                    </ol>
                    <p className='text-center text-2xl'>My schooling has been a journey marked by academic excellence, a strong foundation in computer science, and active engagement in practical applications. I scored 92% in my 10th Std. and 91% in my 12th Std. In my first year of college I obtained a C.G.P.A of 9.91</p>
    </div>
    <div>
    <h2 className='text-center font-bold text-4xl py-10'>Skills</h2>
    <h2 className='text-center font-bold text-yellow-400 text-3xl py-4'>Front-End</h2>
    <p className='text-center font-normal text-1xl '>HTML , CSS , JAVASCRIPT , REACT (FRAMEWORK)</p>
    <h2 className='text-center font-bold text-yellow-400 text-2xl py-4'>Languages & Libraries</h2>
    <p className='text-center font-normal text-1xl '>C , C++ , SQL , JAVA , PYTHON (NUMPY , PANDAS , MATPLOTLIB)</p>
    <h2 className='text-center font-bold text-yellow-400 text-2xl py-4'>Communication</h2>
    <p className='text-center font-normal text-1xl '>HINDI , ENGLISH , GERMAN</p>
    </div>

    <div className='mx-20 my-10 rounded-xl border-2 bg-gray-900'>
      <h2 className='py-20 text-center font-bold text-4xl'>Projects</h2>
    
    <div>
      <p className='text-center text-yellow-400 font-bold text-2xl'>1. To-Do List using React</p>    
    </div>
    <div className='py-5 flex items-center justify-center '>
      <Image src= {reacttodo} alt="proj1" width={300} height={300}>
      </Image>
      </div>

      <div>
      <p className='py-5 text-center text-yellow-400 font-bold text-2xl'>2. Fire Fighting Bot</p>    
    </div>
    <div className=' py-5 flex items-center justify-center '>
      <Image src= {firebot} alt="proj2" width={300} height={300}>
      </Image>
      </div>

      <div>
      <p className='py-5 text-center text-yellow-400 font-bold text-2xl'>3. Ball Breakout Game- JAVA </p>    
    </div>
    <div className='py-5 flex items-center justify-center '>
      <Image src= {ball} alt="proj3" width={300} height={300}>
      </Image>
      </div>
      </div>

      <div>
      <h2 className='py-20 text-center font-bold text-4xl'>Connect</h2>
      <h2 className='text-center font-bold text-1xl'>CLICK BELOW TO REACH OUT !</h2>
      <ul className='text-center text-yellow-300 py-5' >
      <Link href='https://www.linkedin.com/in/gauri-chapra-55377b24b'><li>LinkedIn - https://www.linkedin.com/in/gauri-chapra-55377b24b</li></Link>
      <Link href='https://github.com/GauriChapra'><li>Github - https://github.com/GauriChapra </li></Link>
      <Link href='https://www.instagram.com/iamgaurichapra/'><li> Instagram - https://www.instagram.com/iamgaurichapra/ </li></Link>
      <li>Gmail - gaurichapra12@gmail.com</li>
      </ul>
      

      </div>

    </main>
    
  )
}
