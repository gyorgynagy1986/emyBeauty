import React from "react";
import Image from "next/image";
import Object from "./../../../public/assets/icon/object.svg";
import { alt } from "@/data/alt";

const Abstract = () => {
  return <Image alt={alt.name} src={Object} />;
};

export default Abstract;
