import React from "react";
import style from "./Hero.module.css";
import Image from "next/image";

import Ob from "@/components/astract/Object";
import Button from "@/components/button/Button";

import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { aboutPage } from "@/data/photos";

const Hero = () => {
  return (
    <section className={style.container}>
      <div className={style.helper}>
        <div className={style.leftContanier}>
          <div className={style.titleContainer}>
            <p>A hivatásom személyes mottója:</p>
            <h1 className={style.title}>
              „A szépség nem más, mint a bennünk megteremtődött harmónia
              tükröződése.”
            </h1>
          </div>
          <Ob />

          <div className={style.textContainer}>
            <p>Sok szeretettel köszöntelek,</p>
            <p className={style.name}>Hajduné Fekete Emilia</p>
            <p>
              mesterkozmetikus bőresztéta, esztétikai sminktetováló vagyok,{" "}
              <br />
              az Emy Beauty Estetics tulajdonosa és megálmodója.
            </p>
            <p>
              Ez a „BÉKE SZIGETE” ahol nyugalom vár rád, <br />
              ahol nem csak a bőröd, hanem lelked is kisimul, megszépül.
            </p>
            <p>
              Érkezz meg a gondolatok közötti csendbe, <br />
              és élvezd ki a magadra szánt értékes perceket!
            </p>
          </div>

          <Button />
        </div>

        <div className={style.rightContanier}>
          <Image alt={alt.name} size={size.fullsize} src={aboutPage.hero} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
