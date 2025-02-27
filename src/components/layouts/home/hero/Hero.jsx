"use client";

import React, { useEffect, useRef, useState } from "react";
import style from "./Hero.module.css";
import Image from "next/image";
import Button from "../../../button/Button";
import Button2 from "../../../button/Button2";
import Ob from "../../../astract/ObjectElement";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { mainPage } from "@/data/photos";

// GSAP csak kliens oldalon elérhető, regisztráljuk a ScrollTrigger plugint
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const textContentRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    // Képernyőméret ellenőrzése és isMobile állapot beállítása
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Kezdeti ellenőrzés
    checkIfMobile();

    // Eseményfigyelő hozzáadása a képernyőméret változásához
    window.addEventListener('resize', checkIfMobile);

    // GSAP animációk inicializálása
    const initAnimations = () => {
      if (!heroRef.current || !imageRef.current || !textContentRef.current || !buttonsRef.current) return;

      // Töröljük a korábbi ScrollTrigger-eket, ha vannak
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Belépési animációk
      // Kép fade-in animáció
      gsap.fromTo(
        imageRef.current,
        { opacity: 0 },
        { 
          opacity: 1, 
          duration: 1.2, 
          ease: "power2.out" 
        }
      );
      
      // Szöveg fade-in animáció (mobil nézetben alulról jön fel)
      gsap.fromTo(
        textContentRef.current,
        { 
          opacity: 0,
          y: isMobile ? 50 : 0 
        },
        { 
          opacity: 1, 
          y: 0,
          duration: 1, 
          ease: "power2.out",
          delay: 0.3
        }
      );
      
      // Gombok fade-in animáció
      gsap.fromTo(
        buttonsRef.current,
        { opacity: 0 },
        { 
          opacity: 1, 
          duration: 0.8, 
          ease: "power2.out",
          delay: 0.6
        }
      );
      
      // Görgetési animációk csak desktop nézetben
      if (!isMobile) {
        // Kép növekedése görgetéskor
        gsap.fromTo(
          imageRef.current,
          { scale: 1 },
          {
            scale: 1.15,
            duration: 1,
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.5
            }
          }
        );
        
        // Szöveg növekedése görgetéskor
        gsap.fromTo(
          textContentRef.current,
          { scale: 1 },
          {
            scale: 1.1,
            duration: 1,
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.5
            }
          }
        );
      }
    };

    // Animációkat inicializáljuk egy kis késleltetéssel a DOM frissítés miatt
    const timer = setTimeout(() => {
      initAnimations();
    }, 100);

    // Újrainicializáljuk az animációkat képernyőméret változáskor
    window.addEventListener('resize', initAnimations);

    // Takarítás
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkIfMobile);
      window.removeEventListener('resize', initAnimations);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isMobile]);

  return (
    <div ref={heroRef} className={style.container}>
      <Image
        ref={imageRef}
        alt={alt.name}
        quality={100}
        className={style.image}
        priority
        size={size.fullsize}
        src={mainPage.heroPhoto}
      />
      <div className={style.leftContanier}>
        <div ref={textContentRef} className={style.helper}>
          <h1 className={style.h1}>
            Sok szeretettel köszöntelek az Emy Beauty Estetics weboldalán!
          </h1>
          <div>
            <Ob />
          </div>
          <div>
            <p className={style.p}>
              Ez a „BÉKE SZIGETE" ahol nyugalom vár rád, ahol nem csak a bőröd,
              hanem lelked is kisimul, megszépül.
            </p>
          </div>

          <div ref={buttonsRef} className={style.buttonContainer}>
            <Button />
            <Button2 className={style.leftContanier} />
          </div>
        </div>
      </div>
      <div className={style.rightContanier}></div>
    </div>
  );
};

export default Hero;