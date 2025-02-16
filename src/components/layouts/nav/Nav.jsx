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

const Nav = () => {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Topnav />
      <div className={styles.navContainer}>
        <div>
          <Link href='/'>
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

        <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          {isMenuOpen ? (
            <X size={32} color="#004e9d" />
          ) : (
            <Menu size={32} color="#004e9d" />
          )}
        </div>

        <div className={`${styles.rightContainer} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <ul className={styles.ul}>
            {links.map((linkItem) => (
              <li key={linkItem.id}>
                <Link
                  href={linkItem.href}
                  className={path === linkItem.href ? styles.active : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {linkItem.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button onClick={() => setIsMenuOpen(false)} />
        </div>
      </div>
    </div>
  );
};

export default Nav;