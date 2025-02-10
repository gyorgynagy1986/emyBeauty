import React from "react";
import style from "./Hero.module.css";
import Image from "next/image";

import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { contact } from "@/data/photos";

const Hero = () => {
  return (
    <section className={style.container}>
      <div className={style.mapContainer}>
        <div className={style.leftContanier}>
          <Image
            className={style.img}
            alt={alt.name}
            fill
            size={size.fullsize}
            src={contact.map1}
          />
  </div>
          <div className={style.rightContanier}>
            <Image
              className={style.img}
              alt={alt.name}
              fill
              size={size.fullsize}
              src={contact.map2}
            />
        
        </div>
      </div>
    </section>
  );
};

export default Hero;
