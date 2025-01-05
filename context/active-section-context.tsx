import React, { useState, createContext } from 'react';
import { links }  from "@/lib/data";


type SectionName = typeof links[number]["name"];

type ActiveSectionContextProvider = {
    children: React.ReactNode;
};

const ActiveSectionContext = createContext(null);

export default function ActiveSectionContextProvider({
    children,
}: ActiveSectionContextProvider) {
      const [activeSection, setActiveSection] = useState<SectionName>("Home");

  return <ActiveSectionContext.Provider>{children}</ActiveSectionContext.Provider>
}
