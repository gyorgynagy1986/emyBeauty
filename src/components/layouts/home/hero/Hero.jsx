"use client";

import React, { useEffect, useState } from "react";
import style from "./Hero.module.css";
import Image from "next/image";
import Button from "../../../button/Button";
import Button2 from "../../../button/Button2";
import Ob from "../../../astract/ObjectElement";

import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';

import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { mainPage } from "@/data/photos";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Képernyőméret ellenőrzése
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Kezdeti ellenőrzés
    checkIfMobile();

    // Eseményfigyelő a képernyőméret változásához
    window.addEventListener('resize', checkIfMobile);
    
    // Komponens leválasztásakor takarítunk
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <ParallaxProvider>
      <div className={style.container}>
        {/* Kép Parallax effektekkel */}
        <Parallax
          translateY={[0, 0]}
          scale={[1, isMobile ? 1 : 1.15]} // Mobilon nincs nagyítás
          easing="linear" // Lineáris átmenet a görgetéssel
          className={style.imageWrapper}
        >
          <Image
            alt={alt.name}
            quality={100}
            className={style.image}
            priority
            sizes={size.fullsize}
            src={mainPage.heroPhoto}
          />
        </Parallax>

        <div className={style.leftContanier}>
          {/* Szöveg tartalom Parallax effektekkel */}
          <Parallax
            translateY={isMobile ? [50, 0] : [0, 0]} // Mobilon fade-up animáció
            scale={[1, isMobile ? 1 : 1.1]} // Mobilon nincs nagyítás
            opacity={isMobile ? [0, 1] : [1, 1]} // Mobilon fade animáció
            easing="linear" // Lineáris átmenet a görgetéssel
            className={style.helper}
            startScroll={0}
            endScroll={isMobile ? 300 : 600}
          >
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

            {/* Gombok normál módon, fade effekttel */}
            <div className={style.buttonContainer}>
              <Button />
              <Button2 className={style.leftContanier} />
            </div>
          </Parallax>
        </div>
        <div className={style.rightContanier}></div>
      </div>
    </ParallaxProvider>
  );
};

export default Hero;