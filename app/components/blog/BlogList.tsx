// components/blog/BlogItem.tsx
import React from 'react';
import Image from 'next/image';

interface Post {
    id: string;
    judul: string;
    deskripsi: string;
    linkimage: string;
    link?: string; // Optional if you have a link property
}

interface BlogItemProps {
    post: Post;
}

const BlogItem: React.FC<BlogItemProps> = ({ post }) => {
    return (
        <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
            <div className="order-1 sm:ml-6 xl:ml-0">
                <h3 className="mb-1 text-slate-900 font-semibold">
                    <span className="mb-1 block text-sm leading-6 text-indigo-500">Headless UI</span>{post.judul}
                </h3>
                <div className="prose prose-slate prose-sm text-slate-600">
                    <p dangerouslySetInnerHTML={{ __html: post.deskripsi }}></p>
                </div>
                <a
                    className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                    href={post.link || "#"}  // Make sure to use a valid URL or fallback to "#"
                >
                    Learn more
                    <span className="sr-only">, {post.judul}</span>
                    <svg className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                        width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path d="M0 0L3 3L0 6"></path>
                    </svg>
                </a>
            </div>
            <div className="relative w-full h-40"> {/* Fixed height for image container */}
                <Image
                    className="object-cover"
                    src={post.linkimage}
                    layout="fill"
                    objectFit="cover"
                    alt={post.judul}
                />
            </div>
        </li>
    );
};

export default BlogItem;
