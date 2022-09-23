import "./App.css";
import Header from "./Header.js";
import Footer from "./Footer";
import Display from "./Display";
import { useState, useEffect } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  var isMobile = width >= 450;

  return (
    <div className="App">
      <Header isMobile={isMobile} />
      <Display isMobile={isMobile} />
      <Footer />
    </div>
  );
}

export default App;
