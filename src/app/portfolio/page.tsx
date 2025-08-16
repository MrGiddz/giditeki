
'use client'

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
  {
    slug: 'alpha',
    title: 'Project Alpha',
    description: 'A cutting-edge data analytics platform for the finance industry.',
    image: 'https://placehold.co/600x400.png',
    hint: 'abstract tech',
    tags: ['Web App', 'SaaS', 'FinTech'],
  },
  {
    slug: 'beta',
    title: 'Project Beta',
    description: 'A cross-platform mobile app for real-time logistics tracking.',
    image: 'https://placehold.co/600x400.png',
    hint: 'abstract network',
    tags: ['Mobile App', 'Logistics'],
  },
  {
    slug: 'gamma',
    title: 'Project Gamma',
    description: 'An enterprise resource planning (ERP) system for a major manufacturing client.',
    image: 'https://placehold.co/600x400.png',
    hint: 'modern office',
    tags: ['Enterprise', 'Manufacturing'],
  },
    {
    slug: 'delta',
    title: 'Project Delta',
    description: 'Cloud migration and infrastructure overhaul for a healthcare provider.',
    image: 'https://placehold.co/600x400.png',
    hint: 'cloud servers',
    tags: ['Cloud', 'Healthcare', 'IT Consulting'],
  },
  {
    slug: 'epsilon',
    title: 'Project Epsilon',
    description: 'A consumer-facing e-commerce platform with a custom recommendation engine.',
    image: 'https://placehold.co/600x400.png',
    hint: 'online shopping',
    tags: ['Web App', 'E-commerce'],
  },
  {
    slug: 'zeta',
    title: 'Project Zeta',
    description: 'A proprietary internal tool for automated code quality analysis.',
    image: 'https://placehold.co/600x400.png',
    hint: 'code screen',
    tags: ['SaaS', 'Developer Tool'],
  },
];

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


export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-20">
      <motion.div
        className="text-center"
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Our Portfolio
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Explore a selection of projects that showcase our expertise and commitment to quality.
        </p>
      </motion.div>

      <motion.div
        className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={listVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project) => (
          <motion.div key={project.slug} variants={itemVariants}>
            <Link href={`/portfolio/${project.slug}`} className="group">
              <Card className="overflow-hidden h-full glassmorphic glow-border">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="h-60 w-full object-cover"
                  data-ai-hint={project.hint}
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
