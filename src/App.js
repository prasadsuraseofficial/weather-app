import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom"

import './App.css';
import SideNav from './components/SideNav/SideNav';
import Cities from './pages/Cities';
// import Home from './pages/Home';

const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <div className="App">
      
      <SideNav />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cities" element={<Cities />} />
        </Routes>
      </Suspense>

    </div>
  );
}

export default App;
