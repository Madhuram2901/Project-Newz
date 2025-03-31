import { NewsArticle } from "@/types/news";
import { toast } from "sonner";

// Free news API options:
// - NewsAPI.org (limited to 100 requests/day on free plan)
// - GNews API (limited requests on free plan)
// - Contextual Web Search API

const API_KEY = "bd23990419b04b24a155231023ddc5db"; // Replace with your actual API key
const BASE_URL = "https://newsapi.org/v2";

export const fetchNewsByState = async (
  state: string,
  category?: string,
  days: number = 3
): Promise<NewsArticle[]> => {
  try {
    // Calculate date from 3 days ago
    const fromDate = new Date();
    fromDate.setDate(fromDate.getDate() - days);
    const fromDateString = fromDate.toISOString().split('T')[0];
    
    // For India overall or specific state
    const stateQuery = state === "India" ? "India" : `${state} India`;
    
    // Add category if specified
    const categoryQuery = category && category !== "all" ? ` ${category}` : "";
    
    const queryString = `${stateQuery}${categoryQuery}`;
    
    // Construct the URL with query parameters
    let url = `${BASE_URL}/everything?q=${encodeURIComponent(queryString)}&from=${fromDateString}&sortBy=publishedAt&apiKey=${API_KEY}&pageSize=30`;
    
    console.log(`Fetching news with query: ${queryString}`);
    
    // For demo/development purposes - return mock data if API key is not provided
    if (API_KEY === "YOUR_API_KEY_HERE") {
      console.warn("Using mock data - replace API_KEY with your actual API key for real data");
      return getMockNewsByState(state, category);
    }
    
    // Remove the API call from here and instead call your server endpoint
    const response = await fetch('/api/news', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ state, category, days }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch news");
    }
    
    const data = await response.json();
    
    // Map API response to our NewsArticle format
    return data.articles.map((article: any, index: number): NewsArticle => ({
      id: `${index}-${Date.now()}`,
      title: article.title,
      summary: article.description || "No description available",
      content: article.content,
      source: article.source.name,
      author: article.author,
      publishedAt: article.publishedAt,
      url: article.url,
      imageUrl: article.urlToImage,
      category: category || guessCategory(article.title, article.description),
      state: state
    })).slice(0, 30); // Ensure we only return top 30
    
  } catch (error) {
    console.error("Error fetching news:", error);
    toast.error("Failed to fetch news articles");
    return [];
  }
};

// Helper function to guess the category of an article based on title and description
const guessCategory = (title: string, description: string): string => {
  const text = `${title} ${description}`.toLowerCase();
  
  if (text.includes("politic") || text.includes("government") || text.includes("minister") || text.includes("election")) {
    return "politics";
  } else if (text.includes("business") || text.includes("economy") || text.includes("market") || text.includes("stock")) {
    return "business";
  } else if (text.includes("tech") || text.includes("software") || text.includes("digital") || text.includes("app")) {
    return "technology";
  } else if (text.includes("sport") || text.includes("cricket") || text.includes("football") || text.includes("game")) {
    return "sports";
  } else if (text.includes("movie") || text.includes("film") || text.includes("cinema") || text.includes("star")) {
    return "entertainment";
  } else if (text.includes("health") || text.includes("hospital") || text.includes("medical") || text.includes("disease")) {
    return "health";
  } else {
    return "general";
  }
};

// Fallback mock data function - returns filtered mock data based on state and category
const getMockNewsByState = (state: string, category?: string): NewsArticle[] => {
  // Import mock data here to avoid circular dependencies
  const { mockNewsArticles } = require("@/data/mockData");
  
  let filtered = [...mockNewsArticles];
  
  // Filter by state
  if (state && state !== "India") {
    filtered = filtered.filter(article => article.state === state);
  }
  
  // Filter by category
  if (category && category !== "all") {
    filtered = filtered.filter(article => article.category === category);
  }
  
  return filtered.slice(0, 30); // Return top 30 articles only
};

// Create a new server-side function to handle the API request
export const fetchNewsFromAPI = async (state: string, category?: string, days: number = 3) => {
  // ... existing code for API call ...
};
