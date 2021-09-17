import './App.css';
import { Routes, Route } from "react-router-dom";
import {Header} from "./components/Header"
import {HomePage} from "./pages/HomePage"
import {WatchVideo} from "../src/components/WatchVideo"
import {LikedPage} from "./pages/LikedPage"
import { HistoryPage } from './pages/HistoryPage';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { useAuth } from './contexts/authContext';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  let {token} = useAuth();
  return (
    <div className="appBody">
      {token && <Header />}
      <Routes>
          <PrivateRoute path="/" element={<HomePage />} />
          <PrivateRoute path="/liked" element={<LikedPage />} />
          <PrivateRoute path="/watch/:videoId" element={<WatchVideo />} />
          <PrivateRoute path="/history" element={<HistoryPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </div>
  );
}

export default App;
