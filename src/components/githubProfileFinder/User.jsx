import React from "react";
import styles from "./styles.module.css";

export const User = ({ userd }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    html_url,
    name,
    login,
    created_at,
  } = userd;

  const createDate = new Date(created_at);
  return (
    <div className={styles.user}>
      <div>
        <img src={avatar_url} alt="User " className={styles.avatar} />
      </div>
      <div>
        <a href={html_url} target="_blank">
          {name || login}
        </a>
        <p>
          User Joined Github{" "}
          {`${createDate.getDate()} ${createDate.toLocaleString("en-us", {
            month: "short",
          })} ${createDate.getFullYear()}`}
        </p>
      </div>
      <div>
        <div>
          <p>Publick Repos : {public_repos}</p>
        </div>
        <div>
          <p>Followers : {followers}</p>
        </div>
        <div>
          <p>Following : {following}</p>
        </div>
      </div>
    </div>
  );
};
