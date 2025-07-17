import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import ArticleCard from '@/components/blog/ArticleCard';
import CategoryTags from '@/components/blog/CategoryTags';
import { articles, categories } from '@/data/articles';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);
  
  const filteredArticles = selectedCategory
    ? regularArticles.filter(article => 
        article.category.toLowerCase() === selectedCategory
      )
    : regularArticles;

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Welcome to Our Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover insights, tutorials, and stories about technology, design, and development.
              Stay up-to-date with the latest trends and best practices in the industry.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-primary">Featured Articles</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  featured={true}
                />
              ))}
            </div>
          </section>
        )}

        <Separator className="my-12" />

        {/* Category Filter */}
        <section className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h2 className="text-3xl font-bold text-primary">Latest Articles</h2>
          </div>
          <CategoryTags
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
          />
        </section>

        {/* Articles Grid */}
        <section>
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No articles found in this category.
              </p>
            </div>
          )}
        </section>

        {/* Newsletter CTA */}
        <section className="mt-16 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Stay Updated
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest articles and insights delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
            <button className="px-6 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;