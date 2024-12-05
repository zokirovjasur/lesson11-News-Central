import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AnimatePresence, motion } from "framer-motion";
import Create from "./components/Create";
import News from "./components/News";

export default function App() {
  const [news, setNews] = useState([]);
  const [isCreating, setIsCreating] = useState(false);

  const addNews = (newItem) => {
    setNews([{ ...newItem, id: uuidv4() }, ...news]);
    setIsCreating(false);
  };

  const deleteNews = (id) => {
    setNews(news.filter((item) => item.id !== id));
  };

  const editNews = (id, updatedItem) => {
    setNews(
      news.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
    );
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 to-black min-h-screen p-8 font-sans">
      <h1 className="text-9xl md:text-6xl font-extrabold text-center mb-12 text-indigo-200">
        Manga News Central
      </h1>
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center items-center">
          <button
            onClick={() => setIsCreating(true)}
            className="w-full md:w-auto mb-8 bg-indigo-900 hover:bg-black text-white font-bold py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            New Manga News
          </button>
        </div>

        <AnimatePresence>
          {isCreating && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 10, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Create addNews={addNews} onCancel={() => setIsCreating(false)} />
            </motion.div>
          )}
        </AnimatePresence>
        <News news={news} deleteNews={deleteNews} editNews={editNews} />
      </div>
    </div>
  );
}
