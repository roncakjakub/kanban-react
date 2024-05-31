import { createContext, useState } from "react";

const ThemeContext = createContext({
  theme: "",
  toggleTheme: () => [],
});

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  const themeCtx = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={themeCtx}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContextProvider };
export default ThemeContext;
