import React, { useState } from 'react';
import axios from 'axios';
// import './blogs.css'


const Note = () => {
    const [topic, setTopic] = useState('');
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState('');

    const fetchNews = async () => {
        setError(''); // Reset error state before fetching
        setArticles([]); // Clear previous articles
        try {
            // const response = await axios.post('http://localhost:5004/get_news', {
             const response = await axios.post('api/v1/get_news', {
                topic,
            });

            const articles = response.data.articles || []; // Ensure articles is an array
            setArticles(articles);
        } catch (err) {
            console.error('Fetch Error:', err); // Debug: Log fetch error
            setError('An error occurred while fetching the news');
        }
    };

    const downloadNews = async () => {
        try {
            // await axios.post('http://localhost:5004/download_news', {
            await axios.post('api/v1/download_news', {
                articles,
            }, {
                responseType: 'blob',
            }).then(response => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'news.csv');
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
            });
        } catch (err) {
            console.error('Download Error:', err); // Debug: Log download error
            setError('An error occurred while downloading the news');
        }
    };
    return (
        <div className='w-full sm:w-9/12  mx-auto p-5 h-90b overflow-x-scroll mb-0 scrollbar-hide'>
            <div>
                <div className='mb-1 w-full px-2 rounded-xl h-1 bg-gray-500'></div>
                <div className='font-extrabold text-2xl'>Retrieve a comprehensive collection of top-tier tech news articles.</div>
                <div className='mt-1 w-full px-2 rounded-xl h-1 bg-gray-500'></div>
            </div>
            <div className="mt-4 flex flex-col items-center gap-4">
                <div className="flex w-full rounded-lg bg-gray-100 shadow-md px-4 py-2 hover:shadow-lg">
                    <input
                        type="text"
                        placeholder="Enter topic"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full focus:outline-none text-white focus:border-sky-500 border border-gray-300 rounded-lg px-3 py-2"
                    />
                    <button onClick={fetchNews} className="ml-4 px-4 py-2 rounded-lg bg-sky-500 text-white hover:bg-sky-700">
                        Fetch News
                    </button>
                </div>
                {error && (
                    <p className="text-red-500 text-center">{error}</p>
                )}
                <ul className="list-none mt-4">
                    {Array.isArray(articles) && articles.map((article, index) => (
                        <li key={index} className="mb-4 hover:bg-gray-200 rounded-lg shadow-md px-4 py-2 transition-all duration-200">
                            <strong>Title:</strong> {article.title} <br />
                            <strong>Date:</strong> {article.date} <br />
                            <strong>Country:</strong> {article.country} <br />
                            <strong>Language:</strong> {article.language} <br />
                            <strong>Publisher:</strong> {article.publisher} <br />
                            <strong>Category:</strong> {article.category} <br />
                        </li>
                    ))}
                </ul>
                {Array.isArray(articles) && articles.length > 0 && (
                    <button
                        onClick={downloadNews}
                        className="px-4 py-2 rounded-lg bg-sky-500 text-white hover:bg-sky-700"
                    >
                        Download News
                    </button>
                )}
            </div>
        </div>
    )
};

export default Note
