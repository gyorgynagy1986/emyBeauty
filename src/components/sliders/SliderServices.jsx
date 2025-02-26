"use client";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./Slider.module.css";
import { size } from "@/data/size";
import { alt } from "@/data/alt";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Ob from "@/components/astract/ObjectElement";

import photo from "../../../public/assets/swiper/1.png";
import photo2 from "../../../public/assets/swiper/2.png";
import photo3 from "../../../public/assets/swiper/3.png";

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const slides = [
    {
      image: photo,
      title: "Gyémántfejes mikrodermabrázió",
      description:
        "A gyémántfejes mikrodermabrázió egy fájdalommentes, bőrhámlasztó kezelés, amely eltávolítja az elha...",
    },
    {
      image: photo2,
      title: "SQT® Bio Mikrotűs kezelés",
      description:
        "Az SQT® bio mikrotűs kezelés természetes szilícium mikrotűkkel serkenti a bőr megújulását, fesze..",
    },
    {
      image: photo3,
      title: "Tű nélküli mezoterápia - Elektroporáció",
      description:
        "A tű nélküli mezoterápia fájdalommentesen juttat hatóanyagokat a bőr mélyére elektr..",
    },
  ];

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {[...slides, ...slides, ...slides].map((slide, index) => (
          <div key={index} className={styles.SwiperContainer}>
            <div className={styles.itemContainer}>
              <div className={styles.photoContainer}>
                <Image
                  sizes={size.fullsize}
                  alt={alt.name}
                  src={slide.image}
                  className={styles.img}
                />
              </div>
              <div className={styles.textContainer}>
                <h3>{slide.title}</h3>
                <Ob />
                <p>{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MultipleItems;
