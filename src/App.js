import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import "./style.css";
import Home from "./Home";
import About from "./About";
import ProtectedRoute from "./ProtectedRoute";
import PageNotFound from "./PageNotFound";

const App = () => {
  const [state, setstate] = useState(false);
  console.log("state is", state);
  return (
    <>
      <Routes>
        <Route
          path="/homepage"
          element={
            state ? (
              <ProtectedRoute isvalid={state}>
                <Home />
              </ProtectedRoute>
            ) : (
              <Login state={state} setstate={setstate} />
            )
          }
        />

        <Route
          path="/about"
          element={
            state ? (
              <ProtectedRoute isvalid={state}>
                <About />
              </ProtectedRoute>
            ) : (
              <Login state={state} setstate={setstate} />
            )
          }
        />
        <Route
          path="/"
          exact
          element={<Login state={state} setstate={setstate} />}
        />
        <Route
          path="/login"
          element={<Login state={state} setstate={setstate} />}
        />
        <Route
          path="/logout"
          element={<Login state={state} setstate={setstate} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
