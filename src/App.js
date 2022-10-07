import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewArticle from "./pages/NewArticle";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/add" element={<NewArticle />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
