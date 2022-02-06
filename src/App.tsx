import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home";
import { AddLink } from './pages/addLink/addLink';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addLink" element={<AddLink />} />
      </Routes>
    </div>
  );
}

export default App;
