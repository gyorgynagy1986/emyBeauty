"use client"

import { useState, useEffect, useRef } from "react";
import styles from "./Nav.module.css";
import Link from "next/link";
import Image from "next/image";
import { alt } from "@/data/alt";
import { size } from "@/data/size";
import { links } from "@/data/links";
import { usePathname } from "next/navigation";
import logo from "../../../../public/assets/logos/logo.svg";
import Button from "@/components/button/Button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const Nav = () => {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Új változók a folyamatos görgetés követéséhez
  const upScrollThreshold = 80; // Hány pixelt kell folyamatosan felfelé görgetni
  const upScrollCounter = useRef(0);

  const { scrollY } = useScroll();

  // Módosított scroll esemény figyelés
  useMotionValueEvent(scrollY, "change", (latest) => {
    // Ha a menü nyitva van, ne rejtsd el a navigációt
    if (isMenuOpen) {
      return;
    }

    // Görgetés irányának meghatározása
    const direction = latest < lastScrollY ? "up" : "down";
    const scrollDifference = Math.abs(latest - lastScrollY);
    
    if (direction === "down" && latest > 100 && isVisible) {
      // Lefelé görgetésnél azonnal elrejtjük
      setIsVisible(false);
      upScrollCounter.current = 0; // Nullázzuk a felfelé számlálót
    } else if (direction === "up") {
      // Felfelé görgetésnél csak akkor jelenítjük meg, ha elérjük a küszöbértéket
      upScrollCounter.current += scrollDifference;
      
      if (upScrollCounter.current >= upScrollThreshold && !isVisible) {
        setIsVisible(true);
      }
    }
    
    // Ha ismét lefelé kezdünk görgetni, nullázzuk a felfelé számlálót
    if (direction === "down") {
      upScrollCounter.current = 0;
    }
    
    // Utolsó görgetési pozíció frissítése
    setLastScrollY(latest);
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    // Ha a menü nyitva van, megakadályozzuk a görgetést és láthatóvá tesszük a navigációt
    if (!isMenuOpen) {
      // Teljesen letiltjuk a görgetést a body elemen
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
      setIsVisible(true);
    } else {
      // Visszaállítjuk a görgetést
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  };

  // Animációs variánsok a mobil menühöz
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.1,
        staggerChildren: 0.03,
        staggerDirection: -1,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      height: "calc(100dvh - 3.8rem - 90px)", // A képernyő teljes magassága mínusz TopNav és NavContainer
      transition: {
        duration: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    }
  };

  const menuItemVariants = {
    closed: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.15 }
    },
    open: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.15 }
    }
  };

  // Ablak átméretezés figyelése a menü bezárásához
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1100 && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <motion.div 
      className={styles.navContainer}
      initial="visible"
      animate={isVisible ? "visible" : "hidden"}
      variants={{
        visible: { 
          top: '3.8rem', // TopNav magassága
          transition: { duration: 0.35, ease: "easeOut" }
        },
        hidden: { 
          top: '-120px', // navContainer magassága negatívban
          transition: { duration: 0.5, ease: "easeIn" }
        }
      }}
    >
      <div>
        <Link href="/">
          <Image
            className={styles.logo}
            priority
            quality={100}
            sizes={size.fullsize}
            src={logo}
            alt={alt.name}
          />
        </Link>
      </div>

      <motion.div
        className={styles.hamburgerMenu}
        onClick={toggleMenu}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.15 }}
            >
              <X size={32} color="#004e9d" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.15 }}
            >
              <Menu size={32} color="#004e9d" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Egységesített menü konténer, amely reszponzívan változik */}
      <div 
        className={`${styles.rightContainer} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}
      >
        {/* Asztali menü - csak asztali nézetben látható */}
        <div className={styles.desktopNav}>
          <ul className={styles.ul}>
            {links.map((linkItem) => (
              <li key={linkItem.id}>
                {linkItem.href.startsWith('http') ? (
                  <a 
                    href={linkItem.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={path === linkItem.href ? styles.active : undefined}
                  >
                    {linkItem.name}
                  </a>
                ) : (
                  <Link
                    href={linkItem.href}
                    className={path === linkItem.href ? styles.active : undefined}
                  >
                    {linkItem.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Button />
        </div>

        {/* Mobil menü - csak mobil nézetben látható és animált */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={styles.mobileNavContent}
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              style={{ 
                display: "flex", 
                flexDirection: "column", 
                height: "100%" 
              }}
            >
              <motion.ul className={styles.ul}>
                {links.map((linkItem) => (
                  <motion.li 
                    key={linkItem.id} 
                    variants={menuItemVariants}
                    whileHover={{ backgroundColor: "#f5f5f5" }}
                  >
                    {linkItem.href.startsWith('http') ? (
                      <a 
                        href={linkItem.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={path === linkItem.href ? styles.active : undefined}
                        onClick={toggleMenu}
                      >
                        {linkItem.name}
                      </a>
                    ) : (
                      <Link
                        href={linkItem.href}
                        className={path === linkItem.href ? styles.active : undefined}
                        onClick={toggleMenu}
                      >
                        {linkItem.name}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div 
                variants={menuItemVariants}
                whileTap={{ scale: 0.95 }}
                className={styles.buttonContainer}
              >
                <Button onClick={() => {
                  toggleMenu(); // Használjuk a toggleMenu függvényt a menü bezárásához
                }} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Nav;