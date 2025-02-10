"use client";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./Slider.module.css";
import { size } from "@/data/size";
import { alt } from "@/data/alt";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Object from "@/components/astract/Object";

import photo from "../../../public/assets/swiper/1.png";
import photo2 from "../../../public/assets/swiper/2.png";
import photo3 from "../../../public/assets/swiper/3.png";

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className={styles.SwiperContainer}>
          <div className={styles.itemContainer}>
            <div className={styles.photoContainer}>
              <Image
                sizes={size.fullsize}
                alt={alt.name}
                src={photo}
                className={styles.img}
              ></Image>
            </div>
            <div className={styles.textContainer}>
              <h3>Gyémántfejes mikrodermabrázió</h3>
              <Object />
              <p>
                A gyémántfejes mikrodermabrázió egy fájdalommentes, bőrhámlasztó
                kezelés, amely eltávolítja az elha...
              </p>
            </div>
          </div>
        </div>

        <div className={styles.SwiperContainer}>
          <div className={styles.itemContainer}>
            <div className={styles.photoContainer}>
              <Image
                sizes={size.fullsize}
                alt={alt.name}
                src={photo2}
                className={styles.img}
              ></Image>
            </div>
            <div className={styles.textContainer}>
              <h3>SQT® Bio Mikrotűs kezelés</h3>
              <Object />
              <p>
                Az SQT® bio mikrotűs kezelés természetes szilícium mikrotűkkel
                serkenti a bőr megújulását, fesze..
              </p>
            </div>
          </div>
        </div>

        <div className={styles.SwiperContainer}>
          <div className={styles.itemContainer}>
            <div className={styles.photoContainer}>
              <Image
                sizes={size.fullsize}
                alt={alt.name}
                src={photo3}
                className={styles.img}
              ></Image>
            </div>
            <div className={styles.textContainer}>
              <h3>Tű nélküli mezoterápia - Elektroporáció</h3>
              <Object />
              <p>
                A tű nélküli mezoterápia fájdalommentesen juttat hatóanyagokat a
                bőr mélyére elektr..
              </p>
            </div>
          </div>
        </div>

        <div className={styles.SwiperContainer}>
          <div className={styles.itemContainer}>
            <div className={styles.photoContainer}>
              <Image
                sizes={size.fullsize}
                alt={alt.name}
                src={photo}
                className={styles.img}
              ></Image>
            </div>
            <div className={styles.textContainer}>
              <h3>Gyémántfejes mikrodermabrázió</h3>
              <Object />
              <p>
                A gyémántfejes mikrodermabrázió egy fájdalommentes, bőrhámlasztó
                kezelés, amely eltávolítja az elha...
              </p>
            </div>
          </div>
        </div>

        <div className={styles.SwiperContainer}>
          <div className={styles.itemContainer}>
            <div className={styles.photoContainer}>
              <Image
                sizes={size.fullsize}
                alt={alt.name}
                src={photo2}
                className={styles.img}
              ></Image>
            </div>
            <div className={styles.textContainer}>
              <h3>SQT® Bio Mikrotűs kezelés</h3>
              <Object />
              <p>
                Az SQT® bio mikrotűs kezelés természetes szilícium mikrotűkkel
                serkenti a bőr megújulását, fesze..
              </p>
            </div>
          </div>
        </div>

        <div className={styles.SwiperContainer}>
          <div className={styles.itemContainer}>
            <div className={styles.photoContainer}>
              <Image
                sizes={size.fullsize}
                alt={alt.name}
                src={photo3}
                className={styles.img}
              ></Image>
            </div>
            <div className={styles.textContainer}>
              <h3>Tű nélküli mezoterápia - Elektroporáció</h3>
              <Object />
              <p>
                A tű nélküli mezoterápia fájdalommentesen juttat hatóanyagokat a
                bőr mélyére elektr..
              </p>
            </div>
          </div>
        </div>

        <div className={styles.SwiperContainer}>
          <div className={styles.itemContainer}>
            <div className={styles.photoContainer}>
              <Image
                sizes={size.fullsize}
                alt={alt.name}
                src={photo}
                className={styles.img}
              ></Image>
            </div>
            <div className={styles.textContainer}>
              <h3>Gyémántfejes mikrodermabrázió</h3>
              <Object />
              <p>
                A gyémántfejes mikrodermabrázió egy fájdalommentes, bőrhámlasztó
                kezelés, amely eltávolítja az elha...
              </p>
            </div>
          </div>
        </div>

        <div className={styles.SwiperContainer}>
          <div className={styles.itemContainer}>
            <div className={styles.photoContainer}>
              <Image
                sizes={size.fullsize}
                alt={alt.name}
                src={photo2}
                className={styles.img}
              ></Image>
            </div>
            <div className={styles.textContainer}>
              <h3>SQT® Bio Mikrotűs kezelés</h3>
              <Object />
              <p>
                Az SQT® bio mikrotűs kezelés természetes szilícium mikrotűkkel
                serkenti a bőr megújulását, fesze..
              </p>
            </div>
          </div>
        </div>

        <div className={styles.SwiperContainer}>
          <div className={styles.itemContainer}>
            <div className={styles.photoContainer}>
              <Image
                sizes={size.fullsize}
                alt={alt.name}
                src={photo3}
                className={styles.img}
              ></Image>
            </div>
            <div className={styles.textContainer}>
              <h3>Tű nélküli mezoterápia - Elektroporáció</h3>
              <Object />
              <p>
                A tű nélküli mezoterápia fájdalommentesen juttat hatóanyagokat a
                bőr mélyére elektr..
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
