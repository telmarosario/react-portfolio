import { Routes, Route } from "react-router-dom";

import "./App.css";

import BookswayCase from "./case_studies/BookswayCase/BookswayCase";
import LangeekCase from "./case_studies/LangeekCase/LangeekCase";
import Homepage from "./Homepage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booksway" element={<BookswayCase />} />
          <Route path="/langeek" element={<LangeekCase />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
