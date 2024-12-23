import react from "react";
import Image from "next/image";
import  Navigation  from "../app/components/navbar";
import "./public/global.css";
import Homebg from './assets/home/home-bg.jpg'; // Adjust the path as needed
import profile from "./public/myprofil.webp";
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

export default function Home() {

  return (
    <div>

      <Navigation />

      <div className="relative main-body min-h-screen lg:pt-10 pt-10">
        <div className="xl:px-60 px-8 ">
          <div className="flex justify-center h-[90vh] xl:items-center xl:flex-row flex-col-reverse">
            <div className="xl:w-7/12">
              <h1 className="font-doodle h-20 lg:h-auto tracking-widest xl:text-4xl text-3xl text-center xl:text-left">
                Nanda Sholatul Akbar
              </h1>
              <p className="mt-5 mb-4 text-center xl:text-left leading-7">
                Saya seorang fullstack developer dari Bogor. Menikmati membangun semuanya dari situs app kecil hingga app yang elegan. 
              </p>
              
              Lihat <Link href="/blog"><span className="font-semibold underline">Blog Saya</span></Link> dan juga <a href="https://drive.google.com/file/d/1XMJ0NG1BV4uFloTICMgAdaSSpFdP-8-G/view" target="_blank"><span className="font-semibold underline">Unduh CV</span></a> Saya
              
              
            </div>
            <div className="xl:w-5/12 flex xl:justify-end justify-center h-80 ">
              <Image  src={profile} alt="Nanda Sholatul Akbar" width={300} height={300} objectFit="cover" className="rounded-full"  />
            </div>
            
          </div>

         
        </div>
        
      </div>
      <div className="gradientcircle"></div>


    </div>
  );
}

