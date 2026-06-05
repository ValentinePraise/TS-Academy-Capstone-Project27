import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Table from "./Components/Table";

import Planet from "./Components/Planet";
import Cards from "./Components/Cards";
import CapStoneform from "./Components/CapStoneForm";
import Footer from "./Components/CapStoneFooter";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Table  />
      <Planet />
      <Cards />
      <CapStoneform />
      <Footer />
    </div>
  );
};

export default App;
