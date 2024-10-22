// NewsCard.jsx
import React from 'react';
import moment from 'moment';
import './styles.css';

const NewsCard = ({ article }) => {
    const { title, description, urlToImage, source, publishedAt, url } = article;

    return (
        <div className="news-card">
            <div>
                {urlToImage && (
                    <img
                        src={urlToImage}
                        alt={title}
                        className="object-cover"
                    />
                )}
            </div>
            <div className='px-4'>
                <h2 className="text-base font-semibold py-2">{(title=='[Removed]' || !title)? 'No title available':title}</h2>
                <p className="text-sm text-gray-600">{(description=='[Removed]' || !description)? 'No description available':description}</p>
                <a href={url || '#'} target="_blank" rel="noopener noreferrer" className="text-red-600 text-xs underline block">
                    Read More
                </a>

                <span className="text-xs text-gray-500">
                {(!source || source.name === '[Removed]') ? 'Unknown Source' : source.name} • {publishedAt ? moment(publishedAt).fromNow() : 'No date available'}
                </span>
            </div>
        </div>
    );
};

export default NewsCard;

