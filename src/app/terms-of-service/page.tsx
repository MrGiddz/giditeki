'use client';

import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// export const metadata: Metadata = {
//     title: 'Terms of Service',
//     description: 'Read the terms of service for KrestCore Technologies.',
// };

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

export default function TermsOfServicePage() {
    const [lastUpdated, setLastUpdated] = useState('');

    useEffect(() => {
        setLastUpdated(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
    }, []);

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 sm:py-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        transition={{ duration: 0.8 }}
      >
        <header className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl !mb-4">
                Terms of Service
            </h1>
            <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
        </header>

        <div className="prose prose-lg max-w-none dark:prose-invert">
            <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the KrestCore Technologies website (the "Service") operated by KrestCore Technologies ("us", "we", or "our").</p>

            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service. These Terms apply to all visitors, users, and others who access or use the Service.</p>
            
            <h2>2. Intellectual Property</h2>
            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of KrestCore Technologies and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of KrestCore Technologies.</p>

            <h2>3. Links To Other Web Sites</h2>
            <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by KrestCore Technologies. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that KrestCore Technologies shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>

            <h2>4. Limitation Of Liability</h2>
            <p>In no event shall KrestCore Technologies, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

            <h2>5. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.</p>

            <h2>6. Changes</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

            <h2>7. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us.</p>
        </div>
      </motion.div>
    </div>
  );
}
