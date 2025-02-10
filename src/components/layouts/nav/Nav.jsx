"use client";

import styles from "./Nav.module.css";
import Topnav from "./Topnav";
import Link from "next/link";
import Image from "next/image";
import { alt } from "@/data/alt";
import { size } from "@/data/size";
import { links } from "@/data/links";
import { usePathname } from "next/navigation";
import logo from "../../../../public/assets/logos/logo.svg";

const Nav = () => {
  const path = usePathname();

  return (
    <div>
      <Topnav />
      <div className={styles.navContainer}>
        <Image
          priority
          quality={100}
          sizes={size.fullsize}
          src={logo}
          alt={alt.name}
        />
        <div className={styles.leftContainer}>
          <ul className={styles.ul}>
            {links.map((linkItem) => (
              <li key={linkItem.id}>
                {" "}
                <Link
                  href={linkItem.href}
                  className={path === linkItem.href ? styles.actice : undefined}
                >
                  {linkItem.name}
                </Link>
              </li>
            ))}
          </ul>
          <button className={styles.button}>Foglalj időpontot!</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
