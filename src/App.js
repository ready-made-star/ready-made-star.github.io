import Author from './pages/Author';
import Homepage from './pages/Homepage';
import './App.css';
import "antd/dist/antd.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='switch_mode'>
        <Routes>
          <Route element={<Author />} path="/author" />
          <Route element={<Homepage />} path="/" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
