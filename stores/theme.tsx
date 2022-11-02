import { Themes } from "@/constants/enum";
import React, { createContext, useEffect, useState } from "react";

interface IThemContextProps {
  theme: Themes;
  setTheme: (theme: Themes) => void;
}

interface IProps {
  children: JSX.Element;
}

export const ThemeContext = createContext<IThemContextProps>(
  {} as IThemContextProps
);

export const ThemeContextProvider = ({ children }: IProps): JSX.Element => {
  const [theme, setTheme] = useState<Themes>(Themes.light);
  useEffect(() => {
    const checkTheme = (): void => {
      const item = (localStorage.getItem("theme") as Themes) || Themes.light;
      setTheme(item);
      document.getElementsByTagName("html")[0].dataset.theme = item;
    };
    checkTheme();
    window.addEventListener("storage", checkTheme);
    return (): void => {
      window.removeEventListener("storage", checkTheme);
    };
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: (currentTheme) => {
          setTheme(currentTheme);
          localStorage.setItem("theme", currentTheme);
          document.getElementsByTagName("html")[0].dataset.theme = currentTheme;
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
