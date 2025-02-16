import React from "react";
import style from "./Hero.module.css";
import { locations } from "@/data/contact";
import LocationCard from '@/components/layouts/kapcsolat/hero/LocationCard'

const Hero = () => {
  return (
    <section className={style.container}>
      <div className={style.mapContainer}>
        {locations.map((location, index) => (
          <LocationCard key={index} {...location} />
        ))}
      </div>
    </section>
  );
};

export default Hero;