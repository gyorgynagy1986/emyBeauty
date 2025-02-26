"use client"

import React from "react";
import Hero from "@/components/layouts/home/hero/Hero";
import Banner from "@/components/banner/Banner";
import Services from "@/components/layouts/home/services/Services";
import About from "@/components/layouts/home/about/About";
import Contact from "@/components/layouts/home/contact/Contact";

export const metadata = {
  title: "Emy Kozmeika",
  description: " Emy Beauty Estetics",
};

const page = () => {
  return (
    <>
      <Hero />
      <Banner />
      <main>
        <Services />
        <About />
      </main>
      <Banner />
      <Contact />
    </>
  );
};

export default page;
