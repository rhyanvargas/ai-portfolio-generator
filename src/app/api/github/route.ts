import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";


export async function GET(req: NextRequest) {
  try {
    const session = await auth();

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get the access token from the session
    const accessToken = (session.user as any).accessToken;
    const provider = (session.user as any).provider;

    if (provider !== "github" || !accessToken) {
      return NextResponse.json(
        { error: "GitHub account not connected" },
        { status: 400 }
      );
    }

    // Fetch user profile
    const userResponse = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!userResponse.ok) {
      return NextResponse.json(
        { error: "Failed to fetch GitHub profile" },
        { status: userResponse.status }
      );
    }

    const userData = await userResponse.json();

    // Fetch repositories
    const reposResponse = await fetch(
      `https://api.github.com/users/${userData.login}/repos?sort=updated&per_page=10`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!reposResponse.ok) {
      return NextResponse.json(
        { error: "Failed to fetch repositories" },
        { status: reposResponse.status }
      );
    }

    const reposData = await reposResponse.json();

    // Return the combined data
    return NextResponse.json({
      profile: userData,
      repositories: reposData,
    });
  } catch (error) {
    console.error("GitHub API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}
