import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import ResumeBuilder from "./pages/ResumeBuilder";
import Preview from "./pages/Preview";
import Login from "./pages/Login";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch;
  const getUserData = async () => {
    const token = localStorage.getItem("token");

    try{
if(token) {
  const {data} = await 
}
    }catch (error) {}

  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="app" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="builder/:resumeID" element={<ResumeBuilder />} />
        </Route>

        <Route path="view/:resumeID" element={<Preview />} />
      </Routes>
    </>
  );
};

export default App;
