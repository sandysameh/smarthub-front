import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.scss";
import Image from "next/image";

const Carousel = (props: { images: string[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const indices = Array.from(
    { length: props.images.length },
    (_, index) => index
  );

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className={styles.carousel_container}>
      {props.images.map((image, index) => (
        <div
          key={index}
          className={`${styles.carousel_slide} ${
            currentSlide === index ? styles.active : ""
          }`}
        >
          <Image src={image} objectFit="cover" layout="fill" alt={""} />
          <div className={styles.image_text}>
            LUXURY &nbsp;&nbsp;FASHION &ELEGANCE
          </div>
        </div>
      ))}
      <div className={styles.carousel_button}>EXPLORE COLLECTION</div>
      <div className={styles.carousel_indicators}>
        {indices.map((index) => (
          <span
            key={index}
            className={`${styles.indicator} ${
              currentSlide === index ? styles.active : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      <div className={styles.carousel_text}>
        12 YEARS OF INSPIRATION FOR EVERY LOVE STORY.
      </div>
    </div>
  );
};

export default Carousel;
