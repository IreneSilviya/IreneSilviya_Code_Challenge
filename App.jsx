import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddPlayer from "./pages/AddPlayer";
import EditPlayer from "./pages/EditPlayer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-player" element={<AddPlayer />} />
          <Route path="/edit-player/:id" element={<EditPlayer />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;