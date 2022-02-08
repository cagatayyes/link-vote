import { Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/header/header";
import { Home } from "./pages/home/home";
import { AddLink } from './pages/addLink/addLink';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addLink" element={<AddLink />} />
      </Routes>
    </div>
  );
}

export default App;
