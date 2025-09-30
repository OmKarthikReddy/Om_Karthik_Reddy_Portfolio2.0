import React from "react";
// The key change is here: using HashRouter for GitHub Pages compatibility
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Research from "./components/Research";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import TAResources from "./components/TAResources";

function App() {
  return (
    // This Router component now uses HashRouter
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ta-resources" element={<TAResources />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
