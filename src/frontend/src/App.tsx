import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import ProjectDetail from "./projects/ProjectPage";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <Project />
            </main>
          }
        />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}
