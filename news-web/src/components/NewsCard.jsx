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
                    className="object-cover rounded-lg"
                />
            )}
            <h2 className="text-base font-semibold">{title}</h2>
            <p className="text-sm text-gray-600">{description}</p>
            <span className="text-xs text-gray-500">
                {source.name} • {moment(publishedAt).fromNow()}
            </span>
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-xs underline"
            >
                Read More
            </a>
        </div>
    );
};

export default NewsCard;

