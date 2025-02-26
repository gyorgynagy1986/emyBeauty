import React from "react";
import Image from "next/image";
import Ob from "./../../../public/assets/icon/object.svg";
import { alt } from "@/data/alt";

const Abstract = () => {
  return <Image alt={alt.name} src={Ob} />;
};

export default Abstract;
