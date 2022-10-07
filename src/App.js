import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewArticle from "./pages/NewArticle";
import ArticleDetails from './components/ArticleDetails';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/add" element={<NewArticle />} />
      <Route path="/details/:id" element={<ArticleDetails />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
