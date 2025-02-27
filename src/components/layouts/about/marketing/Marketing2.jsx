"use client"

import React, { useEffect, useState } from "react";
import style from "./Marketing2.module.css";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";

import Ob from "@/components/astract/ObjectElement";
import Button from "@/components/button/Button5";
import Button2 from "@/components/button/Button6";

import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { aboutPage } from "@/data/photos";

const Marketing2 = () => {
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
      duration: 1000,
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
        <div 
          className={style.contentContainer}
          // Asztali nézeten: egész konténer balról jön
          // Mobilon: a konténer felülről jön le
          data-aos={isMobile ? "fade-down" : "fade-right"}
          data-aos-duration="1200"
          data-aos-offset="200"
        >
          <div 
            className={style.leftContainrt}
            // Mobilon a kép felülről jön
            data-aos={isMobile ? "fade-down" : "fade"}
            data-aos-delay={isMobile ? "200" : "0"}
            data-aos-duration="800"
          >
            <Image
              alt={alt.name}
              sizes={size.fullsize}
              src={aboutPage.photo5}
            />
          </div>

          <div className={style.rightContainrt}>
            <h3 
              data-aos="fade-up"
              data-aos-delay={isMobile ? "300" : "200"}
              data-aos-duration="800"
            >
              Innováció
            </h3>
            <p 
              data-aos="fade-up"
              data-aos-delay={isMobile ? "400" : "300"}
              data-aos-duration="800"
            >
              Kezeléseim során az egészség, a szépség, a nyugalom és a harmónia
              luxusát kínálom Vendégeimnek. A kezeléseket prémium minőségű
              orvos-esztétikai termékek és high-tech gépek felhasználásával
              végzem.
            </p>
            <p 
              data-aos="fade-up"
              data-aos-delay={isMobile ? "500" : "400"}
              data-aos-duration="800"
            >
              Vendégeim számára személyre szabott terveket állítok össze
              konzultáció keretein belül, bőrspecifikusan. Ezek a tervek
              orvosesztétikai és kozmetikai kezeléseket, kúrákat, valamint ezek
              kombinációit tartalmazzák. A hatékony és tartós eredményeink
              kulcsa ez az alapos, személyre szabott megközelítés.
            </p>
            <p 
              data-aos="fade-up"
              data-aos-delay={isMobile ? "600" : "500"}
              data-aos-duration="800"
            >
              A Secret™ RF mikrotűs frakcionális rádiófrekvenciás kezelés a
              kedvencem. Ez az egyik legmodernebb, műtét nélküli bőrfiatalító
              eljárás, amely fokozza a bőr természetes kollagéntermelését.
            </p>
            <div 
              data-aos="fade-up"
              data-aos-delay={isMobile ? "700" : "600"}
              data-aos-duration="600"
            >
              <Ob />
            </div>
            <div 
              data-aos="fade-up"
              data-aos-delay={isMobile ? "800" : "700"}
              data-aos-duration="600"
            >
              <Button />
            </div>
          </div>
        </div>

        <div 
          className={style.contentContainer}
          // Asztali nézeten: egész konténer jobbról jön
          // Mobilon: a konténer felülről jön le (de később)
          data-aos={isMobile ? "fade-down" : "fade-left"}
          data-aos-duration="1200"
          data-aos-offset="200"
          data-aos-delay={isMobile ? "300" : "0"}
        >
          <div 
            className={style.leftContainrt}
            // Mobilon a kép felülről lefelé csúszik
            data-aos={isMobile ? "fade-down" : "fade"}
            data-aos-delay={isMobile ? "500" : "0"}
            data-aos-duration="800"
          >
            <Image
              alt={alt.name}
              sizes={size.fullsize}
              src={aboutPage.photo6}
            />
          </div>

          <div className={style.rightContainrt}>
            <h3 
              data-aos="fade-up"
              data-aos-delay={isMobile ? "600" : "200"}
              data-aos-duration="800"
            >
              Minőség és nyugalom
            </h3>
            <p 
              data-aos="fade-up"
              data-aos-delay={isMobile ? "700" : "300"}
              data-aos-duration="800"
            >
              Szalonomat a minőség, a nyugalom és a spirituális lelki egyensúly
              jegyében hoztam létre.
            </p>
            <p 
              data-aos="fade-up"
              data-aos-delay={isMobile ? "800" : "400"}
              data-aos-duration="800"
            >
              Köszönök minden Veletek töltött, inspiráló pillanatot, a bizalmat,
              és várom a közelgő találkozásainkat!
            </p>

            <div 
              data-aos="fade-up"
              data-aos-delay={isMobile ? "900" : "500"}
              data-aos-duration="600"
            >
              <Ob />
            </div>
            <div 
              data-aos="fade-up"
              data-aos-delay={isMobile ? "1000" : "600"}
              data-aos-duration="600"
            >
              <Button2 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketing2;