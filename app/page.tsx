"use client"; // This is a client component 👈🏽

import { useRef, useState } from "react";

import Image from "next/image";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";

import Socials from "../components/Socials";
import portfolioData from "../data/portfolio.json";
import { Inter } from "next/font/google";

// Import global styles
import "../styles/globals.css"; // Adjust this path if necessary

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const data = {
    showCursor: true,
    name: 'My Page Title'
  };
  return (
    <div className={`relative ${data.showCursor ? "cursor-none" : ""}`}>
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradientcircle"></div>
      <div className="gradientcirclebottom"></div>

      <div className="container mx-auto mb-10">
        {/* Add your content here */}
      </div>

    </div>
  );
};

export default Home;
