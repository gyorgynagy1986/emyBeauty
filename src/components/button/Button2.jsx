import React from "react";
import style from "./Button.module.css";
import Link from "next/link";
import Image from "next/image";
import icon from "../../../public/assets/icon/calendar.svg";
import { alt } from "@/data/alt";

const Button2 = () => {
  return (
    <>
      <Link
        className={`${style.button2}`}
        href="/idopont-foglalas"
      >
        <Image className={style.iamge} alt={alt.name} src={icon} />
        Kérj konzultációt
      </Link>{" "}
    </>
  );
};

export default Button2;
