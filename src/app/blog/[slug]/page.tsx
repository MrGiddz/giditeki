import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import type { Metadata, ResolvingMetadata } from 'next';

const blogPosts = {
  'cloud-migration-strategies': {
    title: '5 Essential Cloud Migration Strategies for 2024',
    description: 'A successful cloud migration requires careful planning. Discover 5 essential strategies to guide your journey.',
    date: 'July 15, 2024',
    author: 'Jane Doe',
    authorTitle: 'Lead Cloud Architect',
    authorAvatar: 'https://placehold.co/100x100.png',
    authorAvatarHint: 'woman portrait',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'cloud infrastructure',
    tags: ['Cloud', 'Strategy', 'IT Consulting'],
    content: `
      <p class="lead">Migrating your business operations to the cloud is a significant undertaking that can yield tremendous benefits in scalability, efficiency, and cost savings. However, a successful migration requires careful planning and execution. Here are five essential strategies to guide your journey in 2024.</p>
      
      <h4>1. Comprehensive Assessment and Planning</h4>
      <p>Before you move a single byte of data, conduct a thorough assessment of your current IT environment. Identify dependencies between applications, understand data flows, and evaluate your security posture. This information will form the basis of a detailed migration plan that outlines timelines, resources, and potential risks.</p>

      <h4>2. Choose the Right Migration Strategy (The "6 R's")</h4>
      <p>There's no one-size-fits-all approach. Choose from the six common migration strategies: Rehosting ("lift and shift"), Replatforming ("lift and reshape"), Repurchasing, Refactoring, Retaining, and Retiring. The right choice depends on your business goals, application architecture, and budget.</p>

      <h4>3. Prioritize Security from Day One</h4>
      <p>Security should not be an afterthought. Integrate security best practices into every stage of the migration process. This includes identity and access management (IAM), data encryption both at rest and in transit, and continuous monitoring of your new cloud environment.</p>

      <h4>4. Focus on Cost Optimization</h4>
      <p>The cloud offers the potential for significant cost savings, but only if managed correctly. Implement cost management tools, set budgets and alerts, and regularly review your usage to identify opportunities for optimization, such as right-sizing instances and using reserved instances for predictable workloads.</p>

      <h4>5. Train Your Team and Foster a Cloud-First Culture</h4>
      <p>Your people are your most valuable asset. Invest in training to equip your IT team with the necessary cloud skills. Foster a culture that embraces cloud-native development and operations (DevOps) to fully leverage the agility and innovation that the cloud enables.</p>
    `,
  },
  'saas-development-guide': {
    title: 'The Ultimate Guide to Building a Scalable SaaS Product',
    description: 'From architecture to monetization, learn the essential steps for developing a successful SaaS application.',
    date: 'July 1, 2024',
    author: 'John Smith',
    authorTitle: 'Principal Engineer',
    authorAvatar: 'https://placehold.co/100x100.png',
    authorAvatarHint: 'man portrait',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'software architecture',
    tags: ['SaaS', 'Development', 'Web App'],
    content: `<p>Content for this blog post is coming soon.</p>`,
  },
  'it-consulting-roi': {
    title: 'Maximizing ROI with an IT Consulting Partnership',
    description: 'Discover how a strategic IT consulting partnership can drive innovation and deliver a significant return on investment.',
    date: 'June 20, 2024',
    author: 'Emily White',
    authorTitle: 'Senior Consultant',
    authorAvatar: 'https://placehold.co/100x100.png',
    authorAvatarHint: 'woman portrait professional',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'business meeting',
    tags: ['IT Consulting', 'ROI', 'Business'],
    content: `<p>Content for this blog post is coming soon.</p>`,
  },
};

type PostKey = keyof typeof blogPosts;

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug as PostKey;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist.',
    };
  }
 
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 600,
          alt: post.title,
        },
      ],
    },
    twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.description,
        // images: [post.image],
    }
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as PostKey];

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 sm:py-20">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
                {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                    {tag}
                    </Badge>
                ))}
            </div>
          <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl !mb-4">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 mt-6 text-muted-foreground">
             <Avatar>
                <AvatarImage src={post.authorAvatar} alt={post.author} data-ai-hint={post.authorAvatarHint}/>
                <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
                <p className="font-semibold text-primary">{post.author}</p>
                <p className="text-sm">{post.authorTitle} • {post.date}</p>
            </div>
          </div>
        </header>
        <div className="my-12 overflow-hidden rounded-lg shadow-lg">
            <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={600}
                className="w-full object-cover"
                data-ai-hint={post.imageHint}
            />
        </div>
        <div className="prose prose-lg max-w-none dark:prose-invert mx-auto" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}
