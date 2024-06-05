import {useEffect, useState } from 'react'

import NewIteam from './NewIteam'

const News = () => {

    const [articles,setArticles] = useState([]);
    const apiKey = process.env.REACT_APP_API_KEY;


    console.log('API Key:', process.env.REACT_APP_API_KEY);

    useEffect(() =>{
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
        fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));
    },[])

    return (
       
            <div className="container my-3">
                <h2 className='text-center my-4'>NewsNectar - Top Headlines</h2>
                {articles.map((news,index)=>{
                    return <NewIteam keys={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
                })}

            </div>

       
    )
}

export default News;
