import React from "react";
import Dashboard from "./Pages/Dashboard";
import { Route, Link, Routes } from "react-router-dom";
import "Styles/global.css";
import CompanyDetails from "Pages/CompanyDetails";
import NotFound from "Pages/NotFound";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path=":companySymbol" element={<CompanyDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
