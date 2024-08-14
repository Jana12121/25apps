import React from "react";
import { Tabs } from "./Tabs";

export const TabsTest = () => {
  const tabs = [
    {
      label: "Task 1",
      content: "This is Task 1",
    },
    {
      label: "Task 2",
      content: "This is Task 2",
    },
    {
      label: "Task 3",
      content: "This is Task 3",
    },
  ];

  function handleChange(currTabIndex) {
    console.log(currTabIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
};
