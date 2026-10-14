import React, { useEffect, useState } from 'react';
import {
  Blog,
  BlogDetailPage,
  CallToAction,
  Classroom,
  Events,
  Footer,
  GalleryPage,
  Header,
  Hero,
  Instructors,
  LocationMap,
  Pricing,
  Programs,
  StatsBanner,
  Welcome,
} from './components/BeRaKidsSections';
import {
  blogPosts,
  events,
  pricingPlans,
  programs,
} from './data';

export default function App() {
  const [selectedBlogSlug, setSelectedBlogSlug] = useState(() => {
    if (typeof window === 'undefined') return null;
    const params = new URLSearchParams(window.location.search);
    return params.get('blog');
  });
  const [showGallery, setShowGallery] = useState(() => {
    if (typeof window === 'undefined') return false;
    return new URLSearchParams(window.location.search).get('gallery') === '1';
  });

  useEffect(() => {
    const syncBlogFromUrl = () => {
      if (typeof window === 'undefined') return;
      const params = new URLSearchParams(window.location.search);
      setSelectedBlogSlug(params.get('blog'));
      setShowGallery(params.get('gallery') === '1');
    };

    window.addEventListener('popstate', syncBlogFromUrl);
    return () => window.removeEventListener('popstate', syncBlogFromUrl);
  }, []);

  useEffect(() => {
    if (selectedBlogSlug) window.scrollTo(0, 0);
  }, [selectedBlogSlug]);

  const activeBlog = blogPosts.find((post) => post.slug === selectedBlogSlug) || null;

  if (showGallery) {
    return (
      <div className="min-h-screen bg-brandBg text-slate-800 font-sans antialiased selection:bg-brandPrimary selection:text-white">
        <GalleryPage />
        <LocationMap />
        <Footer />
      </div>
    );
  }

  if (activeBlog) {
    return (
      <div className="relative min-h-screen bg-brandBg text-slate-800 font-sans antialiased selection:bg-brandPrimary selection:text-white">
        <BlogDetailPage
          post={activeBlog}
          onBack={() => {
            if (typeof window === 'undefined') return;
            const url = new URL(window.location.href);
            url.searchParams.delete('blog');
            window.history.pushState({}, '', url);
            setSelectedBlogSlug(null);
          }}
        />
        <LocationMap />
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-brandBg text-slate-800 font-sans antialiased selection:bg-brandPrimary selection:text-white">
      <Header />
      <main>
        <Hero />
        <StatsBanner />
        <Programs items={programs} />
        <Welcome />
        <Classroom />
        <Events items={events} />
        <Instructors />
        <Pricing plans={pricingPlans} />
        <CallToAction />
        <Blog
          posts={blogPosts}
          onSelectPost={(slug) => {
            if (typeof window === 'undefined') return;
            const url = new URL(window.location.href);
            url.searchParams.set('blog', slug);
            window.history.pushState({}, '', url);
            setSelectedBlogSlug(slug);
          }}
        />
      </main>
      <LocationMap />
      <Footer />
    </div>
  );
}
