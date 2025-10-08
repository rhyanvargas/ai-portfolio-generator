# AI-Powered Developer Portfolio Generator

An application that automatically generates and customizes professional developer portfolios using data from GitHub and LinkedIn, powered by AI.

## 📸 Dashboard Preview

![AI Portfolio Generator Dashboard](/public/images/dashboard.png)

The dashboard provides an overview of your portfolio status, connected accounts, and quick actions to manage your portfolio.

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5+ with App Router, Server Components, and Turbopack
- **Runtime**: React 19.2 with latest concurrent features
- **UI Components**: shadcn/ui with Radix UI primitives for accessible components
- **Styling**: Tailwind CSS v4 with utility-first approach and custom animations
- **Authentication**: NextAuth.js v5 for GitHub and LinkedIn OAuth integration
- **AI Integration**: Vercel AI SDK v4.3+ with Model Context Protocol (MCP) support
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: Built-in React state with server components
- **Icons**: Lucide React for consistent iconography
- **Notifications**: Sonner for toast notifications
- **Theme System**: next-themes for dark/light mode support
- **Type Safety**: TypeScript 5+ with strict configuration
- **Deployment**: Vercel for seamless hosting and CI/CD

## 🔑 Core Features

1. **User Authentication**
   - OAuth sign-in with GitHub and LinkedIn using NextAuth.js

2. **Data Source Integration**
   - Fetch user data from GitHub (repositories, commits) and LinkedIn (profile information)

3. **AI-Generated Portfolio Layout**
   - Process fetched data to generate personalized portfolio layouts
   - Use AI to structure data and generate content

4. **Theme Customization**
   - Theme editor with predefined themes and customization options
   - Persist user preferences

5. **Portfolio Management**
   - Edit, update, publish, or unpublish portfolio content
   - Simple CMS-like interface for content management

6. **Public Portfolio Sharing**
   - Unique subdomain for each published portfolio
   - Dynamic routing for user portfolios

## 💰 Pricing Tiers

### 🆓 Free Tier
- **Self-Hosting**: Deploy on your own infrastructure with full control
- **Built-in CMS**: Manage portfolio content with an intuitive content management system
- **Limited Generations**: Generate up to 3 AI-powered portfolio layouts per month
- **Basic Themes**: Access to 5 professionally designed themes
- **GitHub Integration**: Connect and showcase your GitHub repositories
- **Static Export**: Export your portfolio as static HTML/CSS files

### ⭐ Premium Tier
- **Cloud Hosting**: Hassle-free hosting on our optimized infrastructure
- **Unlimited Generations**: Generate unlimited AI-powered portfolio variations
- **Premium Theme Library**: Access to 50+ professionally designed themes
- **Unlimited Exports**: Export in multiple formats (HTML, PDF, React components)
- **ATS-Friendly Resume Generation**: AI-powered resume creation optimized for Applicant Tracking Systems
- **Advanced Analytics**: Track portfolio views, engagement, and visitor insights
- **Custom Domain Support**: Use your own domain for professional branding
- **LinkedIn Integration**: Full LinkedIn profile data integration
- **Priority AI Processing**: Faster generation times with dedicated resources
- **Advanced Customization**: Custom CSS injection and component overrides
- **SEO Optimization**: Advanced meta tags, structured data, and search optimization
- **Portfolio Templates**: Industry-specific templates (Frontend, Backend, DevOps, etc.)
- **Code Snippet Highlighting**: Advanced syntax highlighting for project showcases
- **Integration APIs**: Connect with additional platforms (GitLab, Bitbucket, Stack Overflow)
- **Collaboration Features**: Share drafts with team members or mentors for feedback
- **Version History**: Track and revert portfolio changes with full version control

## 🚀 Getting Started

1. Clone the repository

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file with the following variables:
   ```
   # NextAuth
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key
   
   # GitHub OAuth
   GITHUB_ID=your-github-client-id
   GITHUB_SECRET=your-github-client-secret
   
   # LinkedIn OAuth
   LINKEDIN_ID=your-linkedin-client-id
   LINKEDIN_SECRET=your-linkedin-client-secret
   
   # AI Provider
   AI_PROVIDER_API_KEY=your-ai-provider-api-key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```
   
   The development server uses Turbopack for faster builds and hot reloading.

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

### Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
│   └── ui/             # shadcn/ui components
├── lib/                # Utility functions and configurations
└── types/              # TypeScript type definitions
```

## 📚 Resources and References

- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [Vercel AI SDK Guide](https://sdk.vercel.ai/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction)
- [GitHub API Reference](https://docs.github.com/en/rest)
- [LinkedIn API Documentation](https://docs.microsoft.com/en-us/linkedin/)
