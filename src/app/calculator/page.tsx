'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.2
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

export default function CalculatorPage() {
  const [projectType, setProjectType] = useState('web');
  const [complexity, setComplexity] = useState('medium');
  const [features, setFeatures] = useState([10]);
  const [timeline, setTimeline] = useState('standard');
  const [cost, setCost] = useState({ min: 0, max: 0 });

  useEffect(() => {
    const calculateCost = () => {
      let baseCost = 0;
      switch (projectType) {
        case 'web':
          baseCost = 5000;
          break;
        case 'mobile':
          baseCost = 8000;
          break;
        case 'enterprise':
          baseCost = 20000;
          break;
      }

      let complexityMultiplier = 1;
      switch (complexity) {
        case 'simple':
          complexityMultiplier = 0.8;
          break;
        case 'medium':
          complexityMultiplier = 1.2;
          break;
        case 'complex':
          complexityMultiplier = 2.0;
          break;
      }

      const featureMultiplier = 1 + (features[0] - 1) * 0.05;

      let timelineMultiplier = 1;
      switch (timeline) {
        case 'rush':
          timelineMultiplier = 1.3;
          break;
        case 'standard':
          timelineMultiplier = 1;
          break;
        case 'flexible':
          timelineMultiplier = 0.9;
          break;
      }

      const calculatedBase =
        baseCost * complexityMultiplier * featureMultiplier * timelineMultiplier;

      const minCost = Math.round(calculatedBase * 0.85 / 100) * 100;
      const maxCost = Math.round(calculatedBase * 1.15 / 100) * 100;

      setCost({ min: minCost, max: maxCost });
    };

    calculateCost();
  }, [projectType, complexity, features, timeline]);

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 sm:py-20">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Project Cost Calculator
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Get a ballpark estimate for your project. This is not a formal quote.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
        <motion.div
          className="space-y-8 lg:col-span-2"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Card className="glassmorphic glow-border">
              <CardHeader>
                <CardTitle>1. Project Type</CardTitle>
                <CardDescription>
                  What kind of project are you planning?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Select value={projectType} onValueChange={setProjectType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web">Web Application</SelectItem>
                    <SelectItem value="mobile">Mobile Application</SelectItem>
                    <SelectItem value="enterprise">
                      Enterprise Software
                    </SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="glassmorphic glow-border">
              <CardHeader>
                <CardTitle>2. Complexity</CardTitle>
                <CardDescription>
                  How complex will the project be?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={complexity}
                  onValueChange={setComplexity}
                  className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="simple" id="simple" />
                    <Label htmlFor="simple">Simple</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="medium" />
                    <Label htmlFor="medium">Medium</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="complex" id="complex" />
                    <Label htmlFor="complex">Complex</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="glassmorphic glow-border">
              <CardHeader>
                <CardTitle>3. Number of Features</CardTitle>
                <CardDescription>
                  Estimate the number of core features.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Slider
                    min={1}
                    max={50}
                    step={1}
                    value={features}
                    onValueChange={setFeatures}
                  />
                  <span className="w-12 text-center font-semibold">{features[0]}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="glassmorphic glow-border">
              <CardHeader>
                <CardTitle>4. Timeline</CardTitle>
                <CardDescription>
                  What is your desired project timeline?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Select value={timeline} onValueChange={setTimeline}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rush">Rush (Higher Cost)</SelectItem>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="flexible">Flexible (Lower Cost)</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <div className="lg:col-span-1">
          <motion.div 
            className="sticky top-24"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Card className="glow-border-always-on">
              <CardHeader className="text-center">
                <CardDescription>Estimated Cost</CardDescription>
                <CardTitle className="text-4xl font-bold text-accent">
                  {formatCurrency(cost.min)} - {formatCurrency(cost.max)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-muted-foreground">
                  This estimate is for informational purposes only. For a detailed
                  quote tailored to your specific requirements, please get in
                  touch with us.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="lg">
                  Request a Detailed Quote
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
