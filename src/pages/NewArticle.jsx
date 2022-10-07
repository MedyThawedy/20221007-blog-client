import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from 'uuid';

const NewArticle = () => {
    const [articleTitle, setArticletitle] = useState('');
    const [articlePic, setArticlePic] = useState(null);
    const [articleText, setArticletext] = useState('')
    const unique_id = uuid();
const item_id = unique_id.slice(0, 8);
    const nav = useNavigate();

    const sendData = () => {
        console.log('object');
        const form = new FormData();
        
        form.append('id', item_id)
        form.append('articletitle', articleTitle)
        form.append('articlepicture', articlePic)
        form.append('articletext', articleText)

        fetch('http://localhost:5000/articles', {
            method:'POST',
            body:form
        })
        .then(res => res.status === 200 ? nav('/'): null)
    }
    return (
        <main >
            <h1 >Write a new Article</h1>
            <div>
            <p>Title :</p>
                <input type="text" name="articletitle" id="" placeholder="Enter your article title"  onChange={(e) => setArticletitle(e.target.value)}/>
                <div>
                <p>Article picture</p>
                 <input type="file" name="articlepicture" id="articlepic" onChange={(e) => setArticlePic(e.target.files[0])}/>
                </div>
                <p>Text :</p>
                <textarea type="text" name="articletext" id="" placeholder="Enter your article text"  onChange={(e) => setArticletext(e.target.value)} rows="4" cols="50"/>
                <button onClick={sendData}>Publish</button>
                
            </div>

        </main>
    )
}

export default NewArticle;