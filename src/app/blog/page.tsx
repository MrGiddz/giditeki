'use client';

import { generateBlogPost } from '@/ai/flows/generate-blog-post';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Lightbulb, Loader2 } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    slug: 'cloud-migration-strategies',
    title: '5 Essential Cloud Migration Strategies for 2024',
    description: 'Migrating to the cloud can be complex. Here are five key strategies to ensure a smooth and successful transition for your business.',
    date: 'July 15, 2024',
  },
  {
    slug: 'saas-development-guide',
    title: 'The Ultimate Guide to Building a Scalable SaaS Product',
    description: 'From architecture to monetization, we cover the essential steps and best practices for developing a successful SaaS application.',
    date: 'July 1, 2024',
  },
   {
    slug: 'it-consulting-roi',
    title: 'Maximizing ROI with an IT Consulting Partnership',
    description: 'Learn how strategic IT consulting can drive innovation, improve efficiency, and deliver a significant return on investment.',
    date: 'June 20, 2024',
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};


function BlogIdeaGenerator() {
  const [topic, setTopic] = React.useState('');
  const [ideas, setIdeas] = React.useState<string[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) {
      toast({
        variant: 'destructive',
        title: 'Topic is required',
        description: 'Please enter a topic to generate ideas.',
      });
      return;
    }
    setIsLoading(true);
    setIdeas([]);
    try {
      const result = await generateBlogPost({ topic });
      setIdeas(result.blogPostIdeas);
    } catch (error) {
      console.error('Blog post generation error:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to generate blog post ideas.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-muted">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb />
          Blog Post Idea Generator
        </CardTitle>
        <CardDescription>
          Stuck on what to write? Enter a topic and let our AI help you out.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
          <Input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., 'Cybersecurity for small businesses'"
            disabled={isLoading}
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Generate Ideas
          </Button>
        </form>
        {ideas.length > 0 && (
          <div className="mt-6">
            <h4 className="font-semibold">Here are some ideas:</h4>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {ideas.map((idea, index) => (
                <li key={index}>{idea}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-20">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Apex Digital Blog
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Insights on technology, software development, and IT strategy.
        </p>
      </motion.div>

      <motion.div
        className="mt-12 max-w-4xl mx-auto grid gap-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl mb-8">
            Latest Articles
          </h2>
          <motion.div
            className="grid gap-8"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {blogPosts.map((post) => (
              <motion.div key={post.slug} variants={itemVariants}>
                <Link href={`/blog/${post.slug}`} className="group">
                  <Card className="transition-all group-hover:shadow-lg glassmorphic glow-border">
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-accent">
                        {post.title}
                      </CardTitle>
                      <CardDescription>{post.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{post.description}</p>
                    </CardContent>
                     <CardFooter>
                      <span className="text-sm font-medium text-accent">Read more →</span>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div
          className="mt-8"
          variants={itemVariants}
        >
           <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl mb-8">
            Content Tools
          </h2>
          <BlogIdeaGenerator />
        </motion.div>

      </motion.div>
    </div>
  );
}
