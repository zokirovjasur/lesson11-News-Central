import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import NewsCard from "./NewsCard";

export default function News({ news, deleteNews, editNews }) {
  return (
    <motion.div
      className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence>
        {news.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <NewsCard
              newsItem={item}
              deleteNews={deleteNews}
              editNews={editNews}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
