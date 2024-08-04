"use client"; // This is a client component 👈🏽

import { useRef,useState } from "react";

import Image from "next/image";
import { useIsomorphicLayoutEffect } from "../utils";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";

import Socials from "../components/Socials";
import data from "../data/portfolio.json";
import { Inter } from "next/font/google";



const Home = ({ subsets: ["latin"] }) => {
  const data = {
    showCursor: true,
    name: 'My Page Title'
  };
  return (
    <div className={`relative ${data.showCursor ? "cursor-none" : ""}`}>
      {data.showCursor }
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className={style.gradientcircle}></div>
      <div className={style.gradientcirclebottom}></div>
      
      <div className="container mx-auto mb-10"></div>

    </div>
  );
};
export default Home;