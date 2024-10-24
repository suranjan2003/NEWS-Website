import React from 'react';
import moment from 'moment';
import './styles.css';
import { FaThumbsUp, FaShareAlt } from 'react-icons/fa';

const SmallNewsCard = ({ article }) => {
  const { title, description, urlToImage, source, publishedAt, url } = article;

  return (
    <div className="news-card small-card">
      {(
        <img
        src={urlToImage || '/images/no-image.png'}
        alt={title}
        className="object-cover w-full h-56"
        />
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

        {/* Like and Share Buttons */}
        <div className="flex items-center justify-start mt-1 ml-1 space-x-4">
          <button className="flex items-center text-gray-600 hover:text-blue-500">
            <FaThumbsUp/>
          </button>
          <button className="flex items-center text-gray-600 hover:text-green-500">
            <FaShareAlt/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmallNewsCard;
