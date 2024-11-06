import "./style.css";
import { Route, Routes } from "react-router-dom";
import Currencies from "./components/Currencies";
import Main from "./components/Main";
import Price from "./components/Price";
import Nav from "./components/nav";

export default function App () {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/currencies" element={<Currencies/>}/>
        {/* <Route path="/price" element={<Price/>}/> */}
        <Route path="/price/:symbol" element={<Price/>}/>
      </Routes>
    </div>
  );
}