import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
// import './Chatbot.css';
import ChatHistory from '../Components/ChatHistory';
import Loading from '../Components/Loading';

const Chat = () => {

    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const genAI = new GoogleGenerativeAI(
        "AIzaSyC7Pc206cVIylHyuVU4xLR6hWCZdYy1Txk"
    );
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    };

    const sendMessage = async () => {
        if (userInput.trim() === '') return;

        setIsLoading(true);
        try {
            const result = await model.generateContent(userInput);
            const response = await result.response;
            setChatHistory([
                ...chatHistory,
                { type: 'user', message: userInput },
                { type: 'bot', message: await response.text() },
            ]);
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setUserInput('');
            setIsLoading(false);
        }
    };

    const clearChat = () => {
        setChatHistory([]);
    };


    return (
        <div className='w-full sm:w-9/12  mx-auto p-5 h-90b overflow-x-scroll mb-0 scrollbar-hide'>
            <div>
                <div className='mb-1 w-full px-2 rounded-xl h-1 bg-gray-500'></div>
                <div className='font-extrabold text-3xl text-purple-500 text-center'>Lost in thoughts? AI navigates your queries</div>
                <div className='mt-1 w-full px-2 rounded-xl h-1 bg-gray-500'></div>
            </div>
            <div>
                <div className="container mx-auto px-4 py-8">

                    <div className="flex mt-4">
                        <input
                            type="text"
                            className="flex-grow px-4 py-2 rounded-lg border text-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Type your message..."
                            value={userInput}
                            onChange={handleUserInput}
                        />
                        <button
                            className="px-4 py-2 ml-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
                            onClick={sendMessage}
                            disabled={isLoading}
                        >
                            Send
                        </button>
                    </div>
                    <button
                        className="mt-4 block px-4 py-2 rounded-lg bg-gray-400 text-white hover:bg-gray-500 focus:outline-none"
                        onClick={clearChat}
                    >
                        Clear Chat
                    </button>
                    <div className="chat-container rounded-lg shadow-md p-4 mt-4">
                        <ChatHistory chatHistory={chatHistory} />
                        <Loading isLoading={isLoading} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
