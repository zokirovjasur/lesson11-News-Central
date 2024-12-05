import React, { useState } from "react";
import { motion } from "framer-motion";

export default function NewsCard({ newsItem, deleteNews, editNews }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(newsItem.title);
  const [editedDescription, setEditedDescription] = useState(
    newsItem.description
  );
  const [editedAuthor, setEditedAuthor] = useState(newsItem.author);
  const [editedGenre, setEditedGenre] = useState(newsItem.genre);

  const handleEdit = () => {
    editNews(newsItem.id, {
      title: editedTitle,
      description: editedDescription,
      author: editedAuthor,
      genre: editedGenre,
    });
    setIsEditing(false);
  };

  return (
    <motion.div
      className="bg-white rounded-lg p-5 shadow-md border-2 border-gray-200 hover:border-indigo-400"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="w-full bg-gray-100 border-2 border-gray-100 rounded-lg p-2 mb-3 focus:ring-2 focus:ring-black"
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="w-full bg-gray-100 border-2 border-gray-100 rounded-lg p-2 mb-3 focus:ring-2 focus:ring-black"
            rows={3}
          ></textarea>
          <input
            type="text"
            value={editedAuthor}
            onChange={(e) => setEditedAuthor(e.target.value)}
            className="w-full bg-gray-100 border-2 border-gray-100 rounded-lg p-2 mb-3 focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            value={editedGenre}
            onChange={(e) => setEditedGenre(e.target.value)}
            className="w-full bg-gray-100 border-2 border-gray-100 rounded-lg p-2 mb-4 focus:ring-2 focus:ring-black"
          />
          <div className="flex justify-end space-x-3">
            <button
              onClick={() => setIsEditing(false)}
              className="bg-black hover:bg-green-900 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={handleEdit}
              className="bg-black hover:bg-green-900 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Save
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-lg font-bold text-black">{newsItem.title}</h3>
          <p className="text-black mb-2">{newsItem.description}</p>
          <p className="text-sm text-black">
            Author: <span className="text-black">{newsItem.author}</span>
          </p>
          <p className="text-sm text-black">
            Genre: <span className="text-black">{newsItem.genre}</span>
          </p>
          <div className="flex justify-end space-x-3 mt-4">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-900 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Edit
            </button>
            <button
              onClick={() => deleteNews(newsItem.id)}
              className="bg-red-900 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
}
