import React from "react";
import style from "./Button.module.css";
import Link from "next/link";

const Button = ({ yellow, onClick }) => {
  return (
    <Link 
      className={`${style.button} ${yellow ? style.color : ''}`} 
      href="/idopont-foglalas"
      onClick={onClick}
    > 
      Foglalj időpontot
    </Link>
  );
};

export default Button;