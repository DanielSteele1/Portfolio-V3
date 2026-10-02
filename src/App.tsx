
import Navigation from './Navigation';
import Dashboard from './Dashboard';
import Footer from './Footer';
import BlogPost, { BlogsArray } from './BlogPost';

import NotFound from './NotFound';

import AboutMe from './About';
import Skills from './Skills';
import Projects from './Projects';
import Blog from './Blog';
import Links from './Links';

import React, { useEffect, useState } from 'react';
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';


import { MantineProvider } from "@mantine/core";
import Experience from './Experience';

const pageMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Daniel Steele | Frontend Developer in Devon, UK',
    description: 'Daniel Steele is a frontend developer based in Devon, UK, building web applications with React, TypeScript and modern frontend tools.',
  },
  '/About': {
    title: 'About Daniel Steele | Frontend Developer',
    description: 'Learn about Daniel Steele, a UK frontend developer from Devon focused on React, TypeScript and polished web applications.',
  },
  '/Projects': {
    title: 'Web Development Projects | Daniel Steele',
    description: 'Explore web development projects by Daniel Steele, including applications built with React, TypeScript and modern web technologies.',
  },
  '/Experience': {
    title: 'Development Experience | Daniel Steele',
    description: 'View Daniel Steele’s frontend and full-stack development experience, education and skills.',
  },
  '/Skills': {
    title: 'Frontend Development Skills | Daniel Steele',
    description: 'Explore Daniel Steele’s frontend development skills, including React, TypeScript, CSS and modern web technologies.',
  },
  '/Blog': {
    title: 'Development Blog | Daniel Steele',
    description: 'Read Daniel Steele’s notes on web development, projects and building applications with modern frontend technologies.',
  },
  '/Links': {
    title: 'Web Development Resources | Daniel Steele',
    description: 'A collection of useful development resources and links from Daniel Steele.',
  },
};

function PageMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
    const blogSlug = normalizedPath.startsWith('/Blog/') ? normalizedPath.slice('/Blog/'.length) : '';
    const blogPost = BlogsArray.find(post => post.slug === blogSlug);
    const metadata = pageMetadata[normalizedPath] ?? (blogPost ? {
      title: `${blogPost.title} | Daniel Steele`,
      description: blogPost.description,
    } : {
      title: 'Page not found | Daniel Steele',
      description: 'The page you are looking for could not be found.',
    });
    const canonicalUrl = new URL(normalizedPath, 'https://danielsteele.dev').toString();

    document.title = metadata.title;
    document.querySelector<HTMLMetaElement>('meta[name="robots"]')?.setAttribute('content', blogPost || pageMetadata[normalizedPath] ? 'index, follow, max-image-preview:large' : 'noindex, follow');
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', metadata.description);
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', canonicalUrl);
    document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute('content', metadata.title);
    document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute('content', metadata.description);
    document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.setAttribute('content', canonicalUrl);
    document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')?.setAttribute('content', metadata.title);
    document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]')?.setAttribute('content', metadata.description);
  }, [pathname]);

  return null;
}

declare global {
  interface Window {
    sa_event?: (event: string) => void;
  }
}

function App() {


  const [isThemeOn, setThemeOn] = useState(() => {

    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === 'light' : false;

  });

  const handleThemeButton: React.MouseEventHandler<HTMLButtonElement> = () => {
    setThemeOn(prev => !prev);
  }

  useEffect(() => {

    const theme = isThemeOn ? "light" : "dark";

    if (!document.startViewTransition) {
      document.documentElement.setAttribute(
        "data-theme", theme,
      );
      return;
    }

    document.startViewTransition(() => {
      document.documentElement.setAttribute(
        "data-theme", theme,
      );

      setTimeout(() => {
        document.documentElement.setAttribute("data-theme", theme);
      }, 500);
    });

    localStorage.setItem("theme", theme);
    console.log("Theme Applied", theme);

  }, [isThemeOn, setThemeOn]);

  const handleDownloadAndView = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    event.preventDefault();
    if (typeof window.sa_event === 'function') {
      window.sa_event('cv_downloaded');
    } else {
      console.error("Simple Analytics isn't loaded");
    }
    // download and view document
    const link = document.createElement('a');
    link.href = '/Daniel_Steele_Frontend_Developer_CV.pdf';
    link.download = '/Daniel_Steele_Frontend_Developer_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <MantineProvider>
      <BrowserRouter>
        <PageMetadata />
        <Navigation
          handleThemeButton={handleThemeButton}
          isThemeOn={isThemeOn} 
          />

        <Routes>
          <Route path="/" element={React.createElement(Dashboard as any, { isThemeOn, handleDownloadAndView })} />

          <Route path="*" element={<NotFound />} />

          <Route path="/About" element={<AboutMe />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Blog/:slug" element={<BlogPost />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Experience" element={<Experience handleDownloadAndView={handleDownloadAndView}/> } />
          <Route path="/Links" element={<Links />} />
        </Routes>

        <Footer />
        <Analytics />
      </BrowserRouter>
      </MantineProvider>
  )
}

export default App;
