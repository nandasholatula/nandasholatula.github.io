// pages/blog/index.js
import React from 'react';
import BlogList from '../../components/blog/BlogList';
import Link from 'next/link';

const blogPosts = [
    { id: 1, title: 'First Post', excerpt: 'This is the first post.', content: 'Content of the first post.' },
    { id: 2, title: 'Second Post', excerpt: 'This is the second post.', content: 'Content of the second post.' },
];

const BlogPage = () => {
    return (
        <div>
            <h1>Blog</h1>
            <BlogList posts={blogPosts} />
        </div>
    );
};

export default BlogPage;
