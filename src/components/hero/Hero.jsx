import React from "react";
import style from "./Hero.module.css";
import Image from "next/image";
import Button from "../button/Button";
import Button2 from "../button/Button2";
import Object from "../astract/Object";

import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { mainPage } from "@/data/photos";


const Hero = () => {
  return (
    <div className={style.container}>
      <Image
        alt={alt.name}
        quality={100}
        fill
        size={size.fullsize}
        src={mainPage.heroPhoto}
      />
      <div className={style.leftContanier}>
        <div className={style.helper}>
          <h1 className={style.h1}>
            Sok szeretettel köszöntelek az Emy Beauty Estetics weboldalán!
          </h1>
          <div>
            <Object />
          </div>
          <div>
            <p className={style.p}>
              Ez a „BÉKE SZIGETE” ahol nyugalom vár rád, ahol nem csak a bőröd,
              hanem lelked is kisimul, megszépül.
            </p>
          </div>

          <div className={style.buttonContainer}>
            <Button />
            <Button2 />
          </div>
        </div>
      </div>
      <div className={style.rightContanier}></div>
    </div>
  );
};

export default Hero;
