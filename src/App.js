import './App.css';
import { Routes, Route } from "react-router-dom";
import {Header} from "./components/Header"
import {Home} from "../src/components/Home"
import {WatchVideo} from "../src/components/WatchVideo"
import {Liked} from "../src/components/Liked"

function App() {
  return (
    <div className="appBody">
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/liked" element={<Liked />} />
          {/* <Route path="/library" element={<Library />} /> */}
          {/* <Route path="/history" element={<History />} /> */}
          <Route path="/watch/:videoId" element={<WatchVideo />} />
        </Routes>
    </div>
  );
}

export default App;
