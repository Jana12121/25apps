import React, { useState } from "react";
import styles from "./styles.module.css";

export const Tabs = ({ tabsContent, onChange }) => {
  const [currTabIndex, setCurrTabIndex] = useState(0);
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        {tabsContent.map((tabItem, i) => (
          <div
            key={tabItem.label}
            className={`${styles.tabItem} ${
              currTabIndex === i ? styles.tabItemActive : ""
            }`}
            onClick={() => {
              setCurrTabIndex(i);
              onChange(i);
            }}
          >
            <span className={styles.label}>{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className={styles.content}>
        {tabsContent[currTabIndex] && tabsContent[currTabIndex].content}
      </div>
    </div>
  );
};
