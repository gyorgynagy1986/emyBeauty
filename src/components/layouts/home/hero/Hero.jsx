"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import style from "./Hero.module.css";
import Image from "next/image";
import Button from "../../../button/Button";
import Button2 from "../../../button/Button2";
import Ob from "../../../astract/ObjectElement";

import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { mainPage } from "@/data/photos";

const Hero = () => {
  // Initialize AOS only on client-side after component mounts
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={style.container}>
      <Image
        alt={alt.name}
        quality={100}
        className={style.image}
        priority
        size={size.fullsize}
        src={mainPage.heroPhoto}
        data-aos="fade"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
      />
      <div className={style.leftContanier}>
        <div
          data-aos="fade"
          data-aos-offset="-50"
          data-aos-delay="50"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
          className={style.helper}
        >
          <h1 className={style.h1}>
            Sok szeretettel köszöntelek az Emy Beauty Estetics weboldalán!
          </h1>
          <div>
            <Ob />
          </div>
          <div>
            <p className={style.p}>
              Ez a „BÉKE SZIGETE" ahol nyugalom vár rád, ahol nem csak a bőröd,
              hanem lelked is kisimul, megszépül.
            </p>
          </div>

          <div
            data-aos="fade"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            className={style.buttonContainer}
          >
            <Button />
            <Button2 className={style.leftContanier} />
          </div>
        </div>
      </div>
      <div className={style.rightContanier}></div>
    </div>
  );
};

export default Hero;
