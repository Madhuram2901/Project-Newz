import React, { useState } from 'react';
import { NewsArticle } from '@/types/news';
import { formatDistanceToNow } from 'date-fns';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, ExternalLink, RotateCw } from 'lucide-react';

type NewsCardProps = {
  article: NewsArticle;
};

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const [isFlipped, setIsFlipped] = useState(false);
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

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="h-[400px] perspective-1000">
      <div 
        className={`relative h-full transition-transform duration-1000 ease-in-out transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
        onClick={toggleFlip}
      >
        {/* Front of the card */}
        <Card className={`absolute w-full h-full backface-hidden overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in ${isFlipped ? 'invisible' : ''}`}>
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
            
            <h3 className="font-bold text-lg mb-3 line-clamp-2">{article.title}</h3>
            
            <div className="flex justify-between items-center mt-4">
              <span className="text-xs font-medium bg-gray-100 text-gray-800 px-2 py-1 rounded">
                {article.state}
              </span>
              
              <button 
                className="flex items-center text-indian-navy hover:text-indian-saffron transition-colors text-sm"
              >
                <span className="mr-1">Read details</span>
                <RotateCw className="h-4 w-4" />
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Back of the card */}
        <Card className={`absolute w-full h-full backface-hidden overflow-hidden p-4 rotate-y-180 bg-gray-50 ${isFlipped ? '' : 'invisible'}`}>
          <CardContent className="p-2 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <span className={`text-xs font-medium px-2 py-1 rounded ${getCategoryColor(article.category)}`}>
                {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
              </span>
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="h-3 w-3 mr-1" />
                <span>{timeAgo}</span>
              </div>
            </div>

            <h3 className="font-bold text-lg mb-3">{article.title}</h3>
            
            <div className="flex-grow mb-4">
              <p className="text-gray-700">{article.summary}</p>
            </div>
            
            <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-200">
              <button 
                onClick={toggleFlip} 
                className="flex items-center text-indian-navy hover:text-indian-saffron transition-colors text-sm"
              >
                Back to card
              </button>
              
              {article.url && (
                <a 
                  href={article.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indian-navy hover:underline flex items-center text-sm"
                >
                  Read full article <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NewsCard;
