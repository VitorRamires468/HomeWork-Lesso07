import { createContext, useState } from "react";

export const MyContext = createContext();

export function MyProvider({ children }) {
  const [prefer, setPrefer] = useState({ language: "en", theme: "light" });
  const toggleTheme = () => {
    setPrefer((currentTheme) => ({
      ...currentTheme,
      theme: currentTheme.theme === "light" ? "dark" : "light",
    }));
  };

  const changeLanguage = (language) => {
    setPrefer((currentLang) => ({ ...currentLang, language: language }));
  };

  return (
    <MyContext.Provider value={{ prefer, changeLanguage, toggleTheme }}>
      {children}
    </MyContext.Provider>
  );
}
