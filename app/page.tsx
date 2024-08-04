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

// Import styles (assumed to be in a CSS module or a global stylesheet)
import styles from "../styles/globals.css";

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

      <div className={styles.gradientcircle}></div>
      <div className={styles.gradientcirclebottom}></div>

      <div className="container mx-auto mb-10">
        {/* Add your content here */}
      </div>

    </div>
  );
};

export default Home;
