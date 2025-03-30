
import React from 'react';
import { NewsArticle } from '@/types/news';
import { formatDistanceToNow } from 'date-fns';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, ExternalLink } from 'lucide-react';

type NewsCardProps = {
  article: NewsArticle;
};

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const timeAgo = formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true });
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'politics':
        return 'bg-blue-100 text-blue-800';
      case 'business':
        return 'bg-green-100 text-green-800';
      case 'technology':
        return 'bg-purple-100 text-purple-800';
      case 'entertainment':
        return 'bg-pink-100 text-pink-800';
      case 'sports':
        return 'bg-orange-100 text-orange-800';
      case 'health':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in">
      {article.imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 p-2">
            <span className={`text-xs font-medium px-2 py-1 rounded ${getCategoryColor(article.category)}`}>
              {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
            </span>
          </div>
        </div>
      )}

      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">{article.source}</span>
          <div className="flex items-center text-xs text-gray-500">
            <Clock className="h-3 w-3 mr-1" />
            <span>{timeAgo}</span>
          </div>
        </div>
        
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{article.title}</h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{article.summary}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium bg-gray-100 text-gray-800 px-2 py-1 rounded">
            {article.state}
          </span>
          
          {article.url && (
            <a 
              href={article.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indian-navy hover:underline flex items-center text-sm"
            >
              Read more <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
