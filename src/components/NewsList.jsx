import { useState } from 'react';
import '../App.css'
import Button from "./Button";
import News from "./News";
import { useCallback } from 'react';
import axios from 'axios';

export default function NewsList() {
    const [news, setNews] = useState()
    const getData = useCallback(async () => {
        let data = await axios.get(import.meta.env.VITE_API_URL + '/scrape');
        setNews(data.data)
    }, [news, setNews])
    return (
        <>
            <div className="news-button">
                <Button text="Load Data" onClick={getData} />
            </div>
            <div className="news-list">
                <News title="Title 1" url="https://example.com" text="Lorem ipsum" />
                <News title="Title 2" url="https://example.com" text="Lorem ipsum" />
                <News title="Title 3" url="https://example.com" text="Lorem ipsum" />
            </div>
        </>
    )
}