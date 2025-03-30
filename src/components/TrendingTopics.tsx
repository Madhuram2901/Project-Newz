
import React from 'react';
import { TrendingTopic } from '@/types/news';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

type TrendingTopicsProps = {
  topics: TrendingTopic[];
};

const TrendingTopics: React.FC<TrendingTopicsProps> = ({ topics }) => {
  return (
    <Card className="w-full animate-fade-in">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold flex items-center">
          <TrendingUp className="h-5 w-5 mr-2 text-indian-saffron" />
          Trending Topics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topics.map((topic, index) => (
            <div 
              key={topic.id} 
              className="flex items-start hover:bg-gray-50 p-2 rounded-lg transition-colors cursor-pointer"
            >
              <div className="flex-shrink-0 w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-sm font-medium text-gray-700">{index + 1}</span>
              </div>
              <div className="flex-grow">
                <h4 className="font-medium text-base flex items-center">
                  {topic.title}
                  <ArrowUpRight className="h-3.5 w-3.5 ml-1 text-indian-green" />
                </h4>
                <p className="text-sm text-gray-600 line-clamp-2">{topic.description}</p>
              </div>
              <div className="flex-shrink-0 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {topic.count.toLocaleString()} mentions
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TrendingTopics;
