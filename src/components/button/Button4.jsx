import React from "react";
import style from "./Button.module.css";
import Link from "next/link";
import Image from "next/image";
import { alt } from "@/data/alt";
import icon from "../../../public/assets/icon/eye.svg";

const Button4 = () => {
  return (
    <Link href="/rolam" className={style.button3}>
      {" "}
      <Image alt={alt.name} src={icon} /> Tudj meg többet rólam
    </Link>
  );
};

export default Button4;
