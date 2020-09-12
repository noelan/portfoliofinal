import React from "react";

import "./Main.scss";
import Header from "./components/Header";
import About from "./components/About";
// import Loader from "./components/Loader";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <Loader /> */}
      <div className="scroll-wrapper">
        <main>
          <Header />
          <About />
          <Projects />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
