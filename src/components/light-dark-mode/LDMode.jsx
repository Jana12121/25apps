import React from "react";
import styles from "./styles.module.css";
import { useLocalStorage } from "./useLocalStorage";

export const LDMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div className={styles.LightDarkMode} data-theme={theme}>
      <div className={styles.container}>
        <button onClick={handleToggleTheme}>
          Change Theme To {theme === "light" ? "dark" : "light"}
        </button>
      </div>
    </div>
  );
};
