import Author from './pages/Author';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import GlobeMap from './pages/GlobeMap';
import './App.css';
import "antd/dist/antd.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='switch_mode'>
        <Routes>
          <Route element={<Author />} path="/author" />
          <Route element={<GlobeMap />} path="/globemap" />
          <Route element={<Profile />} path="/profile/*" />
          <Route element={<Homepage />} path="/" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
