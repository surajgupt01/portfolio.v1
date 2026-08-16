import { CalendarDays, Clock, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";
import Github from "../Github";
import LinkedIn from "../LinkedIn";

export default function LuenArticlePage() {
  return (
    <div className="w-full bg-white min-h-screen py-16 sm:py-24 flex justify-center text-neutral-900">
      <div className="w-[90%] md:w-[70%] max-w-3xl">
        
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-10 pb-8 border-b border-neutral-200">
          <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 mb-4">
            <span className="rounded-md bg-neutral-100 px-2.5 py-1 font-medium text-neutral-700">
              Startup & SaaS
            </span>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <CalendarDays size={14} />
              <span>May 15, 2026</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>4 min read</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
            Building Luen: My Journey Launching a Production Invoice SaaS
          </h1>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Lessons learned building, pricing, and scaling a modern billing and invoice generation platform for creators and freelancers using Next.js and PostgreSQL.
          </p>

          {/* Author info row */}
          <div className="mt-6 flex items-center justify-between pt-6 border-t border-neutral-100">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center font-semibold text-neutral-800 text-sm">
                SG
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-900">Suraj Gupta</p>
                <p className="text-xs text-neutral-500">Full-stack + GenAI Engineer</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-50 transition-colors text-neutral-600 cursor-pointer" title="Share article">
                <Share2 size={16} />
              </button>
              <button className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-50 transition-colors text-neutral-600 cursor-pointer" title="Bookmark article">
                <Bookmark size={16} />
              </button>
            </div>
          </div>
        </header>

        {/* Main Article Content */}
        <article className="prose prose-neutral max-w-none text-neutral-700 space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            For many independent creators, freelancers, and small business owners, generating clean, professional invoices shouldn’t require struggling through bloated corporate accounting tools. That core pain point inspired me to build <strong>Luen</strong>—a streamlined, production-grade billing platform designed specifically to make transaction tracking and invoice creation frictionless.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 pt-4">
            Identifying the Problem & Scope
          </h2>
          <p>
            Most available invoicing utilities are either overly complex enterprise monsters or clunky templates that lack secure authentication, persistent client tracking, or automated record maintenance. My goal was simple: build a fast, reliable web application where non-tech users could spin up custom invoices and manage client history with zero friction.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 pt-4">
            Choosing the Tech Stack
          </h2>
          <p>
            To ship fast while keeping the architecture robust and scalable for future growth, I relied on a modern full-stack ecosystem:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-neutral-600">
            <li><strong>Frontend & Framework:</strong> Next.js and TypeScript paired with Tailwind CSS for clean layout design and responsive previews.</li>
            <li><strong>Authentication & Security:</strong> Auth.js for reliable, secure user session management and protected workspace routing.</li>
            <li><strong>Backend & Database:</strong> Node.js, Express.js, and PostgreSQL for structured relational data mapping and lightning-fast client querying.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 pt-4">
            Key Engineering Hurdles
          </h2>
          <p>
            One of the biggest technical challenges during development was ensuring consistent PDF output rendering regardless of the user&apos;s viewport device or browser type. Implementing server-side generation logic and optimizing state updates helped achieve a buttery-smooth real-time preview experience.
          </p>

          <blockquote className="border-l-2 border-neutral-900 pl-4 my-6 italic text-neutral-600">
            &ldquo;Shipping a SaaS product isn&apos;t just about writing code; it&apos;s about removing cognitive load for your users so they can complete their workflow in seconds.&rdquo;
          </blockquote>

          <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 pt-4">
            Reflections & What Lies Ahead
          </h2>
          <p>
            Luen is currently live in production and processing real workflows. Building and launching it end-to-end taught me invaluable lessons about database schema design, production error boundaries, and user experience tuning. Stay tuned for upcoming features like automated payment links and recurring subscription billing!
          </p>

          <p>
            If you want to check out the live site or explore the source repository, feel free to visit the links below.
          </p>
        </article>

        {/* Footer Links / Author Callout */}
        <div className="mt-16 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-neutral-500">
            Thanks for reading! Let&apos;s connect on social media.
          </div>
          <div className="flex items-center gap-4 text-neutral-700">
            <a href="https://github.com/surajgupt01" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-medium hover:text-neutral-900 transition-colors">
              <Github /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/suraj-gupta-1894051ba/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-medium hover:text-neutral-900 transition-colors">
              <LinkedIn /> LinkedIn
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}