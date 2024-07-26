import React, { useState } from 'react';
import axios from 'axios';
import './blogs.css';

const API_URL = 'https://newsapi.org/v2/everything';
const BLOG_API_KEY = process.env.REACT_APP_BLOG_API_KEY;

function Blogs() {
  const [topic, setTopic] = useState('');
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  const fetchNews = async () => {
    setError(''); // Reset error state before fetching
    setArticles([]); // Clear previous articles
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: topic,
          apiKey: BLOG_API_KEY,
          language: 'en',
        },
      });

      // Filter out articles without images and limit to top 10
      const articles = (response.data.articles || [])
        .filter(article => article.urlToImage)
        .slice(0, 20);
      setArticles(articles);
    } catch (err) {
      console.error('Fetch Error:', err); // Debug: Log fetch error
      setError('An error occurred while fetching the news');
    }
  };

  const downloadNews = async () => {
    const csvData = articles.map(article =>
      `${article.title || ''},${article.publishedAt || ''},${article.source.name || ''},${article.urlToImage || ''},${article.url || ''},${article.description || ''}`
    ).join('\n');

    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'news.csv');
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  return (
    <div className='w-full sm:w-9/12 mx-auto p-5 h-90b overflow-y-scroll scrollbar-hide'>
      <div className='mb-1 w-full px-2 rounded-xl h-1 bg-gray-500'></div>
      <h1 className='text-center text-4xl text-purple-500 font-extrabold'>News Fetcher</h1>
      <div className='mb-1 w-full px-2 rounded-xl h-1 bg-gray-500'></div>
      <div className='flex items-center justify-center mt-10'>
        <input
          className='text-black  bg-gray-100 px-2 py-2 rounded-lg drop-shadow-md'
          type="text"
          placeholder="Enter topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <button onClick={fetchNews} className='bg-purple-500 hover:bg-purple-400 px-6 py-2 text-white rounded-md drop-shadow-lg '>Fetch News</button>
      </div>
      {error && <p className="error">{error}</p>}
      <ul className='mt-10'>
        {Array.isArray(articles) && articles.map((article, index) => (
          <li key={index} className="article-item">
            {article.urlToImage && (
              <div className="article-image">
                <img src={article.urlToImage} alt="Article" />
              </div>
            )}
            <div className="article-content">
              <strong>Title:</strong> {article.title || 'N/A'} <br />
              <strong>Date:</strong> {new Date(article.publishedAt).toLocaleString() || 'N/A'} <br />
              <strong>Source:</strong> {article.source.name || 'N/A'} <br />
              <strong>Description:</strong> {article.description || 'N/A'} <br />
              <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          </li>
        ))}
      </ul>
      {Array.isArray(articles) && articles.length > 0 && <button className='bg-black px-6 py-1 text-white rounded-md' onClick={downloadNews}>Download News</button>}
    </div>
  );
}

export default Blogs;
