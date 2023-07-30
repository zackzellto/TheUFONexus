import React, { useEffect, useState } from "react";
import axios from "axios";

interface NewsArticle {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
  source: { name: string };
}

const SimpleNewsCarousel: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [currentArticleIndex, setCurrentArticleIndex] = useState<number>(0);

  // Specify the sources you want to fetch from
  const sources = ["abc-news", "bbc-news", "the-verge"].join(",");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/news/");

        setArticles(res.data.articles);
      } catch (error) {
        console.error("Failed to fetch news", error);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArticleIndex((prevIndex) => {
        return (prevIndex + 1) % articles.length;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [articles]);

  if (articles.length === 0) return null;

  const currentArticle = articles[currentArticleIndex];

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <img
        className="h-48 w-full object-cover md:w-48"
        src={currentArticle.urlToImage}
        alt="Article image"
      />
      <h2 className="mt-4 text-xl font-bold">{currentArticle.title}</h2>
      <p className="mt-2">{currentArticle.description}</p>
      <a
        href={currentArticle.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        {currentArticle.source.name}
      </a>
    </div>
  );
};

export default SimpleNewsCarousel;
