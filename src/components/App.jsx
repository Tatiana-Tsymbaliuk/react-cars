import { Route, Routes } from "react-router-dom";
import { Header } from "./Header/Header";
import { Suspense } from "react";
import Home from "../page/Home";
import Catalog from "../page/Catalog";
import Favorites from "../page/Favorites";

export const App = () => {
  return (
    <div>
        <Header/>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
    <Route path="/" element ={<Home/>}/>
    <Route path="/catalog" element ={<Catalog/>}/>
    <Route path="/favorites" element ={<Favorites/>}/>
    <Route path="*" element={<Home/>}/>
      </Routes>
      </Suspense>
      
    </div>


  );
};
