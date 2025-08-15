"use client";

import Link from "next/link";
import {
  Briefcase,
  Cloud,
  Code,
  Github,
  Linkedin,
  Mail,
  Server,
  Smartphone,
  Twitter,
  Wrench,
  type LucideIcon,
  Target,
  ClipboardCheck,
  Share2,
  Users,
  Trophy,
  Palette,
  Lightbulb,
  Rocket,
  Scaling,
  Layers,
  BrainCircuit,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { AnimatedBackground } from "@/components/layout/animated-background";
import { motion } from "framer-motion";

const services: {
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
}[] = [
  {
    icon: Code,
    title: "Custom Web & Mobile Apps",
    slug: "custom-web-mobile-apps",
    description:
      "Beautiful, responsive, and high-performance applications tailored to your specific business needs.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description:
      "Creating intuitive and engaging user interfaces that provide a seamless user experience.",
  },
  {
    icon: Lightbulb,
    title: "Product Design",
    slug: "product-design",
    description:
      "From concept to launch, we design products that are not only beautiful but also solve real-world problems.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation Solutions",
    slug: "ai-automation-solutions",
    description:
      "Integrate cutting-edge AI to automate workflows, enhance efficiency, and unlock new capabilities.",
  },
  {
    icon: Briefcase,
    title: "Enterprise Software",
    slug: "enterprise-software",
    description:
      "Scalable and robust software solutions to streamline your complex business processes and operations.",
  },
  {
    icon: Server,
    title: "IT Infrastructure Consulting",
    slug: "it-infrastructure-consulting",
    description:
      "Expert guidance to design, implement, and manage a secure and efficient IT backbone for your company.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    description:
      "Leverage the power of the cloud with our migration, management, and optimization services.",
  },
  {
    icon: Smartphone,
    title: "Internal SaaS Products",
    slug: "internal-saas-products",
    description:
      "Innovative and profitable in-house software tools designed to solve niche industry problems.",
  },
  {
    icon: Wrench,
    title: "Ongoing Technical Support",
    slug: "ongoing-technical-support",
    description:
      "Reliable maintenance and support to ensure your systems are always running smoothly and securely.",
  },
  {
    icon: Target,
    title: "Digital Marketing",
    slug: "digital-marketing",
    description:
      "Data-driven strategies to boost your online presence, from SEO and PPC to content marketing.",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    slug: "project-management",
    description:
      "Agile and efficient project management to deliver your projects on time and within budget.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    slug: "social-media-management",
    description:
      "Engage your audience and grow your brand with our expert social media strategy and optimization.",
  },
  {
    icon: Users,
    title: "Training & Tech Bootcamps",
    slug: "training-tech-bootcamps",
    description:
      "Empowering the next generation of tech talent with our expert-led training programs and bootcamps.",
  },
  {
    icon: Trophy,
    title: "Hackathons & Events",
    slug: "hackathons-events",
    description:
      "Fostering innovation and collaboration through exciting and challenging tech events and hackathons.",
  },
];

const projects = [
  {
    slug: "alpha",
    title: "Project Alpha",
    description:
      "A cutting-edge data analytics platform for the finance industry.",
    image: "https://placehold.co/600x400.png",
    hint: "abstract tech",
    tags: ["Web App", "SaaS", "FinTech"],
  },
  {
    slug: "beta",
    title: "Project Beta",
    description:
      "A cross-platform mobile app for real-time logistics tracking.",
    image: "https://placehold.co/600x400.png",
    hint: "abstract network",
    tags: ["Mobile App", "Logistics"],
  },
  {
    slug: "gamma",
    title: "Project Gamma",
    description:
      "An enterprise resource planning (ERP) system for a major manufacturing client.",
    image: "https://placehold.co/600x400.png",
    hint: "modern office",
    tags: ["Enterprise", "Manufacturing"],
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CEO, Innovate Inc.",
    avatar: "https://placehold.co/100x100.png",
    hint: "woman portrait",
    quote:
      "ApexTek transformed our operations. Their expertise in cloud solutions was a game-changer for our business, improving our efficiency by over 40%.",
  },
  {
    name: "Michael Chen",
    title: "CTO, TechGurus",
    avatar: "https://placehold.co/100x100.png",
    hint: "man portrait",
    quote:
      "The custom web application they built for us is simply outstanding. It's intuitive, fast, and has received amazing feedback from our users. Highly recommended!",
  },
];

const startupBenefits = [
  {
    icon: Rocket,
    title: "MVP Development",
    description:
      "We help you launch your Minimum Viable Product quickly to test your ideas and gather crucial user feedback.",
  },
  {
    icon: Scaling,
    title: "Scalable Architecture",
    description:
      "Building a solid foundation is key. We design and implement scalable cloud infrastructure that grows with your business.",
  },
  {
    icon: Layers,
    title: "Dedicated Teams",
    description:
      "Get access to our expert developers, designers, and project managers who become a seamless extension of your team.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
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

export default function Home() {
  return (
    <div className="flex flex-col">
      <section
        id="hero"
        className="relative overflow-hidden py-20 text-center sm:py-32"
      >
        <AnimatedBackground />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container relative z-10 mx-auto px-4"
        >
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            ApexTek
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            IT Consulting & Software Development. We build modern solutions for
            ambitious businesses.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/calculator">Get a Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#contact">Contact Sales</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      <motion.section
        id="services"
        className="bg-background/50 py-20 sm:py-24"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
            From initial concept to final deployment, we provide the technical
            expertise you need to succeed.
          </p>
          <motion.div
            className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="h-full"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group h-full"
                >
                  <Card className="flex h-full flex-col glassmorphic glow-border transition-all group-hover:-translate-y-1 group-hover:shadow-lg">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="rounded-lg bg-accent p-3">
                        <service.icon className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-accent">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="projects"
        className="py-20 sm:py-24"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
            We are proud of the work we do. Here are some of our recent success
            stories.
          </p>
          <motion.div
            className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projects.map((project) => (
              <motion.div key={project.title} variants={itemVariants}>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group h-full block"
                >
                  <Card className="overflow-hidden glassmorphic glow-border h-full transition-all group-hover:-translate-y-1 group-hover:shadow-lg">
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
      </motion.section>

      <motion.section
        id="testimonials"
        className="bg-background/50 py-20 sm:py-24"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            What Our Clients Say
          </h2>
          <motion.div
            className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-2"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.name} variants={itemVariants}>
                <Card className="glassmorphic glow-border h-full">
                  <CardContent className="pt-6">
                    <blockquote className="italic text-muted-foreground">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardContent>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          data-ai-hint={testimonial.hint}
                        />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription>{testimonial.title}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="startups"
        className="py-20 sm:py-24"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Empowering Startups to Scale
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
            We partner with ambitious startups, providing the technical
            firepower to turn innovative ideas into market-leading products.
          </p>
          <motion.div
            className="mt-12 grid gap-8 md:grid-cols-3"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {startupBenefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className="h-full"
              >
                <Link href="/startups" className="group h-full">
                  <Card className="flex h-full flex-col text-center glassmorphic glow-border transition-all group-hover:-translate-y-1 group-hover:shadow-lg">
                    <CardHeader className="items-center">
                      <div className="rounded-lg bg-accent p-4">
                        <benefit.icon className="h-8 w-8 text-accent-foreground" />
                      </div>
                      <CardTitle className="text-xl mt-4">
                        {benefit.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{benefit.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="bg-background/50 py-20 sm:py-24"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Let's Build Together
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a project in mind? We'd love to hear from you. Fill out the
              form below to get in touch.
            </p>
          </div>
          <Card className="mx-auto mt-12 max-w-xl glassmorphic glow-border">
            <CardContent className="p-6">
              <form className="grid gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                </div>
                <Input placeholder="Subject" />
                <Textarea placeholder="Your Message" rows={5} />
                <Button type="submit" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </motion.section>
    </div>
  );
}
