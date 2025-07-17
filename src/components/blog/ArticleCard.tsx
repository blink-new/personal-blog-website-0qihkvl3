import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Article } from '@/types/blog';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const ArticleCard = ({ article, featured = false }: ArticleCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (featured) {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
        <div className="relative">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-white/90 text-primary">
              Featured
            </Badge>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex items-center space-x-2 mb-3">
            <Badge variant="outline">{article.category}</Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="w-4 h-4 mr-1" />
              {article.readTime} min read
            </div>
          </div>
          
          <Link to={`/article/${article.slug}`} className="group">
            <h2 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
              {article.title}
            </h2>
          </Link>
          
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={article.author.avatar} alt={article.author.name} />
                <AvatarFallback>
                  {article.author.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-primary">{article.author.name}</p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3 mr-1" />
                  {formatDate(article.publishedAt)}
                </div>
              </div>
            </div>
            
            <Link
              to={`/article/${article.slug}`}
              className="text-accent hover:text-accent/80 flex items-center text-sm font-medium group"
            >
              Read more
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group h-full">
      <div className="relative">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-5 flex flex-col h-full">
        <div className="flex items-center space-x-2 mb-3">
          <Badge variant="outline" className="text-xs">{article.category}</Badge>
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="w-3 h-3 mr-1" />
            {article.readTime} min
          </div>
        </div>
        
        <Link to={`/article/${article.slug}`} className="group flex-1">
          <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">
            {article.title}
          </h3>
        </Link>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center space-x-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src={article.author.avatar} alt={article.author.name} />
              <AvatarFallback className="text-xs">
                {article.author.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-xs font-medium text-primary">{article.author.name}</p>
              <div className="flex items-center text-xs text-muted-foreground">
                <Calendar className="w-3 h-3 mr-1" />
                {formatDate(article.publishedAt)}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;