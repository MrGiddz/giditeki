import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  Cloud,
  Code,
  Layers,
  Lightbulb,
  Palette,
  Rocket,
  Scaling,
  Server,
  Share2,
  Smartphone,
  Target,
  Trophy,
  Users,
  Wrench,
  ClipboardCheck,
  BrainCircuit,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata, ResolvingMetadata } from 'next';

const servicesData = {
  'custom-web-mobile-apps': {
    icon: Code,
    title: 'Custom Web & Mobile Apps',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'web and mobile devices',
    tags: ['Web Development', 'Mobile Apps', 'React', 'Node.js'],
    shortDescription:
      'We build beautiful, responsive, and high-performance applications tailored to your specific business needs, from initial concept to final deployment.',
    details: `
      <h3>From Idea to Reality</h3>
      <p>Our team specializes in turning your vision into a reality. We handle the entire development lifecycle, ensuring a product that is not only functional but also scalable and secure. We use modern technologies to build applications that provide a seamless user experience across all devices.</p>
      
      <h3>Our Technology Stack</h3>
      <p>We leverage a powerful and flexible tech stack to deliver top-tier applications. Our expertise includes React & Next.js for front-end, Node.js for back-end, and a variety of databases like PostgreSQL and MongoDB. For mobile, we build cross-platform apps that work flawlessly on both iOS and Android.</p>
    `,
    keyBenefits: [
      'Tailored to your exact requirements.',
      'Optimized for performance and speed.',
      'Secure and scalable for future growth.',
      'Engaging and intuitive user interfaces.',
    ],
  },
  'ui-ux-design': {
    icon: Palette,
    title: 'UI/UX Design',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'user interface design sketch',
    tags: ['UI Design', 'UX Research', 'Prototyping', 'Figma'],
    shortDescription: 'We create stunning, intuitive, and user-centric designs that not only look good but also provide a seamless and enjoyable user experience.',
    details: `
      <h3>User-Centered Approach</h3>
      <p>Our design process is driven by a deep understanding of your users. We conduct thorough research and usability testing to create interfaces that are both beautiful and easy to use. The result is a product that your users will love and that drives engagement and conversions.</p>

      <h3>Collaborative and Iterative</h3>
      <p>We believe in a collaborative design process, working closely with you through every step. From wireframes and prototypes to the final visual design, we iterate based on feedback to ensure the final product aligns perfectly with your brand and business goals.</p>
    `,
    keyBenefits: [
        'Increased user engagement and retention.',
        'Improved brand perception.',
        'Higher conversion rates.',
        'Reduced development time and cost.',
    ],
  },
  'product-design': {
    icon: Lightbulb,
    title: 'Product Design',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'product design process board',
    tags: ['Product Strategy', 'MVP', 'User Research', 'Roadmapping'],
    shortDescription: 'We guide you through the entire product lifecycle, from initial concept and strategy to a successful launch and post-launch iteration.',
    details: `
      <h3>Strategic Product Thinking</h3>
      <p>Building a successful product goes beyond just design and development. We help you define your product strategy, identify your target audience, and create a roadmap for your Minimum Viable Product (MVP) and beyond. Our goal is to ensure your product solves real-world problems and achieves market fit.</p>

      <h3>Data-Informed Decisions</h3>
      <p>We use a combination of market research, user feedback, and analytics to make informed decisions throughout the product design process. This data-driven approach minimizes risks and maximizes the chances of building a product that resonates with your customers.</p>
    `,
    keyBenefits: [
        'Clear product vision and strategy.',
        'Faster time-to-market.',
        'Products that solve real user needs.',
        'A solid foundation for future growth.',
    ],
  },
  'ai-automation-solutions': {
    icon: BrainCircuit,
    title: 'AI & Automation Solutions',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'artificial intelligence brain',
    tags: ['AI Integration', 'Machine Learning', 'Workflow Automation', 'GenAI'],
    shortDescription: 'Integrate cutting-edge AI to automate workflows, enhance efficiency, and unlock new capabilities for your business.',
    details: `
      <h3>Unlocking AI Potential</h3>
      <p>Artificial intelligence is transforming industries. We help you harness the power of AI by integrating intelligent solutions into your existing workflow. From natural language processing to predictive analytics, we can build custom models or leverage state-of-the-art generative AI APIs to solve your most complex business challenges.</p>

      <h3>Streamlining with Automation</h3>
      <p>Repetitive tasks can slow down your team and stifle innovation. We identify opportunities for automation within your client services and internal processes. By automating these tasks, we help you reduce errors, improve response times, and free up your team to focus on high-value work that drives growth.</p>
    `,
    keyBenefits: [
      'Increase operational efficiency.',
      'Reduce manual errors and costs.',
      'Gain a competitive edge through innovation.',
      'Unlock data-driven insights for better decisions.',
    ],
  },
  'enterprise-software': {
    icon: Briefcase,
    title: 'Enterprise Software',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'enterprise software dashboard',
    tags: ['ERP', 'CRM', 'Scalability', 'Security'],
    shortDescription: 'We develop robust, scalable, and secure enterprise software solutions to streamline your complex business processes and operations.',
    details: `
      <h3>Solving Complex Challenges</h3>
      <p>Enterprise systems are the backbone of modern business. We build custom solutions, including ERP and CRM systems, that integrate seamlessly with your existing workflows, improving efficiency, reducing costs, and providing you with the data you need to make critical business decisions.</p>
      
      <h3>Security and Reliability First</h3>
      <p>We understand the critical importance of security and reliability in enterprise applications. Our development process adheres to the highest security standards, and we design our systems for high availability to ensure your operations are never disrupted.</p>
    `,
    keyBenefits: [
      'Streamlined business operations.',
      'Improved data accuracy and accessibility.',
      'Enhanced security and compliance.',
      'Scalable to support your growth.',
    ],
  },
  'it-infrastructure-consulting': {
    icon: Server,
    title: 'IT Infrastructure Consulting',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'server room',
    tags: ['IT Strategy', 'Cybersecurity', 'Network Design', 'DevOps'],
    shortDescription: 'Our experts provide guidance to design, implement, and manage a secure, efficient, and scalable IT backbone for your company.',
    details: `
      <h3>A Blueprint for Success</h3>
      <p>Your IT infrastructure is the foundation of your digital operations. We help you create a strategic blueprint that aligns with your business goals. From network design to cybersecurity planning, we ensure your infrastructure is robust, secure, and ready for the future.</p>

      <h3>Embracing DevOps and Automation</h3>
      <p>We help you implement modern DevOps practices and automation to accelerate your development cycles, improve deployment quality, and reduce operational overhead. This allows your team to focus on innovation rather than manual, repetitive tasks.</p>
    `,
    keyBenefits: [
      'Reduced operational costs.',
      'Increased system reliability and uptime.',
      'Improved security posture.',
      'Faster delivery of new features and services.',
    ],
  },
  'cloud-solutions': {
    icon: Cloud,
    title: 'Cloud Solutions',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'cloud infrastructure diagram',
    tags: ['AWS', 'Google Cloud', 'Azure', 'Migration'],
    shortDescription: 'Leverage the full power of the cloud with our expert migration, management, and optimization services.',
    details: `
      <h3>Seamless Cloud Migration</h3>
      <p>Moving to the cloud can be complex. Our team provides a proven methodology for a smooth and efficient migration, whether you are rehosting, replatforming, or refactoring your applications. We minimize downtime and ensure a seamless transition for your users.</p>

      <h3>Cost Optimization and Management</h3>
      <p>The cloud offers significant cost-saving potential, but only if managed effectively. We help you implement cost management tools, set up budgets and alerts, and continuously optimize your resource usage to ensure you're getting the most value out of your cloud investment.</p>
    `,
    keyBenefits: [
      'Enhanced scalability and flexibility.',
      'Significant cost savings.',
      'Improved disaster recovery and business continuity.',
      'Access to cutting-edge cloud services.',
    ],
  },
    'internal-saas-products': {
    icon: Smartphone,
    title: 'Internal SaaS Products',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'software interface on screen',
    tags: ['SaaS', 'Product Development', 'Innovation', 'B2B'],
    shortDescription: 'We conceptualize, build, and launch innovative and profitable in-house software tools designed to solve niche industry problems.',
    details: `
      <h3>From Concept to Market</h3>
      <p>Have a great idea for a SaaS product? We have the expertise to take it from a simple concept to a market-ready solution. We handle everything from market research and validation to development, deployment, and ongoing support, allowing you to focus on your business.</p>

      <h3>Building for a Niche</h3>
      <p>The most successful SaaS products often serve a specific niche. We help you identify and understand your target market, ensuring that the product we build is perfectly tailored to their needs and workflows, which is key to driving adoption and creating a loyal customer base.</p>
    `,
    keyBenefits: [
      'Create new revenue streams for your business.',
      'Solve specific problems for a targetted audience.',
      'Build a valuable and scalable asset.',
      'Full-cycle product development support.',
    ],
  },
  'ongoing-technical-support': {
    icon: Wrench,
    title: 'Ongoing Technical Support',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'customer support agent',
    tags: ['Maintenance', 'Support', 'Monitoring', 'Security'],
    shortDescription: 'Our reliable maintenance and support services ensure your systems are always running smoothly, securely, and efficiently.',
    details: `
      <h3>Proactive Monitoring and Maintenance</h3>
      <p>We don't just wait for things to break. Our team proactively monitors your systems to identify and address potential issues before they impact your business. We handle all routine maintenance, updates, and security patches to keep your applications in top shape.</p>
      
      <h3>Your Dedicated Support Team</h3>
      <p>When you partner with us, you get a dedicated team of experts who are familiar with your systems and business. Whether you have a simple question or a critical issue, we are here to provide prompt and effective support when you need it most.</p>
    `,
    keyBenefits: [
      'Minimized downtime and business disruption.',
      'Improved system security and performance.',
      'Access to a dedicated team of experts.',
      'Peace of mind knowing your systems are in good hands.',
    ],
  },
  'digital-marketing': {
    icon: Target,
    title: 'Digital Marketing',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'digital marketing analytics dashboard',
    tags: ['SEO', 'PPC', 'Content Marketing', 'Analytics'],
    shortDescription: 'We use data-driven strategies to boost your online presence, from SEO and PPC to content marketing and conversion rate optimization.',
    details: `
      <h3>A Holistic Approach to Growth</h3>
      <p>Digital marketing is more than just running ads. We take a holistic approach, combining search engine optimization (SEO), pay-per-click (PPC) advertising, and content marketing to create a comprehensive strategy that drives sustainable growth for your business.</p>

      <h3>Data-Driven for Maximum ROI</h3>
      <p>We track, measure, and analyze every aspect of your campaigns. This data-driven approach allows us to continuously optimize your strategy, ensuring that your marketing budget is spent effectively and delivers the maximum possible return on investment (ROI).</p>
    `,
    keyBenefits: [
      'Increased website traffic and lead generation.',
      'Improved brand visibility and awareness.',
      'Higher search engine rankings.',
      'Measurable and transparent results.',
    ],
  },
  'project-management': {
    icon: ClipboardCheck,
    title: 'Project Management',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'project plan on board',
    tags: ['Agile', 'Scrum', 'JIRA', 'Communication'],
    shortDescription: 'Our agile and efficient project management methodologies ensure we deliver your projects on time, within budget, and to the highest quality standards.',
    details: `
      <h3>Agile and Transparent</h3>
      <p>We embrace Agile methodologies like Scrum to deliver projects in an iterative and flexible manner. This approach allows for continuous feedback and adaptation, ensuring the final product aligns with your evolving needs. You get full transparency into our progress through regular updates and access to our project management tools.</p>

      <h3>Your Success is Our Priority</h3>
      <p>A dedicated project manager will be your single point of contact, ensuring clear communication and a smooth development process. Their job is to remove roadblocks, manage resources, and ensure that your project is a resounding success from start to finish.</p>
    `,
    keyBenefits: [
      'On-time and on-budget project delivery.',
      'Transparent and collaborative process.',
      'Flexibility to adapt to changing requirements.',
      'A single point of contact for clear communication.',
    ],
  },
  'social-media-management': {
    icon: Share2,
    title: 'Social Media Management',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'social media icons on phone',
    tags: ['Content Creation', 'Community Management', 'Social Ads'],
    shortDescription: 'We help you engage your audience, build a strong community, and grow your brand with our expert social media strategy and execution.',
    details: `
      <h3>Building Your Brand's Voice</h3>
      <p>We work with you to develop a unique and authentic voice for your brand on social media. We create and curate high-quality content that resonates with your target audience, tells your story, and drives meaningful engagement.</p>

      <h3>Community and Growth</h3>
      <p>Social media is a two-way conversation. We actively manage your community, responding to comments, fostering discussions, and building relationships with your followers. We also run targeted ad campaigns to expand your reach and attract new customers.</p>
    `,
    keyBenefits: [
      'Increased brand awareness and loyalty.',
      'A strong and engaged online community.',
      'Higher website traffic from social channels.',
      'Effective and targeted social ad campaigns.',
    ],
  },
  'training-tech-bootcamps': {
    icon: Users,
    title: 'Training & Tech Bootcamps',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'classroom with students learning',
    tags: ['Corporate Training', 'Web Development', 'Data Science'],
    shortDescription: 'We empower the next generation of tech talent and upskill your existing team with our expert-led, hands-on training programs.',
    details: `
      <h3>Corporate and Individual Training</h3>
      <p>Whether you're looking to upskill your internal team on the latest technologies or an individual looking to launch a new career in tech, we have a program for you. Our courses are designed and taught by industry experts with real-world experience.</p>

      <h3>Hands-On, Project-Based Learning</h3>
      <p>We believe the best way to learn is by doing. Our bootcamps are intensive and project-based, giving you the practical skills and portfolio you need to succeed in the tech industry. You'll work on real-world projects and graduate with a strong foundation and a network of peers.</p>
    `,
    keyBenefits: [
      'Close the skills gap in your organization.',
      'Launch a new, high-demand career.',
      'Learn from experienced industry professionals.',
      'Gain practical, hands-on experience.',
    ],
  },
    'hackathons-events': {
    icon: Trophy,
    title: 'Hackathons & Events',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'people collaborating at hackathon',
    tags: ['Innovation', 'Community', 'Collaboration', 'Sponsorship'],
    shortDescription: 'We foster innovation, collaboration, and community by organizing and hosting exciting and challenging tech events and hackathons.',
    details: `
      <h3>Driving Innovation</h3>
      <p>Hackathons are a powerful way to spark innovation and solve complex challenges in a short amount of time. We organize both public and private hackathons for companies looking to generate new ideas, prototype products, and engage with the tech community.</p>

      <h3>Building Community</h3>
      <p>Beyond hackathons, we host a variety of tech events, from workshops and meetups to large-scale conferences. These events provide a platform for learning, networking, and collaboration, strengthening the tech ecosystem for everyone.</p>
    `,
    keyBenefits: [
      'Source innovative ideas and solutions.',
      'Engage with and recruit top tech talent.',
      'Increase brand visibility in the tech community.',
      'Foster a culture of collaboration and creativity.',
    ],
  },
};

