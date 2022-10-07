import { useEffect, useState } from "react";
import Article from "../components/Article";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/articles")
    .then(res => res.json())
    .then(data => setArticles(data))
  }, []);

  return <section>        
  {articles.map((article, key) => 
    <Article key={key} article={article} />)}
    </section>;

};

export default ArticleList;
