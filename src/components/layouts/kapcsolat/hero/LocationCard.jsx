import React from "react";
import style from "./Hero.module.css";
import Image from "next/image";
import Ob from "@/components/astract/ObjectElement";
import Button from "@/components/button/Button";
import { size } from "@/data/size";
import { alt } from "@/data/alt";

const LocationCard = ({ title, businessName, address, phone, mapSrc }) => (
  <div className={style.rightContanier}>
    <Image
      className={style.img}
      alt={alt.name}
      fill
      size={size.fullsize}
      src={mapSrc}
    />
    <div className={style.itemContainer}>
      <div className={style.titleContainer}>
        <h3 className={style.title}>{title}</h3>
        <Ob />
      </div>
      <div className={style.textContainer}>
        <p className={style.name}>{businessName}</p>
        <p className={style.address}>{address}</p>
        <a className={style.tel} href={`tel:${phone}`}>
          {phone}
        </a>
      </div>
      <Button yellow={true} />
    </div>
  </div>
);

export default LocationCard;
