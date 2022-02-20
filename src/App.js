import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom"

import './App.css';
import SideNav from './components/SideNav/SideNav';

// import Cities from './pages/Cities';
// import Home from './pages/Home';

const HomeContainer = React.lazy(() => import("./containers/HomeContainer"));
const CitiesContainer = React.lazy(() => import("./containers/CitiesContainer"));

function App() {
  return (
    <div className="App">
      
      <SideNav />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
            <Route path="/" element={<HomeContainer />} />
            {/* <Route path="/cities" element={<Cities />} /> */}
            <Route path="/cities" element={<CitiesContainer />} />
        </Routes>
      </Suspense>

    </div>
  );
}

export default App;
