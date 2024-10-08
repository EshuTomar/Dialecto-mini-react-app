import { createContext, useContext, useState } from "react";

export const themeContext = createContext();

// debug the below custom hook
// export const getThemeValue = () => {
//   const value = useContext(themeContext);
//   return value;
// };
export const getThemeValue = () => {
  const value = useContext(themeContext);
  if (!value) {
    throw new Error("getThemeValue must be used within a ThemeContextProvider");
  }
  return value;
};
// debug the below context Provider
export const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState("light");

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};
