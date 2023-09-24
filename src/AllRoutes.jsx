import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import UserDetail from "./components/UserDetail";

const AllRoutes = () => {
  return (
    <div>
      {" "}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todos" element={<UserDetail />} />
        <Route path="/user/:userId" element={<UserDetail />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
