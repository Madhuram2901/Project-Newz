
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import StateSelector from '@/components/StateSelector';
import CategoryFilter from '@/components/CategoryFilter';
import NewsList from '@/components/NewsList';
import TrendingTopics from '@/components/TrendingTopics';
import { mockTrendingTopics } from '@/data/mockData';
import { NewsArticle } from '@/types/news';
import { fetchNewsByState } from '@/services/newsService';
import { indianStates } from '@/data/statesList';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [selectedState, setSelectedState] = useState("30"); // Default to "India"
  const [selectedCategory, setSelectedCategory] = useState("all"); // Default to "All"
  const [searchQuery, setSearchQuery] = useState("");
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Get selected state name
  const getSelectedStateName = () => {
    return indianStates.find(state => state.id === selectedState)?.name || "India";
  };

  // Fetch news articles when state or category changes
  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const stateName = getSelectedStateName();
        const fetchedArticles = await fetchNewsByState(stateName, selectedCategory, 3);
        setArticles(fetchedArticles);
      } catch (error) {
        console.error("Failed to fetch news:", error);
        toast({
          title: "Error",
          description: "Failed to fetch news articles. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [selectedState, selectedCategory]);

  // Filter articles by search query
  useEffect(() => {
    if (!searchQuery) {
      setFilteredArticles(articles);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = articles.filter(article => 
      article.title.toLowerCase().includes(query) || 
      article.summary.toLowerCase().includes(query)
    );
    
    setFilteredArticles(filtered);
  }, [articles, searchQuery]);

  const handleStateChange = (stateId: string) => {
    setSelectedState(stateId);
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
          <StateSelector selectedState={selectedState} onStateChange={handleStateChange} />
          <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-4 text-indian-navy">
              {getSelectedStateName() === "India" 
                ? "Top Headlines from India" 
                : `Top Headlines from ${getSelectedStateName()}`}
              <span className="text-sm font-normal ml-2 text-gray-600">
                (Latest 30 articles from past 3 days)
              </span>
            </h2>
            <NewsList articles={filteredArticles} isLoading={isLoading} />
          </div>
          
          <div className="lg:col-span-1">
            <TrendingTopics topics={mockTrendingTopics} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
