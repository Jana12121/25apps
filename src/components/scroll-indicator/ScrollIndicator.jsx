import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

export const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      if (!response.ok) {
        setError(`HTTP error! Status: ${response.status}`);
        return;
      }
      const responseData = await response.json();
      if (
        responseData &&
        responseData.products &&
        responseData.products.length > 0
      ) {
        setData(responseData.products);
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    const scrolled = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((scrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (loading) {
    return <p>Loading Data ...</p>;
  }

  if (error) {
    return <p>Error ! {error}</p>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <h1>Custom Scroll Indicator</h1>
        <div className={styles.scrollProgress}>
          <div
            className={styles.currentScroll}
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className={styles.dataContainer}>
        {data && data.length > 0
          ? data.map((data) => <p key={data.id}>{data.title}</p>)
          : null}
      </div>
    </div>
  );
};
