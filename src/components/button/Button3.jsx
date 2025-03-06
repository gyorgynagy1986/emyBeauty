import React from "react";
import style from "./Button.module.css";
import icon from '../../../public/assets/icon/eye.svg'
import Image from "next/image";
import { alt } from "@/data/alt";
import Link from "next/link";


const Button3 = () => {
  return <Link href='/szolgaltatasok' className={style.button3}> <Image alt={alt.name} src={icon} /> Tekintsd meg az összes szolgáltatásom!</Link>;
};

export default Button3;
