import React from "react";
import style from "./Marketing.module.css";
import Image from "next/image";
import Ob from "@/components/astract/Object";
import { size } from "@/data/size";
import { alt } from "@/data/alt";
import { aboutPage } from "@/data/photos";

const marketingContent = [
  {
    id: 1,
    image: aboutPage.photo1,
    title: "A Te bőröd szépsége, az én Szenvedélyem",
    description: "Szakmai hivatásom bőresztétaként nap mint nap tükröt tart elém. Inspirált és motivált vagyok a munkám által. A szépségipar rohamos léptékben fejlődik, én pedig igyekszem ezzel a fejlődéssel lépést tartani. Jellemző az állandó innováció, változás és megújulás. Mindig újabb célokat tűzök ki magamnak, ezért rendszeresen továbbképzésekre járok."
  },
  {
    id: 2,
    image: aboutPage.photo2,
    title: "A Harmónia és Szépség egyensúlya",
    description: "Célom, hogy megszépítsem a Nők bőrét, és egyensúlyba hozzam testi és lelki egészségük működését. Már több mint egy évtizede vagyok Veletek, a szépség szolgálatában. Szakmai tudásommal igyekszem lefedni a kozmetikus szakma minden területét. A szakmám a hivatásom és a szenvedélyem; az odafigyelésről és gondoskodásról szól."
  },
  {
    id: 3,
    image: aboutPage.photo3,
    title: "Folyamatos fejlődés",
    description: "Számomra a tanulás sosem áll meg. Folyamatosan fejlődöm és tudásomat bővítem, nyitott vagyok a legújabb szakmai újdonságokra. Ezáltal a vendégeim mindig a leginnovatívabb, csúcskategóriás eljárások által szépülhetnek."
  },
  {
    id: 4,
    image: aboutPage.photo4,
    title: "Segítek, hogy Önmagad legjobb verziója légy",
    description: "Az évek során felismertem, hogy az igazi szépséget csak a belső harmónia megteremtésével lehet elérni. Küldetésem, hogy a hozzám bizalommal forduló Nőknek személyre szabott szépségprogram segítségével megtanítsam, hogyan lehetnek önmaguk legjobb, legboldogabb verziói."
  }
];

const MarketingItem = ({ image, title, description }) => (
  <div className={style.itemContainer}>
    <div className={style.ImageContainer}>
      <Image
        alt={alt.name}
        sizes={size.fullsize}
        src={image}
        fill
      />
    </div>
    <div className={style.textContainer}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const Marketing = () => {
  return (
    <section className={style.container}>
      <div className={style.helper}>
        <div className={style.itemsHelper}>
          {marketingContent.slice(0, 2).map((item) => (
            <MarketingItem key={item.id} {...item} />
          ))}
        </div>
        <Ob />
        <div className={style.itemsHelper}>
          {marketingContent.slice(2).map((item) => (
            <MarketingItem key={item.id} {...item} />
          ))}
        </div>

        <p className={style.promo}>
          "Mindennap az motivál, hogy segítsek az embereknek megtalálni és
          kifejezni egyéni szépségüket, és felfedezni a bennük rejlő Istennőt.
          <br />
          Közben a lelküket is ápolom."
        </p>
      </div>
    </section>
  );
};

export default Marketing;