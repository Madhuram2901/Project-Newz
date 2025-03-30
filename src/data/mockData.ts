
import { NewsArticle, TrendingTopic } from "@/types/news";
import { addDays, subDays, format } from "date-fns";

const today = new Date();
const yesterday = subDays(today, 1);
const twoDaysAgo = subDays(today, 2);
const threeDaysAgo = subDays(today, 3);

const formatDate = (date: Date) => {
  return format(date, "yyyy-MM-dd'T'HH:mm:ss'Z'");
};

export const mockNewsArticles: NewsArticle[] = [
  // All-India News
  {
    id: "1",
    title: "PM Announces New Infrastructure Development Plan for Rural Areas",
    summary: "The Prime Minister has announced a ₹15,000 crore plan to develop infrastructure in rural areas across India, focusing on roads, electricity, and internet connectivity.",
    source: "The Indian Express",
    author: "Rajesh Kumar",
    publishedAt: formatDate(today),
    imageUrl: "https://images.unsplash.com/photo-1618944913033-0cafe0991aab?q=80&w=1000",
    category: "politics",
    state: "India",
  },
  {
    id: "2",
    title: "RBI Keeps Repo Rate Unchanged at 6.5%",
    summary: "The Reserve Bank of India has decided to keep the repo rate unchanged at 6.5% for the fourth consecutive time, citing the need to control inflation.",
    source: "Economic Times",
    author: "Priya Sharma",
    publishedAt: formatDate(yesterday),
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000",
    category: "business",
    state: "India",
  },
  {
    id: "3",
    title: "Indian Tech Startups Raise $3.8 Billion in First Quarter",
    summary: "Indian technology startups have raised $3.8 billion in funding during the first quarter of the year, showing a 15% increase compared to the same period last year.",
    source: "TechCrunch India",
    author: "Vikram Patel",
    publishedAt: formatDate(twoDaysAgo),
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000",
    category: "technology",
    state: "India",
  },
  {
    id: "4",
    title: "Bollywood Box Office Hits Record High in Post-Pandemic Era",
    summary: "Bollywood films have recorded the highest box office collection in the post-pandemic era, with recent releases grossing over ₹2,000 crore collectively.",
    source: "Filmfare",
    author: "Ananya Singh",
    publishedAt: formatDate(threeDaysAgo),
    imageUrl: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1000",
    category: "entertainment",
    state: "India",
  },
  {
    id: "5",
    title: "India Wins T20 Series Against Australia 3-1",
    summary: "The Indian cricket team has won the T20 series against Australia with a 3-1 lead, with the final match to be played in Mumbai next week.",
    source: "ESPN Cricinfo",
    author: "Rahul Dravid",
    publishedAt: formatDate(today),
    imageUrl: "https://images.unsplash.com/photo-1628891890467-b79f2c8ba9dc?q=80&w=1000",
    category: "sports",
    state: "India",
  },
  
  // Maharashtra
  {
    id: "6",
    title: "Mumbai Metro Line 3 Phase One to Open Next Month",
    summary: "The first phase of Mumbai Metro Line 3, connecting Colaba to Bandra, is set to open next month after multiple delays.",
    source: "Mumbai Mirror",
    author: "Suresh Patel",
    publishedAt: formatDate(yesterday),
    imageUrl: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1000",
    category: "politics",
    state: "Maharashtra",
  },
  {
    id: "7",
    title: "Pune Tech Park Expansion Creating 15,000 New Jobs",
    summary: "The expansion of Pune's Hinjewadi IT Park is expected to create 15,000 new jobs in the technology sector over the next two years.",
    source: "Pune Times",
    author: "Amit Shah",
    publishedAt: formatDate(today),
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000",
    category: "business",
    state: "Maharashtra",
  },
  
  // Delhi
  {
    id: "8",
    title: "Delhi Government Launches Electric Bus Fleet",
    summary: "The Delhi Government has launched a fleet of 100 electric buses to reduce pollution in the capital city.",
    source: "Delhi Times",
    author: "Kiran Bedi",
    publishedAt: formatDate(twoDaysAgo),
    imageUrl: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1000",
    category: "politics",
    state: "Delhi",
  },
  {
    id: "9",
    title: "Air Quality Index Improves in Delhi After Recent Rainfall",
    summary: "Delhi's air quality has shown significant improvement following recent rainfall, with the AQI dropping below 100 for the first time in months.",
    source: "The Hindu",
    author: "Manish Kumar",
    publishedAt: formatDate(yesterday),
    imageUrl: "https://images.unsplash.com/photo-1593078165899-c7d2ac0d6aea?q=80&w=1000",
    category: "health",
    state: "Delhi",
  },
  
  // Karnataka
  {
    id: "10",
    title: "Bengaluru Tech Summit Attracts Global Investors",
    summary: "The annual Bengaluru Tech Summit has attracted investors from over 30 countries, with commitments of over $500 million for local startups.",
    source: "Bangalore Mirror",
    author: "Ravi Shankar",
    publishedAt: formatDate(today),
    imageUrl: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=1000",
    category: "technology",
    state: "Karnataka",
  },
  {
    id: "11",
    title: "Mysuru Dasara Festival Preparations Begin",
    summary: "Preparations for the annual Mysuru Dasara festival have begun, with the government allocating ₹50 crore for the celebrations.",
    source: "Deccan Herald",
    author: "Lakshmi Rao",
    publishedAt: formatDate(threeDaysAgo),
    imageUrl: "https://images.unsplash.com/photo-1621831714462-bec368ecb413?q=80&w=1000",
    category: "entertainment",
    state: "Karnataka",
  },
  
  // Tamil Nadu
  {
    id: "12",
    title: "Chennai Super Kings Begin Practice for Upcoming Season",
    summary: "The Chennai Super Kings cricket team has begun their practice sessions for the upcoming IPL season at the M.A. Chidambaram Stadium.",
    source: "Chennai Times",
    author: "M.S. Dhoni",
    publishedAt: formatDate(today),
    imageUrl: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000",
    category: "sports",
    state: "Tamil Nadu",
  },
  {
    id: "13",
    title: "Tamil Nadu Announces New Film City Project in Coimbatore",
    summary: "The Tamil Nadu government has announced a new Film City project in Coimbatore, expected to boost the local film industry and create jobs.",
    source: "The Hindu Tamil",
    author: "Rajinikanth",
    publishedAt: formatDate(twoDaysAgo),
    imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1000",
    category: "entertainment",
    state: "Tamil Nadu",
  },
  
  // Uttar Pradesh
  {
    id: "14",
    title: "Lucknow Metro Expansion Plan Approved",
    summary: "The Uttar Pradesh government has approved the expansion plan for Lucknow Metro, adding two new lines connecting the city's outer areas.",
    source: "Lucknow Times",
    author: "Yogi Adityanath",
    publishedAt: formatDate(yesterday),
    imageUrl: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?q=80&w=1000",
    category: "politics",
    state: "Uttar Pradesh",
  },
  {
    id: "15",
    title: "Varanasi's Tourism Sector Shows Strong Recovery",
    summary: "Varanasi's tourism sector has shown strong recovery post-pandemic, with tourist numbers reaching pre-pandemic levels in the last quarter.",
    source: "Tourism Times",
    author: "Ram Prakash",
    publishedAt: formatDate(threeDaysAgo),
    imageUrl: "https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=1000",
    category: "business",
    state: "Uttar Pradesh",
  },
  
  // Gujarat
  {
    id: "16",
    title: "Gujarat's Renewable Energy Capacity Crosses 15 GW",
    summary: "Gujarat has become the first state in India to cross 15 GW of renewable energy capacity, with solar power leading the way.",
    source: "Gujarat Times",
    author: "Narendra Modi",
    publishedAt: formatDate(today),
    imageUrl: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1000",
    category: "technology",
    state: "Gujarat",
  },
  {
    id: "17",
    title: "Ahmedabad Hosts International Kite Festival",
    summary: "The annual International Kite Festival in Ahmedabad has attracted participants from over 40 countries, showcasing colorful kites and cultural exchanges.",
    source: "Ahmedabad Mirror",
    author: "Amit Patel",
    publishedAt: formatDate(twoDaysAgo),
    imageUrl: "https://images.unsplash.com/photo-1531951657915-02db392f5cf1?q=80&w=1000",
    category: "entertainment",
    state: "Gujarat",
  },
  
  // West Bengal
  {
    id: "18",
    title: "Kolkata Metro's East-West Corridor Fully Operational",
    summary: "The East-West corridor of Kolkata Metro is now fully operational, connecting Salt Lake to Howrah and reducing travel time significantly.",
    source: "Kolkata Times",
    author: "Mamata Banerjee",
    publishedAt: formatDate(yesterday),
    imageUrl: "https://images.unsplash.com/photo-1580674684080-413ecb012da2?q=80&w=1000",
    category: "politics",
    state: "West Bengal",
  },
  {
    id: "19",
    title: "Bengal T20 League Announces New Format",
    summary: "The Bengal T20 League has announced a new format for the upcoming season, featuring eight teams from different districts of West Bengal.",
    source: "Sports Bengal",
    author: "Sourav Ganguly",
    publishedAt: formatDate(threeDaysAgo),
    imageUrl: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=1000",
    category: "sports",
    state: "West Bengal",
  },
  
  // Rajasthan
  {
    id: "20",
    title: "Jaipur Literature Festival Goes Hybrid This Year",
    summary: "The Jaipur Literature Festival will be held in a hybrid format this year, with both physical and virtual sessions featuring authors from around the world.",
    source: "Jaipur Times",
    author: "Vasundhara Raje",
    publishedAt: formatDate(today),
    imageUrl: "https://images.unsplash.com/photo-1597910037310-7dd8ddb93e24?q=80&w=1000",
    category: "entertainment",
    state: "Rajasthan",
  },
  {
    id: "21",
    title: "Rajasthan Announces New Solar Power Policy",
    summary: "Rajasthan has announced a new solar power policy to attract investments in the renewable energy sector, aiming to add 10 GW of solar capacity.",
    source: "Energy Times",
    author: "Ashok Gehlot",
    publishedAt: formatDate(twoDaysAgo),
    imageUrl: "https://images.unsplash.com/photo-1508001300512-31ff5509a04a?q=80&w=1000",
    category: "technology",
    state: "Rajasthan",
  },
];

export const mockTrendingTopics: TrendingTopic[] = [
  {
    id: "1",
    title: "General Elections 2024",
    description: "Updates, analysis, and results from India's ongoing general elections with focus on key battleground states.",
    count: 15600,
  },
  {
    id: "2",
    title: "Climate Change Impact",
    description: "Record-breaking temperatures across India leading to water shortages and health concerns in multiple states.",
    count: 12800,
  },
  {
    id: "3",
    title: "IPL 2024 Season",
    description: "Key highlights, match results, and player performances from the ongoing Indian Premier League cricket tournament.",
    count: 11200,
  },
  {
    id: "4",
    title: "Tech Layoffs",
    description: "Major IT companies in India announcing workforce reductions amid global economic uncertainty and AI integration.",
    count: 9400,
  },
  {
    id: "5",
    title: "New Education Policy",
    description: "Implementation challenges and benefits of India's new education policy across different states.",
    count: 7800,
  },
];
