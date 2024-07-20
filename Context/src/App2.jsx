// import MyChildren from "./components/Filho";
// import { MyProvider } from "./components/Contexto";
import { useState, createContext, useContext } from "react";

const ThemeContext = createContext({ theme: "light", toggleTheme: () => {} });

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div>
          <Toolbar />
          <button onClick={toggleTheme}>Trocar Tema</button>
        </div>
      </ThemeContext.Provider>
    </>
  );
}
function Toolbar() {
  const { theme } = useContext(ThemeContext);
  return <div>Tema utilizado - {theme}</div>;
}

export default App;
