
import React from 'react';
import { NewsArticle } from '@/types/news';
import NewsCard from './NewsCard';
import { ScrollArea } from '@/components/ui/scroll-area';

type NewsListProps = {
  articles: NewsArticle[];
  isLoading?: boolean;
};

const NewsList: React.FC<NewsListProps> = ({ articles, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indian-navy mx-auto"></div>
          <p className="mt-4 text-indian-navy">Loading articles...</p>
        </div>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center bg-gray-50 p-8 rounded-lg">
          <h3 className="text-xl font-medium text-gray-700">No articles found</h3>
          <p className="text-gray-500 mt-2">Try changing your filters or search query</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <NewsCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
