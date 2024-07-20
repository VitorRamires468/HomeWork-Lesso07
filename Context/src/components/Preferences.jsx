import { useContext } from "react";
import { MyContext } from "./Config";
function Preferences() {
  const context = useContext(MyContext);
  return (
    <>
      <button onClick={context.toggleTheme}>Trocar Tema</button>
      <button onClick={() => context.changeLanguage("pt")}>Idioma PT-BR</button>
      <button onClick={() => context.changeLanguage("en")}>Idioma EN</button>
      <div>
        Idioma: {context.prefer.language} <br />
        Tema: {context.prefer.theme}
      </div>
    </>
  );
}

export default Preferences;
