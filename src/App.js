import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-[#292d3e] w-full py-20 font-['Mukta']">
      <div className="bg-[#1b1e28] w-10/12 md:w-6/12 max-w-[400px] h-full mx-auto rounded-3xl">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
};

export default App;
