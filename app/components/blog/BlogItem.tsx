// components/blog/BlogItem.js
import React from 'react';
import Link from 'next/link';

const BlogItem = ({ post }) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link href={`/blog/${post.id}`}>
                <a>Read more</a>
            </Link>
        </div>
    );
};

export default BlogItem;
