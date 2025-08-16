'use client';

import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// export const metadata: Metadata = {
//     title: 'Privacy Policy',
//     description: 'Read the privacy policy for KrestCore Technologies.',
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

export default function PrivacyPolicyPage() {
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
                Privacy Policy
            </h1>
            <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
        </header>

        <div className="prose prose-lg max-w-none dark:prose-invert">
            <p>Welcome to KrestCore Technologies. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>

            <h2>1. Information We Collect</h2>
            <p>We may collect personal information that you voluntarily provide to us when you fill out a contact form, subscribe to our newsletter, or otherwise contact us. This information may include your name, email address, phone number, and any other details you provide.</p>
            <p>We may also collect non-personal information, such as browser type, operating system, and web pages visited to help us understand how visitors use our site.</p>

            <h2>2. Use of Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
                <li>Respond to your inquiries and fulfill your requests.</li>
                <li>Send you marketing and promotional communications.</li>
                <li>Improve our website and services.</li>
                <li>Monitor and analyze usage and trends to improve your experience.</li>
            </ul>

            <h2>3. Disclosure of Your Information</h2>
            <p>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.</p>

            <h2>4. Security of Your Information</h2>
            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

            <h2>5. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

            <h2>6. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us through the contact form on our website.</p>
        </div>
      </motion.div>
    </div>
  );
}
