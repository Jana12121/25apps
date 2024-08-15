import styles from "./styles.module.css";
import React from "react";

export const ModalPopup = ({ id, header, body, footer, handleClick }) => {
  return (
    <div id={id || "Modal"} className={styles.modal}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.closeModalIcon} onClick={handleClick}>
            &times;
          </span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className={styles.body}>
          {body ? (
            body
          ) : (
            <div>
              <p>This is Modal Popup Body</p>
            </div>
          )}
        </div>
        <div className={styles.footer}>
          {footer ? (
            footer
          ) : (
            <div>
              <h2>This is Modal Popup Footer</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
