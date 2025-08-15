import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';

const projects = {
  alpha: {
    title: 'Project Alpha',
    description: 'A cutting-edge data analytics platform designed to provide real-time financial insights. Our team developed a highly scalable architecture to process millions of data points per second.',
    image: 'https://placehold.co/1200x600.png',
    hint: 'abstract tech',
    tags: ['Web App', 'SaaS', 'FinTech', 'Data Analytics'],
    details: `<h3>The Challenge</h3>
<p>Our client, a leading financial services firm, needed a platform to visualize complex market data in real-time. Their existing solutions were slow, outdated, and unable to handle the increasing volume of data.</p>
<h3>Our Solution</h3>
<p>We built a custom web application from the ground up using a modern tech stack. Key features included interactive charts, a powerful filtering system, and customizable dashboards. We implemented a microservices architecture on a cloud platform to ensure high availability and scalability.</p>
<h3>The Result</h3>
<p>The new platform reduced data processing time by 95% and enabled traders to make faster, more informed decisions. It has become an indispensable tool for the client and set a new standard in their industry.</p>`,
  },
  beta: {
    title: 'Project Beta',
    description: 'A cross-platform mobile app for real-time logistics tracking.',
    image: 'https://placehold.co/1200x600.png',
    hint: 'abstract network',
    tags: ['Mobile App', 'Logistics', 'iOS', 'Android'],
    details: `<p>Details for Project Beta will be available soon.</p>`,
  },
  gamma: {
    title: 'Project Gamma',
    description: 'An enterprise resource planning (ERP) system for a major manufacturing client.',
    image: 'https://placehold.co/1200x600.png',
    hint: 'modern office',
    tags: ['Enterprise', 'Manufacturing'],
    details: `<p>Details for Project Gamma will be available soon.</p>`,
  },
  delta: {
    title: 'Project Delta',
    description: 'Cloud migration and infrastructure overhaul for a healthcare provider.',
    image: 'https://placehold.co/1200x600.png',
    hint: 'cloud servers',
    tags: ['Cloud', 'Healthcare', 'IT Consulting'],
    details: `<p>Details for Project Delta will be available soon.</p>`,
  },
  epsilon: {
    title: 'Project Epsilon',
    description: 'A consumer-facing e-commerce platform with a custom recommendation engine.',
    image: 'https://placehold.co/1200x600.png',
    hint: 'online shopping',
    tags: ['Web App', 'E-commerce'],
    details: `<p>Details for Project Epsilon will be available soon.</p>`,
  },
  zeta: {
    title: 'Project Zeta',
    description: 'A proprietary internal tool for automated code quality analysis.',
    image: 'https://placehold.co/1200x600.png',
    hint: 'code screen',
    tags: ['SaaS', 'Developer Tool'],
    details: `<p>Details for Project Zeta will be available soon.</p>`,
  },
};

type ProjectKey = keyof typeof projects;

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug as ProjectKey;
  const project = projects[slug];

  if (!project) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist.',
    };
  }
 
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 600,
          alt: project.title,
        },
      ],
    },
    twitter: {
        card: 'summary_large_image',
        title: project.title,
        description: project.description,
        // images: [project.image],
    }
  }
}


export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as ProjectKey];

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                {tag}
                </Badge>
            ))}
        </div>
        <div className="mt-8 overflow-hidden rounded-lg shadow-lg">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full object-cover"
            data-ai-hint={project.hint}
          />
        </div>
        <div
          className="prose prose-lg max-w-none mt-12 dark:prose-invert mx-auto"
          dangerouslySetInnerHTML={{ __html: project.details }}
        />
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}
