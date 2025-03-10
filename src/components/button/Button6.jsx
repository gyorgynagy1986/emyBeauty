import React from "react";
import style from "./Button.module.css";
import Link from "next/link";
import Image from "next/image";
import { alt } from "@/data/alt";
import icon from "../../../public/assets/icon/map.svg";

const Button4 = () => {
  return (
    <Link href="/kapcsolat" className={style.button3}>
      {" "}
      <Image alt={alt.name} src={icon} /> Válassz az elérhetőségeim közül
    </Link>
  );
};

export default Button4;
