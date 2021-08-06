import './App.css';
import { Routes, Route } from "react-router-dom";
import {Header} from "./components/Header"
import {HomePage} from "./pages/HomePage"
import {WatchVideo} from "../src/components/WatchVideo"
import {LikedPage} from "./pages/LikedPage"
import { HistoryPage } from './pages/HistoryPage';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

function App() {
  return (
    <div className="appBody">
      <Header />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/liked" element={<LikedPage />} />
          <Route path="/watch/:videoId" element={<WatchVideo />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </div>
  );
}

export default App;
