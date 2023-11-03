// components/Navbar.js
import React, { useState } from "react";
import styles from "./HomeScreen.module.scss";

import Image from "next/image";
import Carousel from "./Carousel/Carousel";
import Slider from "./Slider/Slider";
import { Tab } from "@/utils/types/dataTypes";

const HomeScreen = (props: { images: string[]; tabs: Tab[] }) => {
  return (
    <div className={styles.container}>
      <Carousel images={props.images} />
      <Slider tabs={props.tabs} />
    </div>
  );
};

export default HomeScreen;
