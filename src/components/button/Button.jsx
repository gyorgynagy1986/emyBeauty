import React from "react";
import style from "./Button.module.css";
import Link from "next/link";
import Image from "next/image";
import icon from "../../../public/assets/icon/calendar2.svg";
import { alt } from "@/data/alt";

const Button = ({ yellow, onClick }) => {
  return (
      <Link
        className={`${style.button} ${yellow ? style.color : ""}`}
        href="/idopont-foglalas"
        onClick={onClick}
      >
        <Image className={style.iamge} alt={alt.name} src={icon} />
        Foglalj időpontot
      </Link>
  );
};

export default Button;
