'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Layers, Rocket, Scaling, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const features = [
  {
    icon: Rocket,
    title: 'Rapid MVP Development',
    description:
      'We specialize in building Minimum Viable Products (MVPs) quickly and efficiently. Our agile approach allows you to get your core product to market, test your assumptions, and gather crucial user feedback without a massive upfront investment. We focus on the essential features that deliver immediate value, providing a solid foundation to iterate and build upon.',
  },
  {
    icon: Scaling,
    title: 'Scalable Cloud Architecture',
    description:
      'Your startup needs to be ready for growth. We design and implement robust, scalable cloud infrastructure from day one. By leveraging services from AWS, Google Cloud, and Azure, we ensure your application can handle traffic spikes, manage growing data loads, and scale seamlessly as your user base expands, all while optimizing for cost-effectiveness.',
  },
  {
    icon: Layers,
    title: 'Dedicated Product Teams',
    description:
      'Think of us as your in-house tech team. We provide you with a dedicated, cross-functional team of expert developers, designers, and project managers. This team integrates with your startup, deeply understands your vision and goals, and works as a true partner to build, launch, and scale your product, giving you top-tier talent without the overhead of hiring.',
  },
];

const processSteps = [
    { title: 'Discovery & Strategy', description: 'We start by diving deep into your idea, market, and users to build a clear product strategy and roadmap.'},
    { title: 'Design & Prototyping', description: 'Our UI/UX experts craft an intuitive and engaging design, validated with interactive prototypes.'},
    { title: 'Agile Development', description: 'We build your product in iterative sprints, with full transparency and regular feedback sessions.'},
    { title: 'Launch & Grow', description: 'We handle deployment and provide ongoing support to ensure a successful launch and continuous improvement.'},
]

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


export default function StartupsPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-20">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
          Your Startup's Technical Co-Founder
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          We provide the technical expertise, strategic guidance, and development firepower to transform your vision into a successful, scalable product.
        </p>
      </motion.div>

       <motion.section
        className="mt-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={listVariants}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full text-center glassmorphic glow-border">
                  <CardHeader className="items-center">
                    <div className="rounded-lg bg-accent p-4">
                      <feature.icon className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <CardTitle className="mt-4 text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="mt-20 py-20 sm:py-24 bg-card rounded-lg glow-border"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Partnership Process</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">A proven path from a great idea to a market-leading product.</p>
            <motion.div className="relative mt-12" variants={listVariants}>
                <div className="absolute left-1/2 top-4 hidden w-px bg-border md:block h-full -translate-x-1/2"></div>
                {processSteps.map((step, index) => (
                    <motion.div key={index} className="relative md:grid md:grid-cols-2 md:gap-12 items-center mb-12" variants={itemVariants}>
                        <div className={`md:text-right ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:col-start-2'}`}>
                           <h3 className="text-2xl font-bold text-primary">{step.title}</h3>
                           <p className="text-muted-foreground mt-2">{step.description}</p>
                        </div>
                         <div className={`hidden md:flex items-center justify-center ${index % 2 === 0 ? 'md:col-start-1 md:row-start-1 md:justify-end' : 'md:col-start-2'}`}>
                            <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold text-lg shadow-lg">{index + 1}</div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </motion.section>


      <motion.section
        className="mt-20 text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
         <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Ready to build the future?</h2>
         <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">Let's talk about your startup idea and how we can help you bring it to life.</p>
         <Button asChild size="lg" className="mt-8">
            <Link href="/#contact">Schedule a Free Consultation <ArrowRight className="ml-2" /></Link>
        </Button>
      </motion.section>
    </div>
  );
}