import { Link } from 'react-router-dom';


const Article = ({article}) => {
    return (
        <Link>
        <article >
        <h3>{article.articletitle} </h3>
        <img src={`http://localhost:5000/${article.articlepicture}`} alt={article.articletitle} />
        <p >{article.articletext}</p>
        </article>
        </Link>
    )
}

export default Article