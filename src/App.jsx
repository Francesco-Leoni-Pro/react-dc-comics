import AppHeader from "./components/AppHeader.jsx";
import AppMain from "./components/AppMain.jsx";
import AppFooter from "./components/AppFooter.jsx";
import comics from "./assets/comics";

function App() {
  return (
    <>
      <AppHeader />
      <AppMain comics={comics} />
      <AppFooter />
    </>
  );
}

export default App;
