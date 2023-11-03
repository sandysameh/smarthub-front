import React, { useRef, useState, MouseEvent } from "react";
import styles from "./CollectionSlider.module.scss";
import { MenuItems } from "@/components/global/sidebar/Menu.items";
import { Tab } from "@/utils/types/dataTypes";
import Image from "next/image";

const Slider = (props: { tabs: Tab[] }) => {
  const tabs = props.tabs;
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);
  const tabsRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (
    e: MouseEvent<HTMLButtonElement>,
    clickedTab: Tab
  ) => {
    setActiveTab(clickedTab);

    const tabsContainer = tabsRef.current;
    if (!tabsContainer) return;
    const tabElement = e.currentTarget;

    const rect = tabElement.getBoundingClientRect();
    const containerRect = tabsContainer.getBoundingClientRect();

    // Check if the right side of the tab is close to the right side of the container
    if (rect.right > containerRect.right - rect.width) {
      // Scroll to make the next tab visible
      tabsContainer.scrollLeft += rect.width;
    }
  };

  return (
    <div className={styles.collectionSlider}>
      <p className={styles.title}>{MenuItems[0].title}</p>
      <div className={styles.tabs} ref={tabsRef}>
        {tabs.map((tab) => (
          <button
            key={tab.title}
            onClick={(e) => handleTabClick(e, tab)}
            className={tab.title === activeTab.title ? `${styles.active}` : ""}
            style={
              {
                "--tab-color": `${activeTab.backgroundColor}`,
              } as React.CSSProperties
            }
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className={styles.imgContainer}>
        <div
          className={styles.imageSlider}
          style={
            {
              "--tab-color": `${activeTab.backgroundColor}`,
            } as React.CSSProperties
          }
        >
          <Image
            objectFit="contain"
            className={`${styles.img} ${styles.visible}`}
            src={activeTab.imgUrl}
            alt={activeTab.title}
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
