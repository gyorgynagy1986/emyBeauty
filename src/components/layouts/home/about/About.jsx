"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./About.module.css";
import Ob from "@/components/astract/ObjectElement";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { mainPage } from "@/data/photos";
import { alt } from "@/data/alt";
import { size } from "@/data/size";
import Button4 from "@/components/button/Button4";

// GSAP csak kliens oldalon elérhető, regisztráljuk a ScrollTrigger plugint
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const imageWrapperRef = useRef(null); // A képet burkoló elem, a CSS effektekhez
  const sectionRef = useRef(null);

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
      if (!textRef.current || !imageRef.current || !sectionRef.current || !imageWrapperRef.current) return;

      // Töröljük a korábbi ScrollTrigger-eket, ha vannak
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Asztali nézetben alaphelyzetben homályos a kép
      if (!isMobile) {
        // Kezdeti állapot beállítása - homályos kép asztali nézetben
        gsap.set(imageWrapperRef.current, { 
          filter: "blur(3px)"
        });
      }
      
      // Szöveg animáció - mobilon felfelé csúszás, asztali nézetben oldal csúszás
      gsap.fromTo(
        textRef.current,
        { 
          opacity: 0,
          y: isMobile ? 50 : 0,
          x: isMobile ? 0 : -50 
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: isMobile ? false : 0.5,
            toggleActions: "play none none reverse"
          }
        }
      );

      // Kép animáció - mobilon csak fadein
      gsap.fromTo(
        imageRef.current,
        { 
          opacity: 0,
          y: isMobile ? 0 : 50,
          x: isMobile ? 0 : 50
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: false
          }
        }
      );

      // Kép homályosság animációja - asztali nézetben
      if (!isMobile) {
        // Amikor a felhasználó a szekcióhoz ér, a kép kitisztul
        gsap.fromTo(
          imageWrapperRef.current,
          { 
            filter: "blur(3px)" 
          },
          {
            filter: "blur(0px)",
            duration: 0.8,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "center center",
              scrub: 0.5
            }
          }
        );

        // Ahogy görgeti tovább, visszahomályosodik és növekszik
        gsap.fromTo(
          imageWrapperRef.current,
          { 
            filter: "blur(0px)",
            scale: 1 
          },
          {
            filter: "blur(.2px)",
            scale: 1.1,
            duration: 1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "center center",
              end: "bottom top",
              scrub: 0.5
            }
          }
        );
      } else {
        // Mobilon csak eltűnéskor animáljuk a képet
        gsap.fromTo(
          imageWrapperRef.current,
          { 
            filter: "blur(0px)",
            scale: 1 
          },
          {
            filter: "blur(.2px)",
            scale: 1.05,
            duration: 0.5,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "bottom 70%",
              end: "bottom top",
              scrub: 0.3
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
    <section ref={sectionRef} className={styles.sections}>
      <div className={styles.container}>
        <div className={styles.helper}>
          <div ref={textRef} className={styles.textContainer}>
            <div className={styles.titleContainer}>
              <h2>Rólam</h2>
              <Ob />
            </div>
            <div className={styles.text}>
              <p>
                <span> Hajduné Fekete Emilia</span> vagyok, mesterkozmetikus,
                bőresztéta és esztétikai sminktetováló, az Emy Beauty Estetics
                megálmodója.
              </p>
              <p>
                Szenvedélyem a nők testi-lelki harmóniájának megteremtése és
                bőrük egészségének ápolása. Személyre szabott kezeléseimmel és a
                legmodernebb technológiákkal segítek, hogy a szépség és az
                önbizalom természetes ragyogása életre keljen.
              </p>
            </div>
            <div className={styles.buttonContainer}>
              <Button4 />
            </div>
          </div>

          <div ref={imageRef} className={styles.photoContainer}>
            {/* Kép csomagoló div a filter és scale animációhoz */}
            <div ref={imageWrapperRef} className={styles.imageWrapper}>
              <Image
                sizes={size.fullsize}
                src={mainPage.photoMainPage}
                alt={alt.name}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;