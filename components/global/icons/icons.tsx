import React from "react";
import styles from "./icons.module.scss";

export const HamburgerIcon = (props: { sideBarIsOpen: boolean }) => {
  return (
    <div
      className={`${styles.hamburger} ${
        props.sideBarIsOpen && styles.inactive
      }`}
    >
      <div className={styles.hamburger__line}></div>
      <div className={`${styles.hamburger__line} ${styles.middle}`}></div>
      <div className={styles.hamburger__line}></div>
    </div>
  );
};

export const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <circle cx="9.5" cy="9.5" r="9" stroke="black" />
      <path d="M17.5 18L21 21.5" stroke="black" />
    </svg>
  );
};

export const Cart = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3.49594 23.28L4.31166 6.7207H20.659L21.4747 23.28H3.49594Z"
        stroke="#14142B"
      />
      <path
        d="M8.16016 10.1491L8.16016 5.55139C8.16016 4.40438 8.61581 3.30434 9.42687 2.49328C10.2379 1.68221 11.338 1.22656 12.485 1.22656C13.632 1.22656 14.732 1.68221 15.5431 2.49328C16.3542 3.30434 16.8098 4.40438 16.8098 5.55139V10.1491"
        stroke="#14142B"
      />
    </svg>
  );
};

export const CloseIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Close">
        <path
          id="Vector 4"
          d="M6 6L18.7742 18.7742"
          stroke="#333333"
          stroke-linejoin="round"
        />
        <path
          id="Vector 5"
          d="M6 18.7744L18.7742 6.00022"
          stroke="#333333"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export const OpenArrow = () => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Forward" opacity="0.5">
        <path
          id="Forward_2"
          d="M19.5781 9L12.615 15.9632L5.65178 9"
          stroke="#333333"
        />
      </g>
    </svg>
  );
};

export const CloseArrow = () => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Back" opacity="0.5">
        <path
          id="Vector"
          d="M19.5781 15.9631L12.615 8.99996L5.65178 15.9631"
          stroke="#14142B"
        />
      </g>
    </svg>
  );
};
