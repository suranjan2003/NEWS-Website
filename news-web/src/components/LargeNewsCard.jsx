import React from 'react';
import moment from 'moment';
import './styles.css';
import { FaThumbsUp, FaShareAlt } from 'react-icons/fa';

const LargeNewsCard = ({ article }) => {
  const { title, description, urlToImage, source, publishedAt, url } = article;

  return (
    <div className="news-card large-card flex mt-6 p-4 shadow-lg bg-white rounded-lg">
      {/* Cropped Image */}
      <div className="w-1/3">
        {(
          <img
            src={urlToImage || '/images/no-image.png'}
            alt={title}
            className="object-cover w-full h-64 rounded-md"  // Fixed height and aspect ratio for uniformity
          />
        )}
      </div>

      {/* Text Content Side by Side */}
      <div className="w-2/3 pl-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold">{(title=='[Removed]' || !title)? 'No title available':title}</h2>
          <p className="text-sm text-gray-600">{(description=='[Removed]' || !description)? 'No description available':description}</p>
          <a href={url || '#'} target="_blank" rel="noopener noreferrer" className="text-red-600 text-sm underline">
            Read More
          </a>
          <div className="text-xs text-gray-400">
            {(!source || source.name === '[Removed]') ? 'Unknown Source' : source.name} • {publishedAt ? moment(publishedAt).fromNow() : 'No date available'}
          </div>

          {/* Like and Share Buttons */}
        <div className="flex items-center justify-start mt-1 ml-1 space-x-3">
          <button className="flex items-center text-gray-600 hover:text-blue-500">
            <FaThumbsUp/>
          </button>
          <button className="flex items-center text-gray-600 hover:text-green-500">
            <FaShareAlt/>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default LargeNewsCard;
