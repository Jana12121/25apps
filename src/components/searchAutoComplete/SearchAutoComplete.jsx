import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Suggestions } from "./Suggestions";

export const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [dropDown, setDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChangeInput(e) {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((user) => user.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      filteredData && filteredData.length
        ? setDropDown(true)
        : setDropDown(false);
    } else {
      setDropDown(false);
      setFilteredUsers([]);
    }
  }

  function handleChooseResult(e) {
    setDropDown(false);
    setSearchParam(e.target.innerText);
    setFilteredUsers([]);
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("https://dummyjson.com/users");
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const resData = await response.json();
      if (resData && resData.users && resData.users.length) {
        setUsers(resData.users.map((uD) => uD.firstName));
      } else {
        throw new Error("No Users Found");
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div className={styles.container}>
      {loading ? (
        <h1>Loading Please Wait</h1>
      ) : (
        <input
          value={searchParam}
          onChange={handleChangeInput}
          type="text"
          name="search"
          placeholder="Search Users Here"
        />
      )}
      {dropDown && (
        <Suggestions data={filteredUsers} click={handleChooseResult} />
      )}
    </div>
  );
};
