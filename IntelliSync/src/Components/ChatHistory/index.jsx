import React from 'react';
import ReactMarkdown from 'react-markdown';
import './chathistory.css';

const ChatHistory = ({ chatHistory }) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert('Copied to clipboard successfully!');
      },
      (err) => {
        console.error('Failed to copy text: ', err);
      }
    );
  };

  const reversedChatHistory = [...chatHistory].reverse();

  return (
    <div>
      {reversedChatHistory.map((entry, index) => (
        <div key={index} className={`message ${entry.type}`}>
          <ReactMarkdown>{entry.message}</ReactMarkdown>
          {entry.type === 'bot' && (
            <button
              className="copy-button"
              onClick={() => copyToClipboard(entry.message)}
            >
              Copy
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
