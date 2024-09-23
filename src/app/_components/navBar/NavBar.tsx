"use client";
import {BrowserRouter, Routes, Route } from "react-router-dom";

 function NavBar() {
    return(
    <> 
        
        <BrowserRouter>
            <Routes>
                <Route path="/home">Home</Route>
                <Route path="/about">About</Route>
                <Route path="/contact">Contact</Route>
                <Route path="/search">Search</Route>
            </Routes>
        </BrowserRouter>
    </>
    )
}

export default NavBar;