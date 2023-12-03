import Image from "next/image";
import { Inter } from "next/font/google";
import Docs from "./docs";
import Header from '../components/header'
import Footer from '../components/footer'
import Section1 from '../components/section1'


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (<>
  <Header></Header>
  <Section1></Section1>
  <Footer></Footer>
  

    </>);
}
