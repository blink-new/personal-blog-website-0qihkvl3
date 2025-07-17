import { Badge } from '@/components/ui/badge';
import { Category } from '@/types/blog';

interface CategoryTagsProps {
  categories: Category[];
  selectedCategory?: string;
  onCategorySelect: (category: string | null) => void;
}

const CategoryTags = ({ categories, selectedCategory, onCategorySelect }: CategoryTagsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge
        variant={!selectedCategory ? "default" : "outline"}
        className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
        onClick={() => onCategorySelect(null)}
      >
        All Posts
      </Badge>
      {categories.map((category) => (
        <Badge
          key={category.id}
          variant={selectedCategory === category.slug ? "default" : "outline"}
          className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
          onClick={() => onCategorySelect(category.slug)}
        >
          {category.name}
          <span className="ml-1 text-xs opacity-70">({category.count})</span>
        </Badge>
      ))}
    </div>
  );
};

export default CategoryTags;