import React from 'react';
import Image from 'next/image';
import Navigation from '../app/components/navbar';
import '../app/public/global.css';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import BlogList from '../app/components/blog/BlogList';
import axios from 'axios';
import Head from 'next/head';
interface Post {
    id: string;
    judul: string;
    linkimage: string;
}

interface BlogProps {
    posts: Post[];
}


const Blog: React.FC<BlogProps> = ({ posts }) => {
    return (
        <div>
            <Head>
                <title>Blog - Nanda Sholatul Akbar</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Read our latest blog posts" />
                <meta name="keywords" content="blog, articles, posts" />
            </Head>
            <Navigation />

            <div className="relative main-body min-h-screen lg:pt-10 pt-10">
                <div className="xl:px-60 px-8 ">
                    <div className="flex justify-center h-[20vh] xl:items-center xl:flex-row flex-col-reverse">
                        <div className="xl:w-7/12">
                            <h1 className="font-doodle h-20 lg:h-auto tracking-widest xl:text-4xl text-3xl text-center xl:text-left underline">
                                Blog.
                            </h1>
                        </div>
                        <div className="xl:w-5/12 flex xl:justify-end justify-center h-80 ">
                        </div>
                    </div>
                </div>
                <BlogList posts={posts} />
            </div>

            <div className="gradientcircle"></div>
        </div>
    );
};

export async function getServerSideProps() {
    try {
        const response = await axios.get('https://blogapi-bice-gamma.vercel.app/api/blogs');
        const posts: Post[] = response.data.result; // Adjust based on your actual API response structure

        return {
            props: {
                posts,
            },
        };
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return {
            props: {
                posts: [], // Provide empty posts in case of an error
            },
        };
    }
}

export default Blog;