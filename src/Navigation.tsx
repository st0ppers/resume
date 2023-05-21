import { Route, Routes } from "react-router-dom";
import { Resume } from "./Pages/Resume";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";

export const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Resume" element={<Resume/>}/>
            <Route path="/Contact" element={<Contact/>}/>
        </Routes>
    );
}