"use client"; // This is a client component 👈🏽

import { useRef,useState } from "react";

import Image from "next/image";
import { useIsomorphicLayoutEffect } from "../utils";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import data from "../data/portfolio.json";


const Home = () => {
  const data = {
    showCursor: true,
    name: 'My Page Title'
  };
  return (
    <div className={`relative ${data.showCursor ? "cursor-none" : ""}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>
      
      <div className="container mx-auto mb-10"></div>

    </div>
  );
};
export default Home;