import React from 'react';
import { Link } from 'react-router-dom';

const Sheet = () => {
    const weeks = [
        {
            id: 1,
            name: "Arrays",
            problems: [
                { id: 101, name: 'Set Matrix Zeros', difficulty: 'Medium', isDone: false, queslink: "https://leetcode.com/problems/set-matrix-zeroes/" },
                { id: 102, name: 'Pascals Triangle', difficulty: 'Easy', isDone: false, queslink: "" },
                { id: 103, name: 'Next Permutation', difficulty: 'Medium', isDone: false, queslink: "" },
                { id: 104, name: 'Kadanes Algorithm', difficulty: 'Medium', isDone: false, queslink: "" },
                { id: 105, name: 'Sort an array of 0s, 1s and 2s', difficulty: 'Medium', isDone: false, queslink: "" },
                { id: 106, name: 'Stock Buy and Sell', difficulty: 'Easy', isDone: false, queslink: "" },
            ]
        },
        {
            id: 2,
            name: "LinkedList",
            problems: [
                { id: 201, name: 'Reverse a LinkedList', difficulty: 'Easy', isDone: false, queslink: "" },
                { id: 202, name: 'Find middle of LinkedList', difficulty: 'Easy', isDone: false, queslink: "" },
                { id: 203, name: 'Merge two sorted Linked Lists', difficulty: 'Medium', isDone: false, queslink: "" },
                { id: 204, name: 'Remove N-th node from back of LinkedList', difficulty: 'Medium', isDone: false, queslink: "" },
                { id: 205, name: 'Add two numbers as LinkedList', difficulty: 'Medium', isDone: false, queslink: "" },
                { id: 206, name: 'Delete a given Node when a node is given', difficulty: 'Easy', isDone: false, queslink: "" },
            ]
        },
        {

            id: 3,
            name: "Binary Trees",
            problems: [
                { id: 301, name: 'Inorder Traversal', difficulty: 'Easy', isDone: false, queslink: "" },
                { id: 302, name: 'Preorder Traversal', difficulty: 'Easy', isDone: false, queslink: "" },
                { id: 303, name: 'Postorder Traversal', difficulty: 'Easy', isDone: false, queslink: "" },
                { id: 304, name: 'Level Order Traversal', difficulty: 'Medium', isDone: false, queslink: "" },
                { id: 305, name: 'Height of Binary Tree', difficulty: 'Easy', isDone: false, queslink: "" },
                { id: 306, name: 'Diameter of Binary Tree', difficulty: 'Medium', isDone: false, queslink: "" },
            ]

        },
        {

            id: 4,
            name: "Graph",
            problems: [
                { id: 301, name: 'Topological Sort', difficulty: 'Easy', isDone: false, queslink: "" },
                { id: 302, name: 'Dijkstra Algorithm', difficulty: 'Easy', isDone: false, queslink: "" },
                { id: 303, name: 'Prim Algorithm', difficulty: 'Easy', isDone: false, queslink: "" },
                { id: 304, name: 'Bridges in Graph', difficulty: 'Medium', isDone: false, queslink: "" },
                { id: 305, name: 'Articulation Point', difficulty: 'Easy', isDone: false, queslink: "" },
                { id: 306, name: 'Biparitte Graph', difficulty: 'Medium', isDone: false, queslink: "" },
            ]

        },
        {

            id: 5,
            name: "Dynamic Programming",
            problems: [
                { id: 301, name: 'Coin Change', difficulty: 'Easy', isDone: false, queslink: "" },
                { id: 302, name: 'Knapsack Problem', difficulty: 'Easy', isDone: false, queslink: "" },
                { id: 303, name: 'Maximal Square', difficulty: 'Easy', isDone: false, queslink: "" },
                { id: 304, name: 'Longest Increasing Subsequence', difficulty: 'Medium', isDone: false, queslink: "" },
                { id: 305, name: 'Partition Equal Subset Sum', difficulty: 'Easy', isDone: false, queslink: "" },
                { id: 306, name: 'Longest Palindromic Substring', difficulty: 'Medium', isDone: false, queslink: "" },
            ]

        }
    ];

    return (
        <div className="bg-slate-900 text-white p-6 h-90b overflow-y-scroll">
            {weeks.map((week) => (
                <div key={week.id} className="mb-12">
                    <h2 className="text-xl font-bold mb-4 text-white">Week {week.id}: {week.name}</h2>
                    <div className="bg-gray-800 p-4 rounded-md mb-6">
                        <div className="flex justify-between items-center">
                            <span className="text-sm">Your Progress: 0/6</span>
                            <span className="text-red-500 text-sm">0% complete</span>
                            <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded transition duration-300">
                                Show Revision
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left bg-gray-800 text-gray-400 text-xs uppercase">
                                    <th className="p-3 font-semibold">Status</th>
                                    <th className="p-3 font-semibold">Problem</th>
                                    <th className="p-3 font-semibold">Article</th>
                                    <th className="p-3 font-semibold">YouTube</th>
                                    <th className="p-3 font-semibold">Practice</th>
                                    <th className="p-3 font-semibold">Difficulty</th>
                                    <th className="p-3 font-semibold">Revision</th>
                                </tr>
                            </thead>
                            <tbody>
                                {week.problems.map((problem) => (
                                    <tr key={problem.id} className="border-b border-gray-700 hover:bg-gray-800 transition duration-200">
                                        <td className="p-3">
                                            <input type="checkbox" checked={problem.isDone} onChange={() => { }} className="form-checkbox h-5 w-5 text-red-500 rounded border-gray-600 bg-gray-700 focus:ring-red-500" />
                                        </td>
                                        <td className="p-3 font-medium">{problem.name}</td>
                                        <Link to="/community">
                                            <td className="p-3">
                                                <button className="text-gray-400 hover:text-white transition duration-200">📄</button>
                                            </td>
                                        </Link>
                                        <td className="p-3">
                                            <button className="text-red-500 hover:text-red-400 transition duration-200">▶️</button>
                                        </td>
                                        <Link to={problem.queslink}>
                                            <td className="p-3">
                                                <button className="text-yellow-500 hover:text-yellow-400 transition duration-200">💻</button>
                                            </td>
                                        </Link>
                                        <td className="p-3">
                                            <span className={`px-2 py-1 rounded text-xs font-medium ${problem.difficulty === 'Easy' ? 'bg-green-800 text-green-300' : 'bg-yellow-800 text-yellow-300'
                                                }`}>
                                                {problem.difficulty}
                                            </span>
                                        </td>
                                        <td className="p-3">
                                            <button className="text-gray-400 hover:text-yellow-400 transition duration-200">⭐</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Sheet
