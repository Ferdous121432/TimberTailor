import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function WhatsApp() {
  return (
    <div>
      <a
        href="https://wa.me/8801722249835"
        style={{
          position: "fixed",
          bottom: "80px",
          left: "20px",
          backgroundColor: "#25D366",
          color: "white",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
          zIndex: 1000,
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}
