import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { NavBar } from "./NavBar";
import { Portfolio } from "./portfolio";
import { About } from "./about";
import { Footer } from "./footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/portfolio" Component={Portfolio} />
          <Route path="/home" Component={Home} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
