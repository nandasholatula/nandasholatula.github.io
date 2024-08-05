import react from "react";

import Image from "next/image";
import  Navigation  from "../app/components/navbar";
import  PageOne  from "../app/components/page-one";
import "./public/global.css";
import Homebg from './assets/home/home-bg.jpg'; // Adjust the path as needed


export default function Home() {


  return (
    <div >

      <Navigation />
      <div className="gradientcircle"></div>

    </div>
  );
}
