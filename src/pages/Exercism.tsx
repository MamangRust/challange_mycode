import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MDXContent from "@/components/MDXContent";
import { getExercismBySlug } from "@/utils/mdx";

const Exercism = () => {
  const { slug } = useParams();

  const { data: exercism, isLoading, error } = useQuery({
    queryKey: ["exercisms", slug],
    queryFn: () => getExercismBySlug(slug!),
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors">
        <Navbar />
        <main className="max-w-2xl mx-auto px-6 py-12">
          <div className="text-center text-gray-500 dark:text-gray-400">Loading exercism...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !exercism) {
    return (
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors">
        <Navbar />
        <main className="max-w-2xl mx-auto px-6 py-12 text-center">
          <h1 className="text-2xl font-serif text-amber-600 dark:text-blue-200 mb-4">
            exercism Not Found
          </h1>
          <Link
            to="/exercism"
            className="text-amber-600 hover:text-amber-800 dark:text-blue-300 dark:hover:text-blue-100 underline"
          >
            ← Back to exercisms
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors">
      <Navbar />

      <main className="max-w-2xl mx-auto px-6 py-12">
        <Link
          to="/exercism"
          className="text-amber-600 hover:text-amber-800 dark:text-blue-300 dark:hover:text-blue-100 text-sm mb-8 inline-block transition-colors"
        >
          ← Back to exercisms
        </Link>

        <article>
          <header className="mb-10">
            <h1 className="text-3xl font-serif font-light text-amber-600 dark:text-blue-200 mb-4">
              {exercism.title}
            </h1>

            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-4">
              <time dateTime={exercism.date}>
                {new Date(exercism.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              {exercism.readTime && (
                <>
                  <span>•</span>
                  <span>{exercism.readTime}</span>
                </>
              )}
            </div>

            {exercism.tags && exercism.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {exercism.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded bg-amber-100 dark:bg-blue-900 text-amber-700 dark:text-blue-200 border border-amber-400 dark:border-blue-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <MDXContent code={exercism.content} />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Exercism;
