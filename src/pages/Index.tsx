import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TypeWriter from "@/components/TypeWritter";
import { useQuery } from "@tanstack/react-query";
import {
  getLeetcode,
  getHackerRank,
  getCodewars,
  getExercism,
  Challenge
} from "@/utils/mdx";

const Index = () => {
  const typewriterTexts = [
    "Challenge Your Code",
    "Level Up Your Logic",
    "Train with Real Problems",
    "Master the Craft",
  ];

  const { data: leetcode = [] } = useQuery<Challenge[]>({
    queryKey: ["leetcode"],
    queryFn: getLeetcode,
  });

  const { data: hackerrank = [] } = useQuery<Challenge[]>({
    queryKey: ["hackerrank"],
    queryFn: getHackerRank,
  });

  const { data: codewars = [] } = useQuery<Challenge[]>({
    queryKey: ["codewars"],
    queryFn: getCodewars,
  });

  const { data: exercism = [] } = useQuery<Challenge[]>({
    queryKey: ["exercism"],
    queryFn: getExercism,
  });

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6">
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center py-20">
          <h1 className="text-6xl md:text-7xl font-serif font-light text-gray-700 dark:text-gray-200 mb-6">
            Challenge My Code
          </h1>
          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 h-8">
            <TypeWriter
              texts={typewriterTexts}
              speed={150}
              delay={2000}
              className="text-amber-500 dark:text-blue-300"
            />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 italic font-light max-w-2xl mx-auto">
            Improve your skills through curated problems from the best platforms.
          </p>
        </section>

        <section className="py-20 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-serif text-amber-500 dark:text-blue-200 mb-12 text-center">
            Latest Challenges
          </h2>
          <div className="grid gap-10">
            {[
              ["LeetCode", leetcode],
              ["HackerRank", hackerrank],
              ["Codewars", codewars],
              ["Exercism", exercism],
            ].map(([title, data]) => {
              const sectionTitle = title as string;
              const challenges = data as Challenge[];

              return (
                <div key={sectionTitle}>
                  <h3 className="text-2xl font-semibold text-amber-600 dark:text-blue-300 mb-4">
                    {sectionTitle}
                  </h3>
                  <div className="space-y-4">
                    {challenges.slice(0, 3).map((item) => (
                      <Link
                        key={item.slug}
                        to={`/${sectionTitle.toLowerCase()}/${item.slug}`}
                        className="block p-6 bg-white dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition"
                      >
                        <h4 className="text-lg font-medium mb-2 text-amber-600 dark:text-blue-200">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.excerpt}
                        </p>
                        <div className="text-xs mt-2 text-gray-400 dark:text-gray-500 italic">
                          {item.readTime || "2 min read"} •{" "}
                          {new Date(item.date).toLocaleDateString()}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
