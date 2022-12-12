import Topbar from "./topbar/topbar";
import Intro from "./intro/intro";
import Portfolio from "./portfolio/portfolio";

import Contact from "./contact/contact";
import "./App.scss";
import { useState } from "react";
import Menu from "./menu/menu";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Portfolio/>
       
       <Contact/>
     </div>
    </div>
  );
  
}

export default App;