import { useState } from 'react';
import '../App.css'
import Button from "./Button";
import News from "./News";
import { useCallback } from 'react';
import axios from 'axios';
import Loading from './Loading';

export default function NewsList() {
    const [news, setNews] = useState()
    const [loading, setLoading] = useState(false)
    const getData = useCallback(async () => {
        setLoading(true);
        let data = await axios.get(import.meta.env.VITE_API_URL + 'scrape');
        setNews(data.data);
        setLoading(false);
    }, [news, setNews])
    if (loading) {
        return <Loading />
    }
    else {
        return (
            <>
                <div className="news-button">
                    <Button text="Load Data" onClick={getData} />
                </div>
                <div className="news-list">
                    {news ? news.map((item, index) => (
                        <News key={index} title={item.title} url={item.url} text={item.text} />
                    )) : <h1>No News... Click Load Data</h1>}
                </div>
            </>
        )
    }
}