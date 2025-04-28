
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Sample blog posts data
const blogPosts = [
  {
    id: '1',
    title: 'The Ancient Art of Basket Weaving in Northwest Cameroon',
    excerpt: 'Explore the rich tradition of basket weaving in the Northwest region of Cameroon, where skilled artisans have been passing down techniques for generations.',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    author: 'Marie Ndongo',
    authorImage: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    date: 'May 15, 2025',
    category: 'Culture',
    readTime: '5 min read',
  },
  {
    id: '2',
    title: 'Meet the Artisans: Emmanuel Njoka\'s Wood Carving Journey',
    excerpt: 'Emmanuel Njoka shares his journey from learning traditional wood carving techniques from his father to developing his own distinctive style, now recognized internationally.',
    image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f',
    author: 'Thomas Manga',
    authorImage: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f',
    date: 'April 23, 2025',
    category: 'Artisan Stories',
    readTime: '7 min read',
  },
  {
    id: '3',
    title: 'The Impact of Sustainable Crafts on Rural Economies',
    excerpt: 'How ArtisanConnect\'s platform is helping rural communities in Cameroon develop sustainable livelihoods through traditional craftsmanship.',
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a',
    author: 'Charlotte Eyong',
    authorImage: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a',
    date: 'April 10, 2025',
    category: 'Impact',
    readTime: '6 min read',
  },
  {
    id: '4',
    title: 'The Symbolism Behind Traditional Cameroonian Patterns',
    excerpt: 'Discover the meaning behind the intricate patterns found in Cameroonian textiles, pottery, and woodcarvings, and how they tell stories of cultural identity.',
    image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d',
    author: 'Paul Enow',
    authorImage: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d',
    date: 'March 28, 2025',
    category: 'Culture',
    readTime: '8 min read',
  },
];

const categories = [
  'All',
  'Culture',
  'Artisan Stories',
  'Impact',
  'Techniques',
  'Events',
];

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog & Stories</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore the stories of our artisans, learn about traditional crafting techniques, and discover the cultural heritage of Cameroon.
        </p>
      </div>
      
      {/* Featured Post */}
      <div className="mb-16">
        <Link to={`/blog/${blogPosts[0].id}`}>
          <div className="relative rounded-xl overflow-hidden aspect-[21/9]">
            <img 
              src={blogPosts[0].image} 
              alt={blogPosts[0].title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end text-white">
              <span className="bg-artisan-clay/90 text-white text-xs uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-3">
                {blogPosts[0].category}
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{blogPosts[0].title}</h2>
              <p className="md:text-lg mb-4 line-clamp-2 max-w-3xl">{blogPosts[0].excerpt}</p>
              <div className="flex items-center">
                <Avatar className="h-8 w-8 mr-2 border border-white">
                  <AvatarImage src={blogPosts[0].authorImage} alt={blogPosts[0].author} />
                  <AvatarFallback>{blogPosts[0].author[0]}</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <span className="font-medium">{blogPosts[0].author}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPosts[0].date}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      
      {/* Category Filters */}
      <div className="flex overflow-x-auto pb-4 mb-8 gap-2 -mx-1 px-1">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant={index === 0 ? "default" : "outline"}
            className={index === 0 ? "bg-artisan-clay hover:bg-artisan-clay/90" : ""}
            size="sm"
          >
            {category}
          </Button>
        ))}
      </div>
      
      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(1).map(post => (
          <Link to={`/blog/${post.id}`} key={post.id}>
            <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-md border-muted">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-xs uppercase tracking-wider text-artisan-clay font-medium">
                    {post.category}
                  </span>
                  <span className="mx-2 text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center mt-auto pt-4 border-t border-muted">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src={post.authorImage} alt={post.author} />
                    <AvatarFallback>{post.author[0]}</AvatarFallback>
                  </Avatar>
                  <div className="text-sm">
                    <span className="font-medium">{post.author}</span>
                    <div className="text-muted-foreground">{post.date}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="mt-12 flex justify-center">
        <Button variant="outline" className="mr-2">Previous</Button>
        <Button variant="outline" className="bg-artisan-clay text-white hover:bg-artisan-clay/90 hover:text-white mr-2">1</Button>
        <Button variant="outline" className="mr-2">2</Button>
        <Button variant="outline">Next</Button>
      </div>
    </div>
  );
};

export default Blog;
