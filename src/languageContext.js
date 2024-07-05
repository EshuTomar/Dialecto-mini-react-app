import { createContext, useContext, useState } from "react";

export const languageContext = createContext();

// debug the below custom hook
// export const getLanguageValue = () => {
//   const value = useContext(languageContext);
//   return value;
// };
// Custom hook to get the language value
export const getLanguageValue = () => {
  const value = useContext(languageContext);
  if (!value) {
    throw new Error("getLanguageValue must be used within a LanguageContextProvider");
  }
  return value;
};


// debug the below context Provider
export const LanguageContextProvider = ({children}) => {
  const [language, setLanguage] = useState("English");

  return (
    <languageContext.Provider
      value={{ language, setLanguage }}
    >
     {children}
    </languageContext.Provider>
  );
};
