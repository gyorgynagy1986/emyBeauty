"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Galeria.module.css";
import Ob from "@/components/astract/ObjectElement";

// AOS import
import "aos/dist/aos.css";
import AOS from "aos";

import photo1 from '../../../../public/assets/pages/galeria/1.webp'
import photo2 from '../../../../public/assets/pages/galeria/2.webp'
import photo3 from '../../../../public/assets/pages/galeria/3.webp'
import photo4 from '../../../../public/assets/pages/galeria/4.webp'
import photo5 from '../../../../public/assets/pages/galeria/5.webp'
import photo6 from '../../../../public/assets/pages/galeria/6.webp'
import photo7 from '../../../../public/assets/pages/galeria/7.webp'
import photo8 from '../../../../public/assets/pages/galeria/8.webp'
import photo10 from '../../../../public/assets/pages/galeria/10.webp'
import photo11 from '../../../../public/assets/pages/galeria/11.webp'
import photo12 from '../../../../public/assets/pages/galeria/12.webp'

// Fő komponens
const GalleryPage = () => {
  // Képernyőméret figyelése
  const [isMobile, setIsMobile] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);

  const photos = [
    { src: photo1, alt: "Kozmetikai kezelés 1" },
    { src: photo2, alt: "Kozmetikai kezelés 2" },
    { src: photo3, alt: "Kozmetikai kezelés 3" },
    { src: photo4, alt: "Kozmetikai kezelés 4" },
    { src: photo5, alt: "Kozmetikai kezelés 5" },
    { src: photo6, alt: "Kozmetikai kezelés 6" },
    { src: photo7, alt: "Kozmetikai kezelés 7" },
    { src: photo8, alt: "Kozmetikai kezelés 8" },
    { src: photo10, alt: "Kozmetikai kezelés 10" },
    { src: photo11, alt: "Kozmetikai kezelés 11" },
    { src: photo12, alt: "Kozmetikai kezelés 12" },
  ];

  useEffect(() => {
    // Képernyőméret ellenőrzése és isMobile állapot beállítása
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Kezdeti ellenőrzés
    checkIfMobile();

    // AOS inicializálása
    AOS.init();

    // Mobilon frissítsük az AOS-t a state változás után
    if (isMobile) {
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }

    // Eseményfigyelő a képernyőméret változásához
    window.addEventListener("resize", () => {
      const wasMobile = isMobile;
      checkIfMobile();

      // Ha változott a nézet típusa, frissítsük az AOS-t
      if (wasMobile !== isMobile) {
        setTimeout(() => {
          AOS.refresh();
        }, 100);
      }
    });

    // Eseményfigyelő az ESC gombra a modalhoz
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && selectedImage !== null) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    // Komponens leválasztásakor takarítunk
    return () => {
      window.removeEventListener("resize", checkIfMobile);
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isMobile, selectedImage]);

  const openModal = (index) => {
    document.body.style.overflow = "hidden"; // Megakadályozzuk a görgetést
    setSelectedImage(index);
    setTimeout(() => setFadeIn(true), 10);
  };

  const closeModal = () => {
    setFadeIn(false);
    setTimeout(() => {
      setSelectedImage(null);
      document.body.style.overflow = "auto"; // Görgetés visszaállítása
    }, 300);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setFadeIn(false);
    setTimeout(() => {
      setSelectedImage((prev) => (prev + 1) % photos.length);
      setFadeIn(true);
    }, 300);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setFadeIn(false);
    setTimeout(() => {
      setSelectedImage((prev) => (prev - 1 + photos.length) % photos.length);
      setFadeIn(true);
    }, 300);
  };

  return (
    <section className={styles.container}>
      <div className={styles.helper}>
        <div 
          data-aos={isMobile ? "fade-up" : "fade-right"}
          data-aos-offset="150"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-mirror="true"
          data-aos-once="true"
          className={styles.titleContainer}
        >
          <h1 className={styles.title}>Galéria</h1>
          <Ob />
        </div>
        
        <div className={styles.galleryContainer}>
          <div className={styles.galleryGrid}>
            {photos.map((photo, index) => (
              <div
                key={index}
                className={styles.galleryItem}
                onClick={() => openModal(index)}
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay={100 + index * 50} // Progresszív késleltetés minden képnél
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    layout="fill"
                    objectFit="cover"
                    className={styles.galleryImage}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                  />
                  <div className={styles.imageOverlay}>
                    <div className={styles.zoomIcon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className={styles.modal} onClick={closeModal}>
            <div
              className={`${styles.modalContent} ${fadeIn ? styles.fadeIn : ""}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalImageContainer}>
                <Image
                  src={photos[selectedImage].src}
                  alt={photos[selectedImage].alt}
                  layout="fill"
                  objectFit="contain"
                  className={styles.modalImage}
                  priority
                />
              </div>

              <button
                className={`${styles.navButton} ${styles.prevButton}`}
                onClick={prevImage}
                aria-label="Előző kép"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <button
                className={`${styles.navButton} ${styles.nextButton}`}
                onClick={nextImage}
                aria-label="Következő kép"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>

              <button
                className={styles.closeButton}
                onClick={closeModal}
                aria-label="Bezárás"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className={styles.imageCounter}>
                {selectedImage + 1} / {photos.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryPage;