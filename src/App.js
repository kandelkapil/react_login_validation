import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import "./style.css";
import Home from "./Home";
import About from "./About";
import { Logout } from "./Logout";
import { ProtectedRoute } from "./ProtectedRoute";
import PageNotFound from "./PageNotFound";
const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/homepage"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route path="/" exact element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