type ServiceKey = keyof typeof servicesData;

// Add slug property to each service
const servicesWithSlugs = Object.entries(servicesData).reduce((acc, [slug, service]) => {
  acc[slug as ServiceKey] = { ...service, slug };
  return acc;
}, {} as Record<ServiceKey, (typeof servicesData)[ServiceKey] & { slug: string }>);

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug as ServiceKey;
  const service = servicesData[slug];

  if (!service) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist.',
    };
  }
 
  return {
    title: service.title,
    description: service.shortDescription,
    openGraph: {
      title: service.title,
      description: service.shortDescription,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 600,
          alt: service.title,
        },
      ],
    },
    twitter: {
        card: 'summary_large_image',
        title: service.title,
        description: service.shortDescription,
        // images: [service.image],
    }
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesWithSlugs[params.slug as ServiceKey];

  if (!service) {
    notFound();
  }

  const otherServices = Object.values(servicesWithSlugs)
    .filter(s => s.title !== service.title)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-12 sm:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <article className="lg:col-span-2">
            <header className="mb-8">
                <div className="flex flex-wrap justify-start gap-2 mb-4">
                    {service.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                        {tag}
                        </Badge>
                    ))}
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl !mb-4">
                    {service.title}
                </h1>
                <p className="text-lg text-muted-foreground">{service.shortDescription}</p>
            </header>
            <div className="my-8 overflow-hidden rounded-lg shadow-lg">
                <Image
                    src={service.image}
                    alt={service.title}
                    width={1200}
                    height={600}
                    className="w-full object-cover"
                    data-ai-hint={service.imageHint}
                />
            </div>
            <div className="prose prose-lg max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: service.details }} />

            <div className="mt-12 rounded-lg bg-card p-8 shadow-lg glow-border">
                <h3 className="text-2xl font-bold text-primary mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                    {service.keyBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                            <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
            <div className="rounded-lg bg-card p-6 shadow-lg glow-border">
                <h3 className="text-xl font-bold text-primary mb-4">Ready to Start?</h3>
                <p className="text-muted-foreground mb-6">Let's discuss how our {service.title.toLowerCase()} service can help you achieve your goals.</p>
                <Button asChild size="lg" className="w-full">
                    <Link href="/#contact">Get In Touch <ArrowRight className="ml-2" /></Link>
                </Button>
            </div>
             <div className="rounded-lg bg-card p-6 shadow-lg glow-border">
                <h3 className="text-xl font-bold text-primary mb-4">Other Services</h3>
                <div className="space-y-4">
                    {otherServices.map((other) => (
                        <Link key={other.slug} href={`/services/${other.slug}`} className="group block">
                            <div className="flex items-center gap-4 group-hover:bg-muted p-2 rounded-md transition-colors">
                                <div className="rounded-lg bg-accent p-2">
                                    <other.icon className="h-5 w-5 text-accent-foreground" />
                                </div>
                                <div>
                                    <p className="font-semibold text-primary group-hover:text-accent">{other.title}</p>
                                    <p className="text-sm text-muted-foreground line-clamp-2">{other.shortDescription}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}
