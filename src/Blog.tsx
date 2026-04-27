import React from 'react';
import "./App.css";
import { useState } from 'react';
import { TbCalendarWeekFilled } from 'react-icons/tb';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "motion/react"
import { GoSearch } from 'react-icons/go';
import { Link } from "react-router-dom";

import { BlogsArray } from "./BlogPost";
import Breadcrumbs from './Breadcrumbs';

const Blog_card = (post: any) => {

    return (
        <div className="blog-card">
            <span className="blog-title"> <span id="emoji"> {post.emoji} </span> {post.title} </span>
            <span className="blog-date"> <TbCalendarWeekFilled className="blog-icon" /> {post.date} </span>
            <span className="blog-desc">{post.description}</span>
            <Link
                to={`/blog/${post.slug}`}>
                <button className="blog-button">
                    Read More
                    <HiOutlineArrowNarrowRight />
                </button>
            </Link>
        </div >
    );
}

function Blog() {

    const [searchTerm, setSearchTerm] = useState("");

    const filteredBlogs = BlogsArray.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleBlogSearch = (e: React.ChangeEvent<HTMLInputElement>) => {

        setSearchTerm(e.target.value);
    }

    return (

        <motion.div
            className="Blog"
            id="blog"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="page-nav">

                <div className="breadcrumbs">
                    <Breadcrumbs />
                </div>

            </div>

            <span className="blog-heading"> My Blog 📰</span>
            <span className="blog-sub-heading"> This is my blog,
                where I post updates on my upcoming/launched projects and
                give insights on what i've learned from each one. Additionally,
                I may write posts about the industry as a whole.</span>

            <div className="blog-search-container">
                <div className="blog-search">

                    <button className="blog-search-button">
                        <GoSearch />
                    </button>

                    <input
                        onChange={handleBlogSearch}
                        type="text"
                        placeholder="Search blog posts..."
                        className="blog-search-input"
                    />

                </div>
            </div>

            <div className="blog-card-container">

                {filteredBlogs?.length > 0 ? (

                    filteredBlogs.map(blog => (

                        <Blog_card
                            key={blog.id}
                            id={blog.id}
                            slug={blog.slug}
                            title={blog.title}
                            emoji={blog.emoji}
                            date={blog.date}
                            description={blog.description}
                        />

                    ))
                ) : (

                    < div className="blogs-no-results">
                        No Blogs match your search. Please Try Again.
                    </div>
                )}

            </div>



        </motion.div >

    )
}

export default Blog;