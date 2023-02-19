import React from "react";
import{Routes, Route, BrowserRouter, NavLink} from "react-router-dom";
import {Start} from "../components/Start";
import {Portfolio} from "../components/Portfolio";
import {Services} from "../components/Services";
import {Resume} from "../components/Resume";
import {Contact} from "../components/Contact";

export const MyRouter= ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={Start}/>
                <Route path="/start" element={Start}/>
                <Route path="/portfolio" element={Portfolio}/>
                <Route path="/services" element={Services}/>
                <Route path="/resume" element={Resume}/>
                <Route path="/contact" element={Contact}/>
            </Routes>
        </BrowserRouter>
    )
}