import React from "react";
import style from "./Marketing2.module.css";
import Image from "next/image";

import Ob from "@/components/astract/ObjectElement";
import Button from "@/components/button/Button5";
import Button2 from "@/components/button/Button6";

import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { aboutPage } from "@/data/photos";

const Marketing2 = () => {
  return (
    <section className={style.container}>
      <div className={style.helper}>
        <div className={style.contentContainer}>
          <div className={style.leftContainrt}>
            <Image
              alt={alt.name}
              sizes={size.fullsize}
              src={aboutPage.photo5}
            />
          </div>

          <div className={style.rightContainrt}>
            <h3>Innováció</h3>
            <p>
              Kezeléseim során az egészség, a szépség, a nyugalom és a harmónia
              luxusát kínálom Vendégeimnek. A kezeléseket prémium minőségű
              orvos-esztétikai termékek és high-tech gépek felhasználásával
              végzem.
            </p>
            <p>
              Vendégeim számára személyre szabott terveket állítok össze
              konzultáció keretein belül, bőrspecifikusan. Ezek a tervek
              orvosesztétikai és kozmetikai kezeléseket, kúrákat, valamint ezek
              kombinációit tartalmazzák. A hatékony és tartós eredményeink
              kulcsa ez az alapos, személyre szabott megközelítés.
            </p>
            <p>
              A Secret™ RF mikrotűs frakcionális rádiófrekvenciás kezelés a
              kedvencem. Ez az egyik legmodernebb, műtét nélküli bőrfiatalító
              eljárás, amely fokozza a bőr természetes kollagéntermelését.
            </p>
            <Ob />
            <Button />
          </div>
        </div>

        <div className={style.contentContainer}>
          <div className={style.leftContainrt}>
            <Image
              alt={alt.name}
              sizes={size.fullsize}
              src={aboutPage.photo6}
            />
          </div>

          <div className={style.rightContainrt}>
            <h3>Minőség és nyugalom</h3>
            <p>
              Szalonomat a minőség, a nyugalom és a spirituális lelki egyensúly
              jegyében hoztam létre.
            </p>
            <p>
              Köszönök minden Veletek töltött, inspiráló pillanatot, a bizalmat,
              és várom a közelgő találkozásainkat!
            </p>

            <Ob />
            <Button2 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketing2;
