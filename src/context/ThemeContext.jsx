import { createContext, useState } from "react";

const ThemeContext = createContext({
  isDark,
  toggleTheme: () => [],
});

const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {};

  const themeCtx = { isDark, toggleTheme };

  return (
    <ThemeContext.Provider value={themeCtx}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContextProvider };
export default ThemeContext;