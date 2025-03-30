
import React from 'react';
import { NewsCategory, newsCategories } from '@/data/newsCategories';
import { cn } from '@/lib/utils';
import { 
  Newspaper, 
  Landmark, 
  Briefcase, 
  Cpu, 
  Film, 
  Trophy, 
  HeartPulse 
} from 'lucide-react';

type CategoryFilterProps = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onCategoryChange }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'newspaper':
        return <Newspaper className="h-5 w-5" />;
      case 'landmark':
        return <Landmark className="h-5 w-5" />;
      case 'briefcase':
        return <Briefcase className="h-5 w-5" />;
      case 'cpu':
        return <Cpu className="h-5 w-5" />;
      case 'film':
        return <Film className="h-5 w-5" />;
      case 'trophy':
        return <Trophy className="h-5 w-5" />;
      case 'heart-pulse':
        return <HeartPulse className="h-5 w-5" />;
      default:
        return <Newspaper className="h-5 w-5" />;
    }
  };

  return (
    <div className="flex flex-nowrap overflow-x-auto pb-2 gap-2 md:gap-3 no-scrollbar">
      {newsCategories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            "flex items-center px-3 py-2 rounded-full whitespace-nowrap transition-all",
            "hover:bg-gray-100 focus:outline-none",
            selectedCategory === category.id
              ? "bg-indian-navy text-white"
              : "bg-white text-gray-700 border border-gray-200"
          )}
        >
          <span className="mr-1.5">{getIcon(category.icon)}</span>
          <span className="text-sm font-medium">{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
