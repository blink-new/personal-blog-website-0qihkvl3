import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ArticleCard from '@/components/blog/ArticleCard';
import { categories, articles } from '@/data/articles';

const CategoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredArticles = selectedCategory
    ? articles.filter(article => 
        article.category.toLowerCase() === selectedCategory
      )
    : [];

  const selectedCategoryData = categories.find(cat => cat.slug === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Browse by Category
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our collection of articles organized by topics. Find exactly what you're looking for.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!selectedCategory ? (
          /* Categories Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const categoryArticles = articles.filter(article => 
                article.category.toLowerCase() === category.slug
              );
              const latestArticle = categoryArticles[0];
              
              return (
                <Card 
                  key={category.id} 
                  className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
                  onClick={() => setSelectedCategory(category.slug)}
                >
                  {latestArticle && (
                    <div className="relative overflow-hidden">
                      <img
                        src={latestArticle.image}
                        alt={category.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {category.name}
                        </h3>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                          {category.count} articles
                        </Badge>
                      </div>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {category.count} articles
                      </span>
                      <span className="text-accent hover:text-accent/80 text-sm font-medium group-hover:translate-x-1 transition-transform">
                        Explore →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          /* Selected Category Articles */
          <div>
            {/* Category Header */}
            <div className="mb-8">
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-accent hover:text-accent/80 mb-4 text-sm font-medium"
              >
                ← Back to all categories
              </button>
              
              {selectedCategoryData && (
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-2">
                    {selectedCategoryData.name}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {selectedCategoryData.description}
                  </p>
                  <Badge variant="outline">
                    {filteredArticles.length} articles
                  </Badge>
                </div>
              )}
            </div>
            
            {/* Articles Grid */}
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
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;