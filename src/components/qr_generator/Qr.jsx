import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

export const Qr = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
  }
  return (
    <div className="container">
      <div className="text-inputs">
        <h1>QR Code Generator</h1>
        <div className="inputs">
          <input
            type="text"
            name="qr-code"
            placeholder="Enter your value here"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            disabled={input && input.trim() !== "" ? false : true}
            onClick={() => {
              handleGenerateQrCode();
              setInput("");
            }}
          >
            Generate
          </button>
        </div>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
};
