import React from 'react';
import moment from 'moment';
import './styles.css';

const SmallNewsCard = ({ article }) => {
  const { title, description, urlToImage, source, publishedAt, url } = article;

  return (
    <div className="news-card small-card">
      {urlToImage && (
        <img src={urlToImage} alt={title} className="object-cover w-full h-64" />
      )}
      <div className="px-4 py-2">
        <h2 className="text-base font-semibold">{(title=='[Removed]' || !title)? 'No title available':title}</h2>
        <p className="text-sm text-gray-600">{(description=='[Removed]' || !description)? 'No description available':description}</p>
        <a href={url || '#'} target="_blank" rel="noopener noreferrer" className="text-red-600 text-xs underline block">
          Read More
        </a>
        <span className="text-xs text-gray-400">
          {(!source || source.name === '[Removed]') ? 'Unknown Source' : source.name} • {publishedAt ? moment(publishedAt).fromNow() : 'No date available'}
        </span>
      </div>
    </div>
  );
};

export default SmallNewsCard;
