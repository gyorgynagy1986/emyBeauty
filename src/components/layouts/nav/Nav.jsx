"use client"

import { useState, useEffect } from "react";
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

  const { scrollY } = useScroll();

  // Scroll event monitoring for showing/hiding navigation
  useMotionValueEvent(scrollY, "change", (latest) => {
    // If menu is open, don't hide the navigation
    if (isMenuOpen) {
      return;
    }

    // Determine the scroll direction
    const direction = latest < lastScrollY ? "up" : "down";
    
    // Show when scrolling up, hide when scrolling down (only Nav)
    if (direction === "down" && latest > 100 && isVisible) {
      setIsVisible(false);
    } else if (direction === "up" && !isVisible) {
      setIsVisible(true);
    }
    
    // Update the last scroll position
    setLastScrollY(latest);
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    // When menu is open, prevent scrolling and make navigation visible
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
      setIsVisible(true);
    } else {
      document.body.style.overflow = "auto";
    }
  };

  // Animation variants for mobile menu
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
      height: "calc(100dvh - 3.8rem - 90px)", // Height is full screen minus TopNav and NavContainer
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

  // Watch for window resize to close menu
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
          transition: { duration: 0.2, ease: "easeOut" }
        },
        hidden: { 
          top: '-120px', // navContainer magassága negatívban
          transition: { duration: 0.2, ease: "easeIn" }
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

      {/* Unified menu container that changes responsively */}
      <div 
        className={`${styles.rightContainer} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}
      >
        {/* Desktop menu - only visible in desktop view */}
        <div className={styles.desktopNav}>
          <ul className={styles.ul}>
            {links.map((linkItem) => (
              <li key={linkItem.id}>
                <Link
                  href={linkItem.href}
                  className={path === linkItem.href ? styles.active : undefined}
                >
                  {linkItem.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button />
        </div>

        {/* Mobile menu - only visible in mobile view and animates */}
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
                    <Link
                      href={linkItem.href}
                      className={path === linkItem.href ? styles.active : undefined}
                      onClick={() => {
                        setIsMenuOpen(false);
                        document.body.style.overflow = "auto";
                      }}
                    >
                      {linkItem.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div 
                variants={menuItemVariants}
                whileTap={{ scale: 0.95 }}
                className={styles.buttonContainer}
              >
                <Button onClick={() => {
                  setIsMenuOpen(false);
                  document.body.style.overflow = "auto";
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