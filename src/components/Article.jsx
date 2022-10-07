import { Link } from 'react-router-dom';


const Article = ({article}) => {

    console.log('-  From Component Article | article.id = ', article.id)

    return (
        
        <article >
        <Link key={article.id} to={`/details/${article.id}`}>
        <h3>{article.articletitle} </h3>
        <img src={`http://localhost:5000/${article.articlepicture}`} alt={article.articletitle} />  </Link>
      <div>  <p >{article.articletext}</p></div>
        </article>
      
    )
}

export default Article