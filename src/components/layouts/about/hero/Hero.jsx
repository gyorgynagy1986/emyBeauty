"use client"

import React, { useEffect, useState } from "react";
import style from "./Hero.module.css";
import Image from "next/image";
import Ob from "@/components/astract/ObjectElement";
import Button from "@/components/button/Button";
import "aos/dist/aos.css";
import AOS from "aos";

import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { aboutPage } from "@/data/photos";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Képernyőméret ellenőrzése
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    // Kezdeti ellenőrzés
    checkIfMobile();
    
    // AOS inicializálása
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-out-cubic'
    });

    // Eseményfigyelő a képernyőméret változásához
    window.addEventListener('resize', () => {
      checkIfMobile();
      // AOS frissítése méretváltozáskor
      setTimeout(() => AOS.refresh(), 100);
    });
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <section className={style.container}>
      <div className={style.helper}>
        <div className={style.leftContanier}>
          <div 
            className={style.titleContainer}
            data-aos={isMobile ? "fade-up" : "fade-right"}
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <p>A hivatásom személyes mottója:</p>
            <h1 className={style.title}>
              „A szépség nem más, mint a bennünk megteremtődött harmónia
              tükröződése."
            </h1>
          </div>
          
          <div
            data-aos={isMobile ? "fade-up" : "zoom-in"}
            data-aos-delay={isMobile ? "200" : "300"} 
            data-aos-duration="800"
          >
            <Ob />
          </div>

          <div 
            className={style.textContainer}
            data-aos={isMobile ? "fade-up" : "fade-right"}
            data-aos-delay={isMobile ? "300" : "400"}
            data-aos-duration="1000"
          >
            <p>Sok szeretettel köszöntelek,</p>
            <p className={style.name}>Hajduné Fekete Emilia</p>
            <p>
              mesterkozmetikus bőresztéta, esztétikai sminktetováló vagyok,{" "}
              <br />
              az Emy Beauty Estetics tulajdonosa és megálmodója.
            </p>
            <p>
              Ez a „BÉKE SZIGETE" ahol nyugalom vár rád, <br />
              és nem csak a bőröd, hanem lelked is kisimul, megszépül.
            </p>
            <p>
              Érkezz meg a gondolatok közötti csendbe, <br />
              és élvezd ki a magadra szánt értékes perceket!
            </p>
          </div>

          <div
            data-aos={isMobile ? "fade-up" : "fade-up"}
            data-aos-delay={isMobile ? "400" : "600"}
            data-aos-duration="800"
          >
            <Button />
          </div>
        </div>

        <div 
          className={style.rightContanier}
          data-aos="fade"
          data-aos-delay={isMobile ? "100" : "200"}
          data-aos-duration="1200"
        >
          <Image alt={alt.name} size={size.fullsize} src={aboutPage.hero} />
        </div>
      </div>
    </section>
  );
};

export default Hero;