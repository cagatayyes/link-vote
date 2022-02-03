import { Routes, Route } from "react-router-dom";
import { List } from './features/list/list';
import { AddLink } from './features/addLink/addLink';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/addLink" element={<AddLink />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
