import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GithubIcon, LinkedinIcon, MailIcon, MapPinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// This would be replaced with actual data fetching in a real implementation
async function getPortfolioData(username: string) {
  // Mock data for demonstration purposes
  // In a real implementation, this would fetch from a database
  if (username === "demo") {
    return {
      user: {
        name: "John Doe",
        title: "Full Stack Developer",
        bio: "Passionate developer with expertise in React, Node.js, and cloud technologies. I love building scalable web applications and exploring new technologies.",
        avatar: "https://github.com/identicons/jasonlong.png",
        location: "San Francisco, CA",
        email: "john.doe@example.com",
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
      },
      projects: [
        {
          name: "E-commerce Platform",
          description: "A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB.",
          url: "https://github.com/johndoe/ecommerce",
          stars: 45,
          forks: 12,
          language: "TypeScript",
        },
        {
          name: "Weather App",
          description: "A weather application that shows real-time weather data using OpenWeatherMap API.",
          url: "https://github.com/johndoe/weather-app",
          stars: 28,
          forks: 5,
          language: "JavaScript",
        },
        {
          name: "Task Manager",
          description: "A simple task management application with drag-and-drop functionality.",
          url: "https://github.com/johndoe/task-manager",
          stars: 32,
          forks: 8,
          language: "TypeScript",
        },
      ],
      skills: [
        { name: "TypeScript", count: 8 },
        { name: "JavaScript", count: 6 },
        { name: "React", count: 5 },
        { name: "Node.js", count: 4 },
        { name: "HTML/CSS", count: 3 },
        { name: "Python", count: 2 },
      ],
      theme: "modern",
    };
  }
  
  return null;
}

export async function generateMetadata({
  params,
}: {
  params: { username: string };
}): Promise<Metadata> {
  // In Next.js 14+, we need to use the params directly without destructuring
  const portfolio = await getPortfolioData(params.username);
  
  if (!portfolio) {
    return {
      title: "Portfolio Not Found",
      description: "The requested portfolio could not be found.",
    };
  }
  
  return {
    title: `${portfolio.user.name} - ${portfolio.user.title}`,
    description: portfolio.user.bio,
  };
}

export default async function PortfolioPage({
  params,
}: {
  params: { username: string };
}) {
  // In Next.js 14+, we need to use the params directly without destructuring
  const portfolio = await getPortfolioData(params.username);
  
  if (!portfolio) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
              <Image 
                src={portfolio.user.avatar} 
                alt={portfolio.user.name}
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">{portfolio.user.name}</h1>
              <p className="text-xl opacity-90 mt-2">{portfolio.user.title}</p>
              <div className="flex items-center mt-4 space-x-4">
                <a href={portfolio.user.github} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a href={portfolio.user.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <a href={`mailto:${portfolio.user.email}`} className="hover:opacity-80">
                  <MailIcon className="h-5 w-5" />
                </a>
                {portfolio.user.location && (
                  <div className="flex items-center">
                    <MapPinIcon className="h-5 w-5 mr-1" />
                    <span>{portfolio.user.location}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
                <p className="text-slate-600 dark:text-slate-300">{portfolio.user.bio}</p>
              </div>
            </section>
            
            {/* Projects Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Projects</h2>
              <div className="space-y-4">
                {portfolio.projects.map((project, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold">
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">
                              {project.name}
                            </a>
                          </h3>
                          <p className="text-slate-600 dark:text-slate-300 mt-2">{project.description}</p>
                        </div>
                        {project.language && (
                          <span className="text-sm px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">
                            {project.language}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center mt-4 text-sm text-slate-500 dark:text-slate-400">
                        <span className="flex items-center mr-4">
                          <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z" />
                          </svg>
                          {project.stars} stars
                        </span>
                        <span className="flex items-center">
                          <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
                          </svg>
                          {project.forks} forks
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            {/* Skills Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
                <div className="flex flex-wrap gap-2">
                  {portfolio.skills.map((skill, index) => (
                    <div key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </section>
            
            {/* Contact Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Contact</h2>
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MailIcon className="h-5 w-5 mr-2 text-slate-500" />
                    <a href={`mailto:${portfolio.user.email}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                      {portfolio.user.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <GithubIcon className="h-5 w-5 mr-2 text-slate-500" />
                    <a href={portfolio.user.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">
                      GitHub
                    </a>
                  </div>
                  <div className="flex items-center">
                    <LinkedinIcon className="h-5 w-5 mr-2 text-slate-500" />
                    <a href={portfolio.user.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} {portfolio.user.name}. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Generated with{" "}
            <Link href="/" className="text-blue-400 hover:text-blue-300">
              AI Portfolio Generator
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
