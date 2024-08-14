import { useState } from "react";
import { Qr } from "./components";
import { LDMode } from "./components";
import "./App.css";

function App() {
  return (
    <div>
      {/* QR code generator */}
      {/* <Qr /> */}

      {/* Light Dark Mode */}
      <LDMode />
    </div>
  );
}

export default App;
