import { useState } from "react";
import {
  Qr,
  LDMode,
  ScrollIndicator,
  TabsTest,
  ModalPopupTest,
  GithubProfileFinder,
  SearchAutoComplete,
} from "./components";
import "./App.css";
// import { Test } from "./components/test/Test";

function App() {
  // Custom Scroll Indicator url for fetch
  // let url = "https://dummyjson.com/products";

  return (
    <div>
      {/* QR code generator */}
      {/* <Qr /> */}
      {/* Light Dark Mode */}
      {/* <LDMode /> */}
      {/* Custom Scroll Indicator */}
      {/* <ScrollIndicator url={url + "?limit=100"} /> */}
      {/* Tabs */}
      {/* <TabsTest /> */}
      {/* Modal Popup  */}
      {/* <ModalPopupTest /> */}
      {/* Github Profile Finder */}
      {/* <GithubProfileFinder /> */}

      {/* Search AutoComplete */}
      <SearchAutoComplete />
    </div>
  );
}

export default App;
