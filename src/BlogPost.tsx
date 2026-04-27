import "./App.css";

import { motion } from "motion/react"
import { useParams } from "react-router-dom";

import './Blog-post.css';

import NewSite from './Blog_Posts/New_Site.json';
import Orbit from './Blog_Posts/Orbit.json';
import PKCE from './Blog_Posts/Spotify_PKCE.json';
import { TbCalendarWeekFilled } from "react-icons/tb";
import { FaPencil } from "react-icons/fa6";
import Breadcrumbs from "./Breadcrumbs";

import Markdown, { Components } from 'react-markdown';
import { useEffect, useState } from "react";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export const BlogsArray = [PKCE, Orbit, NewSite];

function BlogPost() {

    const [markdownContent, setMarkdownContent] = useState("");
    const { slug } = useParams();

    //get the slug from the json file
    const post = BlogsArray.find(
        p => p.slug === slug
    );

    useEffect(() => {

        if (post) {

            fetch(`/Markdown_Posts/${slug}.md`)
                .then(res => res.text())
                .then(text => setMarkdownContent(text))
        };

    }, [slug, post]);

    if (!post) {
        return (
            <div className="Blog">
                <div className="page-nav">
                    <div className="breadcrumbs">
                        <Breadcrumbs />
                    </div>
                </div>
                <span> Post not found </span>
            </div>
        )
    };


    const CodeBlock: Components['code'] = ({
        node, inline, className, children, ...props }: any) => {
        const match = /language-(\w+)/.exec(className || '');

        if (!inline && match) {
            return (
                <div className="codeBlock-container">

                    <SyntaxHighlighter
                        className="codeBlock"
                        language={match[1]}
                        PreTag="div"
                    >
                        {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                </div>
            );
        }

        return (
            <code className={className} {...props}>
                {children}
            </code>
        );
    };

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

            <div className="blog-post">
                <div className="blog-post-top">
                    <h1 className="blog-post-heading">
                        {post.title}
                    </h1>
                    <h2 className="blog-post-sub-heading">
                        {post.description}
                    </h2>
                    <div className="blog-post-info">
                        <span className="blog-post-date">
                            <TbCalendarWeekFilled style={{ margin: '5px', fontSize: '20px' }} />
                            {post.date}
                        </span>
                        <span className="blog-post-date">
                            <FaPencil style={{ margin: '5px' }} />
                            By Daniel Steele
                        </span>
                    </div>

                    <div className="blog-post-content">
                        <Markdown
                            components={{ code: CodeBlock }}>
                            {markdownContent}
                        </Markdown>
                    </div>

                </div>

            </div>
        </motion.div>

    )
}

export default BlogPost;