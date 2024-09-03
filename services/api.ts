// services/api.ts
const API_URL = process.env.STRAPI_API_URL || "http://localhost:1337";

export interface Article {
  attributes: any;
  id: number; // Make sure this matches the type used in components
}

export interface ArticleAttributes {
  title: string;
  description: string;
}

export const fetchArticles = async (): Promise<Article[]> => {
  const response = await fetch(`${API_URL}/api/articles`);
  const data = await response.json();
  return data.data;
};

export const fetchArticleById = async (id: number): Promise<Article> => {
  const response = await fetch(`${API_URL}/api/articles/${id}`);
  const data = await response.json();
  return data;
};
