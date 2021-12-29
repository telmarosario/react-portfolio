import { Routes, Route } from "react-router-dom";

import "./App.css";

import BookswayCase from "./case_studies/BookswayCase";
import LangeekCase from "./case_studies/LangeekCase/LangeekCase";
import Homepage from "./Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booksway" element={<BookswayCase />} />
        <Route path="/langeek" element={<LangeekCase />} />
      </Routes>
    </div>
  );
}

export default App;
