import React from "react";
import style from "./Button.module.css"; // Remove the trailing slash
import Link from "next/link";

const Button = () => {
  return (
      <Link className={style.button} href="/foglalas"> Foglalj időpontot</Link>
    
  );
};

export default Button;