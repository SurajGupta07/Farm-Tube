import './App.css';
import {Header} from "./components/Header"
import {Home} from "../src/components/Home"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="appBody">
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/library" element={<Library />} />
          <Route path="/history" element={<History />} />
          <Route path="/video-detail/:videoId" element={<VideoDetail />} /> */}
        </Routes>
    </div>
  );
}

export default App;
