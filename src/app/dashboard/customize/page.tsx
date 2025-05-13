"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";
import { PaletteIcon, LayoutIcon, TypeIcon, ImageIcon, SaveIcon } from "lucide-react";

export default function CustomizePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTheme, setActiveTheme] = useState("modern");
  const [primaryColor, setPrimaryColor] = useState("#3b82f6");
  const [fontFamily, setFontFamily] = useState("inter");
  const [spacing, setSpacing] = useState(4);
  const [isSaving, setIsSaving] = useState(false);

  // Redirect if not authenticated
  if (status === "unauthenticated") {
    router.push("/auth/signin");
    return null;
  }

  // Loading state
  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
      </div>
    );
  }

  const handleSaveTheme = async () => {
    setIsSaving(true);
    
    // Simulate saving the theme
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Theme saved successfully!");
    setIsSaving(false);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <LayoutIcon className="h-6 w-6" />
            <span className="text-xl font-bold">AI Portfolio Generator</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" onClick={() => router.push("/dashboard")}>
              Back to Dashboard
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Customize Your Portfolio</h1>
          <p className="text-muted-foreground">
            Personalize the appearance of your portfolio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Theme Selection</CardTitle>
                <CardDescription>
                  Choose a base theme for your portfolio
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div 
                    className={`border rounded-md p-2 cursor-pointer transition-colors ${activeTheme === "modern" ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "hover:border-blue-500"}`}
                    onClick={() => setActiveTheme("modern")}
                  >
                    <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-md mb-2"></div>
                    <div className="text-center font-medium">Modern</div>
                  </div>
                  <div 
                    className={`border rounded-md p-2 cursor-pointer transition-colors ${activeTheme === "minimal" ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "hover:border-blue-500"}`}
                    onClick={() => setActiveTheme("minimal")}
                  >
                    <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-md mb-2"></div>
                    <div className="text-center font-medium">Minimal</div>
                  </div>
                  <div 
                    className={`border rounded-md p-2 cursor-pointer transition-colors ${activeTheme === "vibrant" ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "hover:border-blue-500"}`}
                    onClick={() => setActiveTheme("vibrant")}
                  >
                    <div className="aspect-video bg-gradient-to-br from-emerald-500 to-teal-600 rounded-md mb-2"></div>
                    <div className="text-center font-medium">Vibrant</div>
                  </div>
                  <div 
                    className={`border rounded-md p-2 cursor-pointer transition-colors ${activeTheme === "classic" ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "hover:border-blue-500"}`}
                    onClick={() => setActiveTheme("classic")}
                  >
                    <div className="aspect-video bg-gradient-to-br from-amber-500 to-orange-600 rounded-md mb-2"></div>
                    <div className="text-center font-medium">Classic</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Advanced Customization</CardTitle>
                <CardDescription>
                  Fine-tune your portfolio appearance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="colors">
                  <TabsList className="grid grid-cols-4 mb-4">
                    <TabsTrigger value="colors" className="flex items-center gap-1">
                      <PaletteIcon className="h-4 w-4" />
                      <span className="hidden sm:inline">Colors</span>
                    </TabsTrigger>
                    <TabsTrigger value="typography" className="flex items-center gap-1">
                      <TypeIcon className="h-4 w-4" />
                      <span className="hidden sm:inline">Typography</span>
                    </TabsTrigger>
                    <TabsTrigger value="layout" className="flex items-center gap-1">
                      <LayoutIcon className="h-4 w-4" />
                      <span className="hidden sm:inline">Layout</span>
                    </TabsTrigger>
                    <TabsTrigger value="images" className="flex items-center gap-1">
                      <ImageIcon className="h-4 w-4" />
                      <span className="hidden sm:inline">Images</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="colors" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="primary-color">Primary Color</Label>
                      <div className="flex gap-2">
                        <div 
                          className="w-10 h-10 rounded-md border"
                          style={{ backgroundColor: primaryColor }}
                        ></div>
                        <Input 
                          id="primary-color" 
                          type="color" 
                          value={primaryColor} 
                          onChange={(e) => setPrimaryColor(e.target.value)} 
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Color Scheme</Label>
                      <Select defaultValue="light">
                        <SelectTrigger>
                          <SelectValue placeholder="Select color scheme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>

                  <TabsContent value="typography" className="space-y-4">
                    <div className="space-y-2">
                      <Label>Font Family</Label>
                      <Select value={fontFamily} onValueChange={setFontFamily}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select font family" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="inter">Inter</SelectItem>
                          <SelectItem value="roboto">Roboto</SelectItem>
                          <SelectItem value="montserrat">Montserrat</SelectItem>
                          <SelectItem value="poppins">Poppins</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Heading Size</Label>
                      <Select defaultValue="medium">
                        <SelectTrigger>
                          <SelectValue placeholder="Select heading size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>

                  <TabsContent value="layout" className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label>Spacing</Label>
                        <span className="text-sm text-muted-foreground">{spacing}</span>
                      </div>
                      <Slider
                        value={[spacing]}
                        min={1}
                        max={8}
                        step={1}
                        onValueChange={(value) => setSpacing(value[0])}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Layout Type</Label>
                      <Select defaultValue="standard">
                        <SelectTrigger>
                          <SelectValue placeholder="Select layout type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard</SelectItem>
                          <SelectItem value="sidebar">Sidebar</SelectItem>
                          <SelectItem value="minimal">Minimal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>

                  <TabsContent value="images" className="space-y-4">
                    <div className="space-y-2">
                      <Label>Border Radius</Label>
                      <Select defaultValue="medium">
                        <SelectTrigger>
                          <SelectValue placeholder="Select border radius" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                          <SelectItem value="full">Full (Circle)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Image Style</Label>
                      <Select defaultValue="standard">
                        <SelectTrigger>
                          <SelectValue placeholder="Select image style" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard</SelectItem>
                          <SelectItem value="grayscale">Grayscale</SelectItem>
                          <SelectItem value="duotone">Duotone</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-6">
                  <Button 
                    className="w-full" 
                    onClick={handleSaveTheme}
                    disabled={isSaving}
                  >
                    {isSaving ? (
                      <>
                        <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-t-transparent"></div>
                        Saving...
                      </>
                    ) : (
                      <>
                        <SaveIcon className="h-4 w-4 mr-2" />
                        Save Theme
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Theme Preview</CardTitle>
                <CardDescription>
                  See how your portfolio will look with the selected theme
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg overflow-hidden">
                  <div 
                    className="h-16 flex items-center px-4"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <div className="text-white font-bold">Portfolio Preview</div>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-800">
                    <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
                      <div 
                        className="w-24 h-24 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-400"
                        style={{ fontFamily: fontFamily === "inter" ? "Inter, sans-serif" : fontFamily }}
                      >
                        Avatar
                      </div>
                      <div>
                        <h1 
                          className="text-2xl font-bold"
                          style={{ fontFamily: fontFamily === "inter" ? "Inter, sans-serif" : fontFamily }}
                        >
                          John Doe
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400">
                          Full Stack Developer
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h2 
                          className="text-xl font-semibold mb-2"
                          style={{ fontFamily: fontFamily === "inter" ? "Inter, sans-serif" : fontFamily }}
                        >
                          About Me
                        </h2>
                        <div className="h-20 bg-slate-100 dark:bg-slate-700 rounded-md animate-pulse"></div>
                      </div>

                      <div>
                        <h2 
                          className="text-xl font-semibold mb-2"
                          style={{ fontFamily: fontFamily === "inter" ? "Inter, sans-serif" : fontFamily }}
                        >
                          Projects
                        </h2>
                        <div className="space-y-2">
                          <div className="h-16 bg-slate-100 dark:bg-slate-700 rounded-md animate-pulse"></div>
                          <div className="h-16 bg-slate-100 dark:bg-slate-700 rounded-md animate-pulse"></div>
                        </div>
                      </div>

                      <div>
                        <h2 
                          className="text-xl font-semibold mb-2"
                          style={{ fontFamily: fontFamily === "inter" ? "Inter, sans-serif" : fontFamily }}
                        >
                          Skills
                        </h2>
                        <div className="flex flex-wrap gap-2">
                          {["JavaScript", "React", "Node.js", "TypeScript", "CSS"].map((skill, index) => (
                            <div 
                              key={index} 
                              className="px-3 py-1 rounded-full text-sm"
                              style={{ 
                                backgroundColor: `${primaryColor}20`,
                                color: primaryColor,
                                fontFamily: fontFamily === "inter" ? "Inter, sans-serif" : fontFamily
                              }}
                            >
                              {skill}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
