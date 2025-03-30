
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import StateSelector from '@/components/StateSelector';
import CategoryFilter from '@/components/CategoryFilter';
import NewsList from '@/components/NewsList';
import TrendingTopics from '@/components/TrendingTopics';
import { mockNewsArticles, mockTrendingTopics } from '@/data/mockData';
import { NewsArticle } from '@/types/news';

const Index = () => {
  const [selectedState, setSelectedState] = useState("30"); // Default to "India"
  const [selectedCategory, setSelectedCategory] = useState("all"); // Default to "All"
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArticles, setFilteredArticles] = useState<NewsArticle[]>(mockNewsArticles);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      let filtered = [...mockNewsArticles];
      
      // Filter by state
      if (selectedState) {
        const stateName = selectedState === "30" ? "India" : 
          mockNewsArticles.find(article => article.state)?.state || "";
        filtered = filtered.filter(article => article.state === stateName);
      }
      
      // Filter by category
      if (selectedCategory && selectedCategory !== "all") {
        filtered = filtered.filter(article => article.category === selectedCategory);
      }
      
      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(article => 
          article.title.toLowerCase().includes(query) || 
          article.summary.toLowerCase().includes(query)
        );
      }
      
      setFilteredArticles(filtered);
      setIsLoading(false);
    }, 500);
  }, [selectedState, selectedCategory, searchQuery]);

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
              {selectedState === "30" ? "Top Headlines from India" : 
               `Top Headlines from ${mockNewsArticles.find(a => a.state !== "India")?.state || ""}`}
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
