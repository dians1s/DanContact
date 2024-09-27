import React from "react";
import { Routes, Route } from "react-router-dom";
import News from "../pages/News";

const AppRouter = () => {
    return(
    <Routes>
        <Route path="/" element={<News />}/>
    </Routes>
    )
}

export default AppRouter;