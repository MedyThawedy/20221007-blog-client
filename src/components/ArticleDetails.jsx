import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ArticleDetails = () => {

    let { articleid } = useParams();
    console.log('1. From Detail Page The id is this : ', articleid);
    const [articleDetail, setArticleDetail] = useState({});
   
    const url = `http://localhost:5000/details/${articleid}`;

    useEffect(() => {
        fetchDetails();
    }, []);

    const fetchDetails = () => {
    /*    const data = await fetch(url);
        const article = await data.json();
        console.log('2. From fetchDetail() ', article);
        setArticleDetail(article);
    */
        fetch("http://localhost:5000/details/d492a2ac")
        .then(res => res.json())
        .then(data => setArticleDetail(data));
        console.log('2. From fetchDetail() ', articleDetail);
    };
    console.log('3. articleDetail = ', articleDetail)
   

    return <>
      
    <Link to="/"><p >Click here to go back </p></Link>

    <h2 className='clsPopularMovies'>{articleDetail.id}</h2>
            
        <h3>{articleDetail.articletitle} </h3>
        <img src={`http://localhost:5000/${articleDetail.articlepicture}`} alt={articleDetail.articletitle} />
        <p >{articleDetail.articletext}</p>
        </>

}

export default ArticleDetails;
