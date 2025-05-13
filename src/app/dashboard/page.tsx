"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusIcon, GithubIcon, LinkedinIcon, PaletteIcon, LayoutIcon, EyeIcon, ShareIcon } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/auth/signin");
    }
    if (status === "authenticated") {
      setIsLoading(false);
    }
  }, [status]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <LayoutIcon className="h-6 w-6" />
            <span className="text-xl font-bold">AI Portfolio Generator</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Welcome, {session?.user?.name || "User"}
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your portfolio and customize its appearance
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="data-sources">Data Sources</TabsTrigger>
            <TabsTrigger value="themes">Themes</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Portfolio Status</CardTitle>
                  <div className="h-4 w-4 rounded-full bg-amber-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Draft</div>
                  <p className="text-xs text-muted-foreground">
                    Your portfolio is not yet published
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Connected Accounts</CardTitle>
                  <div className="flex space-x-1">
                    <GithubIcon className="h-4 w-4 text-muted-foreground" />
                    <LinkedinIcon className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2/2</div>
                  <p className="text-xs text-muted-foreground">
                    GitHub and LinkedIn connected
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Projects</CardTitle>
                  <PlusIcon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">0</div>
                  <p className="text-xs text-muted-foreground">
                    No projects imported yet
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>
                    Common tasks to manage your portfolio
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-2">
                  <Button className="justify-start" variant="outline">
                    <PlusIcon className="mr-2 h-4 w-4" />
                    Generate Portfolio
                  </Button>
                  <Button className="justify-start" variant="outline">
                    <EyeIcon className="mr-2 h-4 w-4" />
                    Preview Portfolio
                  </Button>
                  <Button className="justify-start" variant="outline">
                    <ShareIcon className="mr-2 h-4 w-4" />
                    Publish Portfolio
                  </Button>
                  <Button className="justify-start" variant="outline">
                    <PaletteIcon className="mr-2 h-4 w-4" />
                    Customize Theme
                  </Button>
                </CardContent>
              </Card>

              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Getting Started</CardTitle>
                  <CardDescription>
                    Complete these steps to create your portfolio
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</div>
                      <span>Connect your GitHub account</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</div>
                      <span>Connect your LinkedIn account</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 text-xs">3</div>
                      <span>Generate your portfolio</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 text-xs">4</div>
                      <span>Customize your theme</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 text-xs">5</div>
                      <span>Publish your portfolio</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="data-sources" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>GitHub</CardTitle>
                  <CardDescription>
                    Import your repositories and contributions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <GithubIcon className="h-5 w-5" />
                      <span>Connected as {session?.user?.name || "User"}</span>
                    </div>
                    <Button variant="outline" size="sm">Refresh</Button>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Select repositories to showcase in your portfolio
                    </p>
                    <div className="border rounded-md p-4 text-center text-muted-foreground">
                      No repositories found. Click refresh to import your GitHub repositories.
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>LinkedIn</CardTitle>
                  <CardDescription>
                    Import your profile information and experience
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <LinkedinIcon className="h-5 w-5" />
                      <span>Connected as {session?.user?.name || "User"}</span>
                    </div>
                    <Button variant="outline" size="sm">Refresh</Button>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Select profile sections to showcase in your portfolio
                    </p>
                    <div className="border rounded-md p-4 text-center text-muted-foreground">
                      No profile data found. Click refresh to import your LinkedIn profile.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="themes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Theme Selection</CardTitle>
                <CardDescription>
                  Choose a theme for your portfolio or customize your own
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-md p-2 cursor-pointer hover:border-blue-500 transition-colors">
                    <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-md mb-2"></div>
                    <div className="text-center font-medium">Modern</div>
                  </div>
                  <div className="border rounded-md p-2 cursor-pointer hover:border-blue-500 transition-colors">
                    <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-md mb-2"></div>
                    <div className="text-center font-medium">Minimal</div>
                  </div>
                  <div className="border rounded-md p-2 cursor-pointer hover:border-blue-500 transition-colors">
                    <div className="aspect-video bg-gradient-to-br from-emerald-500 to-teal-600 rounded-md mb-2"></div>
                    <div className="text-center font-medium">Vibrant</div>
                  </div>
                </div>
                <div className="mt-4">
                  <Button>Customize Theme</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Settings</CardTitle>
                <CardDescription>
                  Configure your portfolio settings and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Portfolio URL</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 flex items-center border rounded-md px-3 py-2 bg-muted">
                      <span className="text-muted-foreground">username</span>
                      <span>.mvpapp.com</span>
                    </div>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Visibility</h3>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-amber-500" />
                    <span>Private (Draft)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
