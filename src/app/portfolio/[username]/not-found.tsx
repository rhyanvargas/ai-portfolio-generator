import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PortfolioNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4">Portfolio Not Found</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          The portfolio you are looking for doesn&apos;t exist or hasn&apos;t been published yet.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
          <Link href="/auth/signin">
            <Button variant="outline">Create Your Portfolio</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
