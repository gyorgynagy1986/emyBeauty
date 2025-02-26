"use client";

import { useState } from "react";
import styles from "./Nav.module.css";
import Topnav from "./Topnav";
import Link from "next/link";
import Image from "next/image";
import { alt } from "@/data/alt";
import { size } from "@/data/size";
import { links } from "@/data/links";
import { usePathname } from "next/navigation";
import logo from "../../../../public/assets/logos/logo.svg";
import Button from "@/components/button/Button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    // Amikor a menü nyitva van, megakadályozzuk a body görgetését
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  // Animációs változók a mobil menühöz
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        staggerChildren: 0.03,
        staggerDirection: -1,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      height: "calc(100dvh - 90px)", // A magasság a teljes képernyő mínusz a navContainer magassága
      transition: {
        duration: 0.2,
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

  // Meghatározzuk, hogy mobilnézet vagy desktop nézet van-e
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 1100;

  return (
    <div>
      <Topnav />
      <div className={styles.navContainer}>
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

        {/* Egységes menükonténer, amely responsively változik */}
        <div 
          className={`${styles.rightContainer} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}
        >
          {/* Desktop menü - csak desktop nézetnél látható */}
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

          {/* Mobil menü - csak mobil nézetnél látható és akkor animálódik */}
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
      </div>
    </div>
  );
};

export default Nav;