import { useContext } from "react";
import InsideHome from "./InsideHome";
import { ThemeContext } from "./Main";

function HomePage() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        height: "82vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: theme.bgColor,
        color: theme.textColor,
        alignItems: "center",
      }}
    >
      <InsideHome />
    </div>
  );
}

export default HomePage;