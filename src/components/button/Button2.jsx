import React from "react";
import style from "./Button.module.css";
import Link from "next/link";

const Button2 = () => {
  return (
    <>
      <Link href='/idopont-foglalas' className={style.button2}>Kérj konzultációt!</Link>
    </>
  );
};

export default Button2;
