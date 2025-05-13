import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

// This is a simplified version of the portfolio generation API
// In a real implementation, you would use the Vercel AI SDK with a proper AI provider
export async function POST(req: NextRequest) {
  try {
    const session = await auth();

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { githubData, linkedinData, theme } = await req.json();

    if (!githubData || !linkedinData) {
      return NextResponse.json(
        { error: "Missing required data sources" },
        { status: 400 }
      );
    }

    // In a real implementation, you would use the Vercel AI SDK to process the data
    // For now, we'll simulate a response
    
    // Create a simple portfolio structure based on the provided data
    const portfolio = {
      user: {
        name: githubData.profile.name || linkedinData.profile.localizedFirstName + " " + linkedinData.profile.localizedLastName,
        title: "Software Developer", // This would come from LinkedIn data in a real implementation
        bio: githubData.profile.bio || "Passionate software developer with expertise in web technologies.",
        avatar: githubData.profile.avatar_url,
        location: githubData.profile.location,
        email: session.user.email,
        github: githubData.profile.html_url,
        linkedin: `https://www.linkedin.com/in/${linkedinData.profile.id}`,
      },
      projects: githubData.repositories.map((repo: any) => ({
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
      })),
      skills: extractSkills(githubData.repositories),
      theme: theme || "modern",
    };

    return NextResponse.json({ portfolio });
  } catch (error) {
    console.error("Portfolio generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate portfolio" },
      { status: 500 }
    );
  }
}

// Helper function to extract skills from repositories
function extractSkills(repositories: any[]) {
  const languagesMap: Record<string, number> = {};
  
  repositories.forEach(repo => {
    if (repo.language) {
      languagesMap[repo.language] = (languagesMap[repo.language] || 0) + 1;
    }
  });
  
  // Convert to array and sort by frequency
  const skills = Object.entries(languagesMap)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
  
  return skills;
}
