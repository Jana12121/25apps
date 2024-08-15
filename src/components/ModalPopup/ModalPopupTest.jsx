import React, { useState } from "react";
import styles from "./styles.module.css";
import { ModalPopup } from "./ModalPopup";

export const ModalPopupTest = () => {
  const [showPopup, setShowPopup] = useState(false);
  function onOpen() {
    setShowPopup(true);
  }
  function onClose() {
    setShowPopup(false);
  }
  return (
    <div>
      <button onClick={onOpen}>Open Modal Popup</button>
      {showPopup && (
        <ModalPopup handleClick={onClose} footer={<h2>Customized Footer</h2>} />
      )}
    </div>
  );
};
