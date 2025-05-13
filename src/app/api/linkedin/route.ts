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

    if (provider !== "linkedin" || !accessToken) {
      return NextResponse.json(
        { error: "LinkedIn account not connected" },
        { status: 400 }
      );
    }

    // Fetch user profile
    const profileResponse = await fetch(
      "https://api.linkedin.com/v2/me",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!profileResponse.ok) {
      return NextResponse.json(
        { error: "Failed to fetch LinkedIn profile" },
        { status: profileResponse.status }
      );
    }

    const profileData = await profileResponse.json();

    // Fetch email address
    const emailResponse = await fetch(
      "https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!emailResponse.ok) {
      return NextResponse.json(
        { error: "Failed to fetch LinkedIn email" },
        { status: emailResponse.status }
      );
    }

    const emailData = await emailResponse.json();

    // Return the combined data
    return NextResponse.json({
      profile: profileData,
      email: emailData,
    });
  } catch (error) {
    console.error("LinkedIn API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch LinkedIn data" },
      { status: 500 }
    );
  }
}
