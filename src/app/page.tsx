import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, Code2Icon, PaletteIcon, Share2Icon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Code2Icon className="h-6 w-6" />
            <span className="font-bold text-xl">AI Portfolio Generator</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/features" className="text-sm font-medium hover:underline">Features</Link>
            <Link href="/pricing" className="text-sm font-medium hover:underline">Pricing</Link>
            <Link href="/about" className="text-sm font-medium hover:underline">About</Link>
          </nav>
          <div className="flex space-x-2">
            <Link href="/auth/signin">
              <Button variant="outline" size="sm">Log in</Button>
            </Link>
            <Link href="/auth/signin">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Generate Your Professional Developer Portfolio with AI
                </h1>
                <p className="text-lg text-slate-300">
                  Connect your GitHub and LinkedIn accounts to automatically create a stunning, personalized portfolio showcasing your skills and projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/auth/signin">
                    <Button size="lg" className="w-full sm:w-auto">
                      Get Started
                    </Button>
                  </Link>
                  <Link href="/examples">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      View Examples
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex items-center space-x-2">
                    <GithubIcon className="h-5 w-5" />
                    <span>GitHub</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <LinkedinIcon className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </div>
                </div>
              </div>
              <div className="relative hidden md:block">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75"></div>
                <div className="relative bg-slate-900 p-6 rounded-lg border border-slate-800">
                  <div className="space-y-4">
                    <div className="h-40 bg-slate-800 rounded-md animate-pulse"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-slate-800 rounded w-3/4 animate-pulse"></div>
                      <div className="h-4 bg-slate-800 rounded animate-pulse"></div>
                      <div className="h-4 bg-slate-800 rounded w-5/6 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Key Features</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Our AI-powered platform makes creating a professional developer portfolio quick and easy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="mb-4 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full w-12 h-12 flex items-center justify-center">
                  <GithubIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">GitHub Integration</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Automatically import your repositories, contributions, and commit history to showcase your coding activity.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="mb-4 p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full w-12 h-12 flex items-center justify-center">
                  <PaletteIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customizable Themes</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Choose from a variety of professional themes or customize your own to match your personal brand.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="mb-4 p-2 bg-green-100 dark:bg-green-900/30 rounded-full w-12 h-12 flex items-center justify-center">
                  <Share2Icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Sharing</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Get a personalized subdomain to share your portfolio with potential employers and clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to showcase your skills?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Create your AI-powered developer portfolio in minutes, not hours.
            </p>
            <Link href="/auth/signin">
              <Button size="lg" variant="secondary" className="font-semibold">
                Get Started for Free
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Code2Icon className="h-6 w-6 text-white" />
                <span className="font-bold text-xl text-white">AI Portfolio Generator</span>
              </div>
              <p className="text-sm">
                Generate professional developer portfolios powered by AI using your GitHub and LinkedIn data.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/features" className="hover:text-white">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/examples" className="hover:text-white">Examples</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center">
            <p>© {new Date().getFullYear()} AI Portfolio Generator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
