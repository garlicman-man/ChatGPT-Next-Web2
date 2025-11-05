"use client";

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Path } from "../constant";
import { useAccessStore } from "../store";

export function Udify() {
  const navigate = useNavigate();
  const access = useAccessStore();

  useEffect(() => {
    if (!access.isAuthorized()) {
      navigate(Path.Auth);
    }
  }, [access, navigate]);

  if (!access.isAuthorized()) return null;

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <iframe
        src="https://udify.app/chatbot/ZoRr89HTZ0pG9gg8"
        style={{ width: "100%", height: "100%", minHeight: "700px" }}
        frameBorder={0}
        allow="microphone"
      />
    </div>
  );
}

export default Udify;


