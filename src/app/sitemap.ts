import { MetadataRoute } from 'next';

const blogPosts = [
  { slug: 'cloud-migration-strategies', date: '2024-07-15' },
  { slug: 'saas-development-guide', date: '2024-07-01' },
  { slug: 'it-consulting-roi', date: '2024-06-20' },
];

const portfolioProjects = [
    { slug: 'alpha', date: '2024-07-10' },
    { slug: 'beta', date: '2024-06-15' },
    { slug: 'gamma', date: '2024-05-20' },
    { slug: 'delta', date: '2024-04-25' },
    { slug: 'epsilon', date: '2024-03-30' },
    { slug: 'zeta', date: '2024-02-18' },
];

const services = [
    'custom-web-mobile-apps', 'ui-ux-design', 'product-design', 'ai-automation-solutions', 'enterprise-software', 'it-infrastructure-consulting', 'cloud-solutions', 'internal-saas-products', 'ongoing-technical-support', 'digital-marketing', 'project-management', 'social-media-management', 'training-tech-bootcamps', 'hackathons-events'
]

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
     {
      url: `${siteUrl}/startups`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/calculator`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  const blogPostEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'never',
    priority: 0.7,
  }));

  const portfolioEntries: MetadataRoute.Sitemap = portfolioProjects.map((project) => ({
    url: `${siteUrl}/portfolio/${project.slug}`,
    lastModified: new Date(project.date),
    changeFrequency: 'never',
    priority: 0.6,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((serviceSlug) => ({
    url: `${siteUrl}/services/${serviceSlug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));


  return [...staticPages, ...blogPostEntries, ...portfolioEntries, ...serviceEntries];
}
