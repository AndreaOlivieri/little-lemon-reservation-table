import { JSX } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

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
