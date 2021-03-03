import React from "react";
import NavBar from "./components/navbar/NavBar";
import Search from "./components/search/Search";
import "./App.css";
import { MuiThemeProvider } from "material-ui/styles";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <MuiThemeProvider>
      <div>
      <NavBar />
      <Search />
      <Footer/>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
