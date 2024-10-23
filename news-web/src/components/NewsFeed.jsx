// NewsFeed.jsx
// const apiKey = '0531fa2cea8743179afc526d48322bf3';
import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import SmallNewsCard from './SmallNewsCard';
import LargeNewsCard from './LargeNewsCard';

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  const apiKey = '0531fa2cea8743179afc526d48322bf3'; // Update this with your actual API key.

  // Fetch articles on load
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

  // Check screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Swiping configuration for smaller devices
  const handlers = useSwipeable({
    onSwipedUp: () => setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length),
    onSwipedDown: () => setCurrentIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="news-feed" {...(isSmallScreen ? handlers : {})}>
      {articles.length > 0 ? (
        isSmallScreen ? (
          <SmallNewsCard article={articles[currentIndex]} />
        ) : (
          articles.map((article, index) => (
            <LargeNewsCard key={index} article={article} />
          ))
        )
      ) : (
        <p className="text-red-500">Loading news...</p>
      )}
    </div>
  );
};

export default NewsFeed;
