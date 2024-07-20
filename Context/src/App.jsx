import Preferences from "./components/Preferences";
import { MyProvider } from "./components/Config";
function App() {
  return (
    <MyProvider>
      <Preferences />
    </MyProvider>
  );
}

export default App;
