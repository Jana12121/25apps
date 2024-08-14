import { useState } from "react";
import { Qr, LDMode, ScrollIndicator } from "./components";
import "./App.css";

function App() {
  let url = "https://dummyjson.com/products";
  return (
    <div>
      {/* QR code generator */}
      {/* <Qr /> */}

      {/* Light Dark Mode */}
      {/* <LDMode /> */}

      {/* Custom Scroll Indicator */}
      <ScrollIndicator url={url + "?limit=100"} />
    </div>
  );
}

export default App;
