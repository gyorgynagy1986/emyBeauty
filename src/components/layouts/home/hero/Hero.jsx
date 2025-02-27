"use client";

import React, { useEffect, useRef, useState } from "react";
import style from "./Hero.module.css";
import Image from "next/image";
import Button from "../../../button/Button";
import Button2 from "../../../button/Button2";
import Ob from "../../../astract/ObjectElement";

import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { mainPage } from "@/data/photos";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const textContentRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    // Képernyőméret ellenőrzése
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Kezdeti ellenőrzés
    checkIfMobile();

    // Belépési animációk (csak egyszer futnak le)
    const setupEntryAnimations = () => {
      // Alaphelyzetbe állítjuk az elemeket
      if (imageRef.current) {
        imageRef.current.style.opacity = '0';
      }
      
      if (textContentRef.current) {
        textContentRef.current.style.opacity = '0';
        textContentRef.current.style.transform = isMobile ? 'translateY(50px)' : 'translateY(0)';
      }
      
      if (buttonsRef.current) {
        buttonsRef.current.style.opacity = '0';
      }
      
      // Kép animáció - natív DOM manipuláció
      setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.style.transition = 'opacity 1s linear';
          imageRef.current.style.opacity = '1';
        }
      }, 100);
      
      // Szöveg animáció - natív DOM manipuláció
      setTimeout(() => {
        if (textContentRef.current) {
          textContentRef.current.style.transition = 'opacity 1s linear, transform 1s linear';
          textContentRef.current.style.opacity = '1';
          textContentRef.current.style.transform = 'translateY(0)';
        }
      }, 400);
      
      // Gombok animáció - natív DOM manipuláció
      setTimeout(() => {
        if (buttonsRef.current) {
          buttonsRef.current.style.transition = 'opacity 0.8s linear';
          buttonsRef.current.style.opacity = '1';
        }
      }, 700);
    };

    // Futtatjuk a belépési animációkat
    setupEntryAnimations();
    
    // Natív scroll eseményfigyelő a pixel-perfect nagyításhoz
    const handleScroll = () => {
      if (isMobile || !heroRef.current || !imageRef.current || !textContentRef.current) return;
      
      // Kiszámoljuk, hogy mennyire görgettünk túl a hero elemen
      const heroRect = heroRef.current.getBoundingClientRect();
      
      // Milyen messzire görgettünk, a hero elem tetejéhez képest
      const scrollProgress = Math.min(Math.max(-heroRect.top / heroRect.height, 0), 1);
      
      // Képet és szöveget azonnal nagyítjuk a görgetés arányában
      imageRef.current.style.transition = 'none'; // Kikapcsoljuk az átmenetet a pixel-perfect követéshez
      textContentRef.current.style.transition = 'none'; // Kikapcsoljuk az átmenetet a pixel-perfect követéshez
      
      // Kép nagyítása 1.0 - 1.15 között
      const imageScale = 1 + (scrollProgress * 0.15);
      imageRef.current.style.transform = `scale(${imageScale})`;
      
      // Szöveg nagyítása 1.0 - 1.1 között
      const textScale = 1 + (scrollProgress * 0.1);
      textContentRef.current.style.transform = `scale(${textScale})`;
    };
    
    // Scroll eseménykezelő hozzáadása
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Eseményfigyelő a képernyőméret változásához
    window.addEventListener('resize', checkIfMobile);
    
    // Komponens leválasztásakor takarítunk
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [isMobile]); // Csak akkor futtatjuk újra, ha az isMobile érték változik

  return (
    <div ref={heroRef} className={style.container}>
      <Image
        ref={imageRef}
        alt={alt.name}
        quality={100}
        className={style.image}
        priority
        sizes={size.fullsize}
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