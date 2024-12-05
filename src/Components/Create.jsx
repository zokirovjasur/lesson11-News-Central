import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Create({ addNews, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && author && genre) {
      addNews({ title, description, author, genre });
      setTitle("");
      setDescription("");
      setAuthor("");
      setGenre("");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-xl p-6 mb-8 border-2 border-indigo-100"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <input
        type="text"
        placeholder="Manga Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full bg-gray-100 text-gray-800 border-2 border-gray-100 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-black focus:outline-none"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full bg-gray-100 text-gray-800 border-2 border-gray-100 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-black focus:outline-none"
        rows={4}
      ></textarea>
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="w-full bg-gray-100 text-gray-800 border-2 border-gray-100 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-black focus:outline-none"
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="w-full bg-gray-100 text-gray-800 border-2 border-gray-100 rounded-lg p-3 mb-6 focus:ring-2 focus:ring-black focus:outline-none"
      />
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="bg-black  text-white font-semibold py-2 px-4 rounded-lg transition transform hover:scale-105"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-black  text-white font-semibold py-2 px-4 rounded-lg transition transform hover:scale-105"
        >
          Add Manga News
        </button>
      </div>
    </motion.form>
  );
}
