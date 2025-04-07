import { useState } from "react";
import {Route,Routes, Router as BrowserRouter} from "react-router-dom"
import bg_img from "./assets/bg-2.jpg"; 
import icon from "./assets/logo.png"
import LandingPage from "./components/LandingPage";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
   <>
   <Routes>

    <Route exact path="/" element={<LandingPage/>}/>
    <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
   </Routes>
   
   
   </>
  );
}

export default App;
