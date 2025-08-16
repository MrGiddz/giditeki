# KrestCore Technologies - Company Website

This is the official company website for KrestCore Technologies, a modern IT consulting and software development firm. The website is built with Next.js and showcases the company's services, portfolio, and expertise. It is designed to be a comprehensive, performant, and user-friendly platform for potential clients, partners, and new hires.

## Features

- **Fully Responsive Design**: Adapts seamlessly to all screen sizes, from mobile phones to desktop monitors.
- **Modern UI/UX**: Clean, professional design with smooth animations and a focus on user experience.
- **Dynamic Content Pages**:
    - **Services**: Detailed pages for each service offering.
    - **Portfolio**: A showcase of featured projects with individual detail pages.
    - **Blog**: A company blog with articles on technology and IT strategy.
- **AI-Powered Features (via Genkit)**:
    - **AI Chatbot Assistant**: An interactive chatbot to answer visitor questions about the company's services.
    - **Blog Post Idea Generator**: A tool to help content creators brainstorm new article topics.
- **Interactive Project Cost Calculator**: A tool to provide potential clients with a rough estimate for their projects based on various parameters.
- **Light/Dark Mode**: A theme toggler for user preference.
- **SEO Optimized**: Built with SEO best practices, including dynamic sitemaps and robots.txt, to ensure high visibility on search engines.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **AI Integration**: [Genkit](https://firebase.google.com/docs/genkit)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-folder>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of your project and add your Google AI (Gemini) API key. You can get a key from [Google AI Studio](https://aistudio.google.com/app/apikey).

    ```
    GEMINI_API_KEY=your_google_ai_api_key_here
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Project Structure

- `src/app/`: Contains all the pages of the application, following the Next.js App Router structure.
- `src/components/`: Includes all reusable React components, organized into `ui`, `layout`, and feature-specific folders.
- `src/ai/`: Holds all the Genkit-related code, including AI flows and configurations.
- `src/lib/`: Utility functions and helper scripts.
- `public/`: Static assets like images and fonts.
