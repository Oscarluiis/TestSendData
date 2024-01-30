import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataTest } from './views/DataTest';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<DataTest />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
