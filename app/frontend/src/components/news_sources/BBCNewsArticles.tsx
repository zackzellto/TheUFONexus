import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsAccordion from "../accordions/NewsAccordion";

interface NewsArticle {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
  source: {
    name: string;
  };
}

const BBCNewsArticles: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=yourapikey"
        );
        setArticles(res.data.articles);
        const intervalId = setInterval(() => {
          setCurrentArticleIndex(
            (prevIndex) => (prevIndex + 1) % articles.length
          );
        }, 3000);
        return () => clearInterval(intervalId);
      } catch (error) {
        console.error("Failed to fetch news", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      {articles.map((article, index) => (
        <NewsAccordion
          key={index}
          title={article.title}
          description={article.description}
          urlToImage={article.urlToImage}
          sourceName={article.source.name} // pass sourceName here
          url={article.url}
          isVisible={index === currentArticleIndex}
        />
      ))}
    </div>
  );
};

export default BBCNewsArticles;
