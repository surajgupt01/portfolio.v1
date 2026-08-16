import { CalendarDays, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ArticlesListPage() {
  const articles = [
    {
      slug: "pulse-ai",
      title: "How I Built Pulse AI: An Intelligent Ingredient Analysis Platform",
      description: "A deep dive into building an end-to-end AI application utilizing OCR text extraction, custom Python backends, and Gemini LLMs for seamless consumer insights.",
      date: "Aug 16, 2026",
      readTime: "5 min read",
      category: "Engineering",
    },
    {
      slug: "luen-saas-journey",
      title: "Building Luen: My Journey Launching a Production Invoice SaaS",
      description: "Lessons learned building, pricing, and scaling a modern billing and invoice generation platform for creators and freelancers using Next.js and PostgreSQL.",
      date: "July 25, 2026",
      readTime: "4 min read",
      category: "Startup & SaaS",
    },
  ];

  return (
    <div className="w-full bg-white min-h-screen py-12 sm:py-16 flex justify-center text-neutral-900">
      <div className="w-[90%] md:w-[70%] max-w-3xl">
        
        {/* Back Navigation */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to portfolio</span>
          </Link>
        </div>

        {/* Page Header */}
        <header className="mb-8 pb-6 border-b border-neutral-200">
          <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 font-semibold mb-2 block">
            Thoughts & Writings
          </span>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
            All Articles
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-neutral-500 leading-relaxed">
            Documenting my engineering journey, architectural decisions, and learnings from building real-world software products.
          </p>
        </header>

        {/* Articles List */}
        <div className="space-y-4">
          {articles.map((article) => (
            <Link
              key={article.slug}
              to={`/blogs/${article.slug}`}
              className="group relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-2xs transition-all duration-300 hover:border-neutral-300 hover:shadow-xs block"
            >
              <div className="max-w-xl">
                <div className="flex flex-wrap items-center gap-2.5 text-[11px] text-neutral-400 mb-2">
                  <span className="rounded-md bg-neutral-100 px-2 py-0.5 font-medium text-neutral-600">
                    {article.category}
                  </span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <CalendarDays size={12} />
                    <span>{article.date}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h2 className="text-base sm:text-lg font-semibold tracking-tight text-neutral-900 transition-colors duration-200 group-hover:text-neutral-600">
                  {article.title}
                </h2>

                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-neutral-500 line-clamp-2">
                  {article.description}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-900 transition-colors duration-200 group-hover:text-neutral-600 self-start sm:self-center whitespace-nowrap">
                <span>Read article</span>
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}