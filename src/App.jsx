import { useState } from "react";
import {
  Qr,
  LDMode,
  ScrollIndicator,
  TabsTest,
  ModalPopupTest,
} from "./components";
import "./App.css";
import { Test } from "./components/test/Test";

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
      <Test />
    </div>
  );
}

export default App;
