// components/Navbar.js
import React, { useState } from "react";
import styles from "./HomeScreen.module.scss";

import Image from "next/image";
import Carousel from "./Carousel/Carousel";

const HomeScreen = () => {
  return (
    <div className={styles.container}>
      <Carousel
        images={[
          "https://smarthub-imgs.s3.me-south-1.amazonaws.com/wedding.jpeg",
          "  https://smarthub-imgs.s3.me-south-1.amazonaws.com/wedding2.jpeg",
          "https://smarthub-imgs.s3.me-south-1.amazonaws.com/wedding3.jpeg",
        ]}
      />
    </div>
  );
};

export default HomeScreen;
// {/* <Image
//     src="https://smarthub-imgs.s3.me-south-1.amazonaws.com/wedding.jpeg"
//     alt="SmartHub"
//     width={400}
//     height={300}
//     loading="lazy"
//   /> */}
