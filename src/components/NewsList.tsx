
import React, { useState } from 'react';
import { NewsArticle } from '@/types/news';
import NewsCard from './NewsCard';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type NewsListProps = {
  articles: NewsArticle[];
  isLoading?: boolean;
};

const NewsList: React.FC<NewsListProps> = ({ articles, isLoading = false }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 12;
  
  if (isLoading) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indian-navy mx-auto"></div>
          <p className="mt-4 text-indian-navy">Loading the latest news...</p>
        </div>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <div className="text-center bg-gray-50 p-8 rounded-lg">
          <h3 className="text-xl font-medium text-gray-700">No articles found</h3>
          <p className="text-gray-500 mt-2">Try changing your filters or search query</p>
        </div>
      </div>
    );
  }
  
  // Calculate pagination
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
  
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top when page changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentArticles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
      
      {totalPages > 1 && (
        <Pagination className="my-8">
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
              </PaginationItem>
            )}
            
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;
              // Show first page, current page, last page, and one page before and after current
              if (
                pageNumber === 1 ||
                pageNumber === totalPages ||
                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
              ) {
                return (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      isActive={pageNumber === currentPage}
                      onClick={() => handlePageChange(pageNumber)}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                );
              } else if (
                (pageNumber === 2 && currentPage > 3) ||
                (pageNumber === totalPages - 1 && currentPage < totalPages - 2)
              ) {
                return (
                  <PaginationItem key={pageNumber}>
                    <span className="px-2">...</span>
                  </PaginationItem>
                );
              }
              return null;
            })}
            
            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default NewsList;
