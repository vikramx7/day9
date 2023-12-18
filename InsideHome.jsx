import { useContext } from "react";
import { ThemeContext } from "./Main";

function InsideHome() {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme.bgColor, color: theme.textColor }}>
      InsideHome
    </div>
  );
}

export default InsideHome;