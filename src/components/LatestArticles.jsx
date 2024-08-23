import React from "react";

const articles = [
  {
    title: "How to Use TradingView",
    author: "oneprobl4ckMild",
    date: "August 13, 2024",
    category: "Articles",
    image:
      "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Blog-06.jpg",
  },
  {
    title: "The Newest AI Stock Spike",
    author: "oneprobl4ckMild",
    date: "August 13, 2024",
    category: "Articles",
    image:
      "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Blog-04.jpg",
  },
  {
    title: "What to do in a slow market?",
    author: "oneprobl4ckMild",
    date: "August 13, 2024",
    category: "Articles",
    image:
      "https://traderoom.1onestrong.com/wp-content/uploads/2024/08/Blog-08.jpg",
  },
];

const ArticleCard = ({ article }) => (
  <div className="w-full md:w-[400px] mt-5 relative rounded-lg">
    <div className="h-72 w-full overflow-hidden rounded-t-lg relative">
      <img
        className="w-full h-full object-cover"
        src={article.image}
        alt={article.title}
      />
      <span className="absolute bottom-4 left-4 bg-white text-teal-900 text-sm font-semibold px-3 py-1">
        {article.category}
      </span>
    </div>
    <div className="py-4 px-4">
      <div className="font-bold text-2xl mb-2 text-teal-800">
        {article.title}
      </div>
      <p className="text-gray-500 text-base">
        {article.author} &bull; {article.date}
      </p>
    </div>
  </div>
);

const LatestArticles = () => {
  return (
    <div className="container mx-auto px-4 mt-20">
      <h2 className="text-4xl sm:text-3xl md:text-6xl ml-24 text-teal-950 font-bold mb-8">
        Our Latest Articles
      </h2>
      <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default LatestArticles;
