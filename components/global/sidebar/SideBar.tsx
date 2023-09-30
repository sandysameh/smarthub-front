import React, { useState } from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../services/redux/hooks/hooks";
import styles from "./Sidebar.module.scss";
import { setSidebarIsOpen } from "../../../services/redux/slices/drawers";
import { COLLECTIONS, PagesEnum } from "@/utils/types/enum";
import { category, subCategory } from "@/utils/types/dataTypes";

import { CloseArrow, OpenArrow } from "../icons/icons";
import { MenuItems } from "./Menu.items";

const Sidebar = () => {
  // const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState(COLLECTIONS.COLLECTION);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [activeCategories, setActiveCategories] = useState(
    MenuItems.find((item) => item.title === activeTab)?.category || ([] as any)
  );
  const [activeSubCategories, setActiveSubCategories] = useState(
    [] as any as subCategory[]
  );
  const sidebarIsOpen = useAppSelector(
    (state) => state.drawersSlice.sidebarIsOpen
  );
  const activateTabAndCategories = (activeTab: COLLECTIONS) => {
    setActiveTab(activeTab);
    const categories =
      MenuItems.find((item) => item.title === activeTab)?.category || [];

    console.log(categories);
    setActiveCategories(categories);
  };

  const activateCategoryAndSubCatgeories = (activeCategory: string) => {
    let category = activeCategory;
    let subCategories = activeCategories.find(
      (subCategory: subCategory) => subCategory.title === activeCategory
    )?.subCategory;
    if (selectedCategory === activeCategory) {
      category = "";
      subCategories = [] as any as subCategory;
    }

    setSelectedCategory(category);
    setActiveSubCategories(subCategories);
  };

  return (
    <div className={`${styles.sidebar} ${sidebarIsOpen ? styles.open : ""}`}>
      <nav className={styles.sidebar__nav_bar}>
        <ul>
          {MenuItems.map(
            (
              collection: { title: COLLECTIONS; category: any[] },
              index: number
            ) => (
              <li
                key={`${collection.title} ${index} `}
                onClick={() => activateTabAndCategories(collection.title)}
                className={
                  activeTab === collection.title ? styles.active_tab : ""
                }
              >
                {collection.title}
              </li>
            )
          )}
        </ul>
      </nav>
      {activeCategories && activeCategories?.length > 0 && (
        <div className={styles.sidebar__categories}>
          <ul>
            {activeCategories.map((category: category, index: number) => {
              return (
                <div key={`${category.title}-${index}`}>
                  <div
                    className={styles.sidebar__categories__container}
                    onClick={() =>
                      activateCategoryAndSubCatgeories(category.title)
                    }
                  >
                    <li>{category.title}</li>
                    {selectedCategory === category.title ? (
                      <CloseArrow />
                    ) : (
                      <OpenArrow />
                    )}
                  </div>
                  <div
                    className={
                      styles.sidebar__categories__container__subCategory
                    }
                  >
                    <ul>
                      {selectedCategory === category.title &&
                        activeSubCategories.map(
                          (subCategory: subCategory, index: number) => {
                            return (
                              <div
                                className={
                                  styles.sidebar__categories__container__subCategory__list
                                }
                                key={`${subCategory.title}-${index}`}
                              >
                                <li>{subCategory.title}</li>
                              </div>
                            );
                          }
                        )}
                    </ul>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
