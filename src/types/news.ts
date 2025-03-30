
export type NewsArticle = {
  id: string;
  title: string;
  summary: string;
  content?: string;
  source: string;
  author?: string;
  publishedAt: string;
  url?: string;
  imageUrl?: string;
  category: string;
  state: string;
};

export type TrendingTopic = {
  id: string;
  title: string;
  description: string;
  count: number;
};
