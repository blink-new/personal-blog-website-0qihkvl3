import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Share2, Heart, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { articles } from '@/data/articles';
import ArticleCard from '@/components/blog/ArticleCard';

const ArticleDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const relatedArticles = articles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  // Parse markdown-style content for basic formatting
  const parseContent = (content: string) => {
    return content
      .split('\n\n')
      .map((paragraph, index) => {
        if (paragraph.startsWith('# ')) {
          return (
            <h1 key={index} className="text-3xl font-bold text-primary mb-6 mt-8">
              {paragraph.substring(2)}
            </h1>
          );
        }
        if (paragraph.startsWith('## ')) {
          return (
            <h2 key={index} className="text-2xl font-semibold text-primary mb-4 mt-8">
              {paragraph.substring(3)}
            </h2>
          );
        }
        if (paragraph.startsWith('### ')) {
          return (
            <h3 key={index} className="text-xl font-medium text-primary mb-3 mt-6">
              {paragraph.substring(4)}
            </h3>
          );
        }
        if (paragraph.startsWith('```')) {
          return (
            <pre key={index} className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4">
              <code className="text-sm">{paragraph.replace(/```[a-z]*\n?/, '').replace(/```$/, '')}</code>
            </pre>
          );
        }
        if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
          const items = paragraph.split('\n').filter(item => item.startsWith('- ') || item.startsWith('* '));
          return (
            <ul key={index} className="list-disc pl-6 mb-4 space-y-2">
              {items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-muted-foreground">
                  {item.substring(2)}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
            {paragraph}
          </p>
        );
      });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-accent transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to articles
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Badge variant="outline">{article.category}</Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="w-4 h-4 mr-1" />
              {article.readTime} min read
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            {article.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            {article.excerpt}
          </p>
          
          {/* Author Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src={article.author.avatar} alt={article.author.name} />
                <AvatarFallback>
                  {article.author.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-primary">{article.author.name}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" />
                  {formatDate(article.publishedAt)}
                </div>
              </div>
            </div>
            
            {/* Social Actions */}
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                Like
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </header>
        
        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
        
        {/* Article Content */}
        <div className="prose max-w-none">
          {parseContent(article.content)}
        </div>
        
        {/* Tags */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-sm font-medium text-primary mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Author Bio */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={article.author.avatar} alt={article.author.name} />
                <AvatarFallback>
                  {article.author.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  About {article.author.name}
                </h3>
                <p className="text-muted-foreground">
                  {article.author.bio}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </article>
      
      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <ArticleCard
                  key={relatedArticle.id}
                  article={relatedArticle}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ArticleDetailPage;