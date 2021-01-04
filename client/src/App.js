import React from "react";
import Header from "./components/Header";
import Search from "./pages/Search/index";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

function App() {
  
    return (
      <div>
      <Header />
      <NavBar />
      <Search />
      </div>
    );
  
}

export default App;
