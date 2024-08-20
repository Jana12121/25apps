import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { User } from "./User";
export const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("Jana12121");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  function handleSubmit() {
    fetchGithubUserData();
  }

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const getUserData = await res.json();
    if (getUserData) {
      setUserData(getUserData);
      setLoading(false);
      setUserName("");
    }
  }

  useEffect(() => {
    fetchGithubUserData();
  }, [setUserName]);

  if (loading) {
    return <div>Loading data please wait!</div>;
  }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          name="searcByUsername"
          placeholder="Search Github Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData && <User userd={userData} />}
    </div>
  );
};
