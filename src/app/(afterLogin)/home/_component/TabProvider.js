"use client";

import { createContext, ReactNode, useState } from "react";

export const TabContext = createContext({
  tab: "rec",
  setTab: (value) => {},
});

export default function TabProvider({ children }) {
  const [tab, setTab] = useState("rec");

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}
