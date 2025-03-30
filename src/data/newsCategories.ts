
export type NewsCategory = {
  id: string;
  name: string;
  icon: string;
};

export const newsCategories: NewsCategory[] = [
  { id: "all", name: "All", icon: "newspaper" },
  { id: "politics", name: "Politics", icon: "landmark" },
  { id: "business", name: "Business", icon: "briefcase" },
  { id: "technology", name: "Technology", icon: "cpu" },
  { id: "entertainment", name: "Entertainment", icon: "film" },
  { id: "sports", name: "Sports", icon: "trophy" },
  { id: "health", name: "Health", icon: "heart-pulse" },
];
