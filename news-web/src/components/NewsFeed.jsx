// NewsFeed.jsx
import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import NewsCard from './NewsCard';

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const apiKey = '0531fa2cea8743179afc526d48322bf3';
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
        );
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [apiKey]);

  const handlers = useSwipeable({
    onSwipedUp: () => setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length),
    onSwipedDown: () => setCurrentIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="news-feed" {...handlers}>
      {articles.length > 0 ? (
        <NewsCard article={articles[currentIndex]} />
      ) : (
        <p className='text-red-500'>Loading news...</p>
      )}
    </div>
  );
};

export default NewsFeed;
