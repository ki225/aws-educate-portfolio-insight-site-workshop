import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import ProjectDetail from "./projects/ProjectPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
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
