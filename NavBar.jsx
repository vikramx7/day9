import { useContext } from "react";
import { ThemeContext } from "./Main";

function Navbar() {

  const { theme, onClick } = useContext(ThemeContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: theme.bgColor,
        color: theme.textColor,
        height: "10vh",
      }}
    >
      <h3>Navbar</h3>
      <button onClick={onClick}>Switch Theme</button>
    </div>
  );
}

export default Navbar;