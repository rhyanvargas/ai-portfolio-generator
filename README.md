# AI-Powered Developer Portfolio Generator

An application that automatically generates and customizes professional developer portfolios using data from GitHub and LinkedIn, powered by AI.

## 📸 Dashboard Preview

![AI Portfolio Generator Dashboard](/public/images/dashboard.png)

The dashboard provides an overview of your portfolio status, connected accounts, and quick actions to manage your portfolio.

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router and Server Components
- **UI Components**: shadcn/ui for accessible and customizable UI elements
- **Styling**: Tailwind CSS for utility-first styling
- **Authentication**: NextAuth.js for GitHub and LinkedIn OAuth integration
- **AI Integration**: Vercel AI SDK with Model Context Protocol (MCP) for generative UI and data processing
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

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📚 Resources and References

- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [Vercel AI SDK Guide](https://sdk.vercel.ai/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction)
- [GitHub API Reference](https://docs.github.com/en/rest)
- [LinkedIn API Documentation](https://docs.microsoft.com/en-us/linkedin/)
