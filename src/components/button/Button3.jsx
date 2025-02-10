import React from "react";
import style from "./Button.module.css";
import icon from '../../../public/assets/icon/eye.svg'
import Image from "next/image";
import { alt } from "@/data/alt";


const Button3 = () => {
  return <button  className={style.button3}> <Image alt={alt.name} src={icon} /> Tekintsd meg az összes szolgáltatásom!</button>;
};

export default Button3;
