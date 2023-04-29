import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./components/Project";
import Navbar from "./components/Navbar";
import Requirements from "./components/Requirements";
import Resources from "./components/Resources";
import history from "./history";
import Toastify from "./components/Toastify";

function App() {
  return (
    <div>
      <Navbar history={history} />
      <Toastify />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="/requirements" element={<Requirements />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
