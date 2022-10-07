import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewArticle from "./pages/NewArticle";
import ArticleDetails from './components/ArticleDetails';
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">  
    
    <BrowserRouter>
  <Navigation />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/add" element={<NewArticle />} />
      <Route path="/details/:articleid" element={<ArticleDetails />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
