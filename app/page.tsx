"use client";

import { useEffect, useState } from "react";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import SearchBar from "@/components/sections/SearchBar";
import FeaturedProperties from "@/components/sections/FeaturedProperties";
import AboutUs from "@/components/sections/AboutUs";
import Services from "@/components/sections/Services";
import TeamMembers from "@/components/sections/TeamMembers";
import Testimonials from "@/components/sections/Testimonials";
import Partners from "@/components/sections/Partners";
import Subscription from "@/components/sections/Subscription";
import Footer from "@/components/sections/Footer";
import BackToTop from "@/components/design/BackToTop";
import CustomCursor from "@/components/design/CustomCursor";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <CustomCursor />
      <div className="relative overflow-x-hidden">
        <Header />
        <main>
          <div id="hero">
            <Hero />
          </div>
          <div className="container-custom -mt-10 relative z-20">
            <SearchBar />
          </div>
          <div id="properties">
            <FeaturedProperties />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="about">
            <AboutUs />
          </div>
          <div id="team">
            <TeamMembers />
          </div>
          <Testimonials />
          <Partners />
          <div id="contact">
            <Subscription />
          </div>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}