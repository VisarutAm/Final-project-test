import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Body from "./components/Body";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
