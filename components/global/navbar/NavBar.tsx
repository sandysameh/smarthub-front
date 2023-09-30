// components/Navbar.js
import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import { HamburgerIcon, SearchIcon, Cart, CloseIcon } from "../icons/icons";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../services/redux/hooks/hooks";
import { setSidebarIsOpen } from "../../../services/redux/slices/drawers";
import Sidebar from "../sidebar/SideBar";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const sidebarIsOpen = useAppSelector(
    (store) => store.drawersSlice.sidebarIsOpen
  );

  const toggleSidebar = () => {
    dispatch(setSidebarIsOpen(!sidebarIsOpen));
  };

  return (
    <div>
      <nav
        className={`${styles.navbar} ${sidebarIsOpen && styles.opened_sidebar}`}
      >
        <div onClick={toggleSidebar}>
          <HamburgerIcon sideBarIsOpen={sidebarIsOpen} />
        </div>

        <div className={styles.navbar__logo}>
          WEDDING <br />
          HUB
        </div>
        <div className={styles.navbar__actions}>
          {!sidebarIsOpen ? (
            <>
              <div className={styles.navbar__actions__search}>
                <SearchIcon />
              </div>
              <div className={styles.navbar__actions__cart}>
                <Cart />
              </div>
            </>
          ) : (
            <div
              className={styles.navbar__actions__closeButton}
              onClick={toggleSidebar}
            >
              <CloseIcon />
            </div>
          )}
        </div>
      </nav>
      <Sidebar />
    </div>
  );
};

export default Navbar;
