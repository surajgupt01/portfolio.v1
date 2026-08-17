import { CalendarDays, Clock, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";
import Github from "../Github";
import LinkedIn from "../LinkedIn";

export default function ArticlePage() {
  return (
    <div className="w-full bg-white min-h-screen py-12 sm:py-16 flex justify-center text-neutral-900">
      <div className="w-[90%] md:w-[70%] max-w-3xl">
        
        {/* Back Navigation */}
        <div className="mb-6">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8 pb-6 border-b border-neutral-200">
          <div className="flex flex-wrap items-center gap-2.5 text-[11px] text-neutral-500 mb-3">
            <span className="rounded-md bg-neutral-100 px-2.5 py-0.5 font-medium text-neutral-700">
              Engineering
            </span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <CalendarDays size={12} />
              <span>June 1, 2026</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock size={12} />
              <span>5 min read</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900 leading-tight">
            How I Built Pulse AI: An Intelligent Ingredient Analysis Platform
          </h1>

          <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
            A deep dive into building an end-to-end AI application utilizing OCR text extraction, custom Python backends, and Gemini LLMs for seamless consumer insights.
          </p>

          {/* Author info row */}
          <div className="mt-5 flex items-center justify-between pt-5 border-t border-neutral-100">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center font-semibold text-neutral-800 text-xs">
                SG
              </div>
              <div>
                <p className="text-xs font-medium text-neutral-900">Suraj Gupta</p>
                <p className="text-[11px] text-neutral-500">Full-stack + GenAI Engineer</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button className="p-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors text-neutral-600 cursor-pointer" title="Share article">
                <Share2 size={14} />
              </button>
              <button className="p-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors text-neutral-600 cursor-pointer" title="Bookmark article">
                <Bookmark size={14} />
              </button>
            </div>
          </div>
        </header>

        {/* Main Article Content */}
        <article className="prose prose-neutral max-w-none text-neutral-700 space-y-4 text-xs sm:text-sm leading-relaxed">
          <p>
            When scanning food or cosmetic product labels, the ingredients list is often packed with chemical jargon, proprietary terms, and difficult-to-parse allergen warnings. I set out to solve this friction by building <strong>Pulse AI</strong>—a web application that extracts text from label images, processes safety profiles through the Gemini API, and breaks down the details into clear, actionable insights.
          </p>

          <h2 className="text-base sm:text-lg font-semibold text-neutral-900 pt-3">
            The Architecture & Tech Stack
          </h2>
          <p>
            To handle heavy image processing and rapid AI inferences without bottlenecks, I designed a decoupled full-stack architecture:
          </p>
          <ul className="list-disc pl-4 space-y-1.5 text-neutral-600">
            <li><strong>Frontend:</strong> Next.js, TypeScript, and Tailwind CSS for server-side rendering, smooth responsiveness, and rapid layout builds.</li>
            <li><strong>Backend Service:</strong> FastAPI and Python for handling OCR processing pipelines and high-speed data validation.</li>
            <li><strong>AI Core:</strong> Google&apos;s Gemini API for structured prompt responses, health rating extraction, and conversational context tracking.</li>
            <li><strong>Database:</strong> PostgreSQL hosted securely for maintaining fast user data records and history caches.</li>
          </ul>

          <h2 className="text-base sm:text-lg font-semibold text-neutral-900 pt-3">
            Core Implementation Details
          </h2>
          <p>
            The trickiest part of the build was ensuring high optical character recognition (OCR) accuracy on crumpled product packaging or curved bottles. By passing pre-processed image buffers through custom Python utility functions prior to LLM analysis, error rates dropped significantly.
          </p>

          <blockquote className="border-l-2 border-neutral-900 pl-3 my-4 italic text-neutral-500 text-xs sm:text-sm">
            &ldquo;Building production-ready software isn&apos;t just about getting features to work—it&apos;s about ensuring error boundaries gracefully handle failed edge cases like unreadable blurry images.&rdquo;
          </blockquote>

          <h2 className="text-base sm:text-lg font-semibold text-neutral-900 pt-3">
            What&apos;s Next?
          </h2>
          <p>
            Pulse AI is live in production, but development doesn&apos;t stop here. Future iterations will include community-driven product indexes, barcode scanning support, and localized allergy filtering profiles. 
          </p>

          <p>
            If you want to check out the codebase or try the live application yourself, links are available below.
          </p>
        </article>

        {/* Footer Links / Author Callout */}
        <div className="mt-12 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] sm:text-xs text-neutral-500">
            Thanks for reading! Let&apos;s connect on social media.
          </div>
          <div className="flex items-center gap-3 text-neutral-700">
            <a href="https://github.com/surajgupt01" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[11px] font-medium hover:text-neutral-900 transition-colors">
              <Github /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/suraj-gupta-1894051ba/" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[11px] font-medium hover:text-neutral-900 transition-colors">
              <LinkedIn /> LinkedIn
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}