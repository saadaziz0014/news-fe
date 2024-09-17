import { useState } from "react";
import "../App.css";
import Button from "./Button";
import News from "./News";
import { useCallback } from "react";
import axios from "axios";
import Loading from "./Loading";

export default function NewsList() {
  const [news, setNews] = useState();
  const [loading, setLoading] = useState(false);
  const getData = useCallback(async () => {
    try {
      setLoading(true);
      let data = await axios.get(import.meta.env.VITE_API_URL + "scrape");
      setNews(data.data);
      setLoading(false);
    } catch (error) {
      setNews([]);
      setLoading(false);
    }
  }, [news, setNews]);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <div className="news-button">
          <Button text="Load Data" onClick={getData} />
        </div>
        <div className="news-list">
          {news ? (
            news.map((item, index) => (
              <News
                key={index}
                title={item.title}
                url={item.url}
                text={item.text}
              />
            ))
          ) : (
            <p>No news found</p>
          )}
        </div>
      </>
    );
  }
}
