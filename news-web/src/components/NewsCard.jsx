import React from 'react';
import moment from 'moment';
import './styles.css';

const NewsCard = ({ article }) => {
    const { title, description, urlToImage, source, publishedAt, url } = article;

    return (
        <div className="news-card">
            {urlToImage && (
                <img
                    src={urlToImage}
                    alt={title}
                    className="object-cover"
                />
            )}
            <h2 className="text-base font-semibold">{(title=='[Removed]' || !title)? 'No title available':title}</h2>
            <p className="text-sm text-gray-600">{(description=='[Removed]' || !description)? 'No description available':description}</p>
            <a href={url || '#'} target="_blank" rel="noopener noreferrer" className="text-red-600 text-xs underline">
                Read More
            </a>

            <span className="text-xs text-gray-500">
            {(!source || source.name === '[Removed]') ? 'Unknown Source' : source.name} • {publishedAt ? moment(publishedAt).fromNow() : 'No date available'}
            </span>
        </div>
    );
};

export default NewsCard;

