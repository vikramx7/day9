import { useState, createContext } from "react";
import Footer from "./Footer";
import HomePage from "./Homepage";
import Navbar from "./Navbar";
import StateHook from "../StateHook";
import Purity from "../Purity";


export const ThemeContext = createContext({});

function Main() {
  const [theme, setTheme] = useState({
    bgColor: "black",
    textColor: "white",
  });

  function onClick() {
    theme.bgColor === "black"
      ? setTheme({
          textColor: "black",
          bgColor: "white",
        })
      : setTheme({ textColor: "white", bgColor: "black" });
  }

  const values = {
    theme,
    onClick,
  };

  
  return (
    <ThemeContext.Provider value={values}>
      <Navbar />
      <HomePage />
      <Footer theme={theme} />
      <StateHook />
      <Purity />
    </ThemeContext.Provider>
  );
}

export default Main;