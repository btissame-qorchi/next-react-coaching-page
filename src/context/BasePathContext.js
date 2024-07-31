"use client";
import React, { createContext, useContext } from "react";

const BasePathContext = createContext("");

export const BasePathProvider = ({ children }) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <BasePathContext.Provider value={basePath}>
      {children}
    </BasePathContext.Provider>
  );
};

export const useBasePath = () => useContext(BasePathContext);
