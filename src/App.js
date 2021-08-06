import './App.css';
import { Routes, Route } from "react-router-dom";
import {Header} from "./components/Header"
import {HomePage} from "./pages/HomePage"
import {WatchVideo} from "../src/components/WatchVideo"
import {LikedPage} from "./pages/LikedPage"

function App() {
  return (
    <div className="appBody">
      <Header />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/liked" element={<LikedPage />} />
          <Route path="/watch/:videoId" element={<WatchVideo />} />
        </Routes>
    </div>
  );
}

export default App;
