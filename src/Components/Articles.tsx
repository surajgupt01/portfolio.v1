import { CalendarDays, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ArticlesListPage() {
  const articles = [
    {
      slug: "pulse-ai",
      title: "How I Built Pulse AI: An Intelligent Ingredient Analysis Platform",
      description:
        "A deep dive into building an end-to-end AI application utilizing OCR text extraction, custom Python backends, and Gemini LLMs for seamless consumer insights.",
      date: "Aug 1, 2026",
      readTime: "5 min read",
      category: "Engineering",
    },
    {
      slug: "luen-saas-journey",
      title: "Building Luen: My Journey Launching a Production Invoice SaaS",
      description:
        "Lessons learned building, pricing, and scaling a modern billing and invoice generation platform for creators and freelancers using Next.js and PostgreSQL.",
      date: "Aug 15, 2026",
      readTime: "4 min read",
      category: "Startup & SaaS",
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-neutral-950 min-h-screen py-8 sm:py-12 flex justify-center text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <div className="w-[90%] md:w-[70%] max-w-3xl">
        
        {/* Back Navigation */}
        <div className="mb-4">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-[11px] font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <ArrowLeft size={12} />
            <span>Back to portfolio</span>
          </Link>
        </div>

        {/* Page Header */}
        <header className="mb-6 pb-4 border-b border-neutral-200 dark:border-neutral-800">
          <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 font-semibold mb-1.5 block">
            Thoughts & Writings
          </span>
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            All Articles
          </h1>
          <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Documenting my engineering journey, architectural decisions, and learnings from building real-world software products.
          </p>
        </header>

        {/* Articles List */}
        <div className="space-y-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              to={`/blogs/${article.slug}`}
              className="group relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/60 p-4 sm:p-5 shadow-2xs transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-xs block"
            >
              <div className="max-w-xl">
                <div className="flex flex-wrap items-center gap-2 text-[10px] text-neutral-400 dark:text-neutral-500 mb-1.5">
                  <span className="rounded-md bg-neutral-100 dark:bg-neutral-800 border border-transparent dark:border-neutral-700/60 px-1.5 py-0.5 font-medium text-neutral-600 dark:text-neutral-300">
                    {article.category}
                  </span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <CalendarDays size={11} />
                    <span>{article.date}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock size={11} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h2 className="text-sm sm:text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 transition-colors duration-200 group-hover:text-neutral-600 dark:group-hover:text-neutral-300">
                  {article.title}
                </h2>

                <p className="mt-1 text-[11px] sm:text-xs leading-relaxed text-neutral-500 dark:text-neutral-400 line-clamp-2">
                  {article.description}
                </p>
              </div>

              <div className="flex items-center gap-1 text-[11px] font-medium text-neutral-900 dark:text-neutral-200 transition-colors duration-200 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 self-start sm:self-center whitespace-nowrap">
                <span>Read article</span>
                <ArrowRight
                  size={12}
                  className="transition-transform duration-200 group-hover:translate-x-1 shrink-0"
                />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}