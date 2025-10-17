import { JSX } from "react";
import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";

function App(): JSX.Element {
  return (
    <>
      <Nav />
      <Main />
      <Menu />
      <Footer />
    </>
  );
}

export default App;
