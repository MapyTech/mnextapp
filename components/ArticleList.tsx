import React from "react";
import { Article } from "../services/api";

interface ArticleListProps {
  articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  if (!Array.isArray(articles)) {
    console.log(articles, "No articles to display");
    return <div>No articles to display</div>;
  }

  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.attributes.title}</h2>
          <p>{article.attributes.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
