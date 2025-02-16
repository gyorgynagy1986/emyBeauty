import React from "react";
import Image from "next/image";
import Object from "./../../../public/assets/icon/objectStending.svg";
import styles from './ObjectStending.module.css'
import { alt } from "@/data/alt";

const Abstract = () => {
  return <Image className={styles.image} alt={alt.name} src={Object} />;
};

export default Abstract;
