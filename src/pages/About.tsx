import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutChallenge = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-12">
        <header className="mb-16">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-light text-amber-500 dark:text-blue-200 mb-2">
              About Challenge My Code
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-light">
              Practice-driven coding challenges curated from popular platforms.
            </p>
          </div>
        </header>

        <section className="space-y-12">
          <div>
            <h2 className="text-xl font-serif text-amber-500 dark:text-blue-200 mb-4">Why Challenges?</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              "Challenge My Code" was created to track and revisit coding challenges that improve real-world problem-solving skills. It's a structured archive to document, revisit, and learn from platforms that push developers to think algorithmically.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-amber-500 dark:text-blue-200 mb-4">What's Covered?</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              The app organizes problems by platform and difficulty, with clean examples and notes to support deeper understanding. Currently includes:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-500 dark:text-gray-400">
              <li><strong>LeetCode</strong> – Popular DSA problems from interviews</li>
              <li><strong>HackerRank</strong> – Domain-specific questions for data structures, SQL, and more</li>
              <li><strong>Codewars</strong> – Kata-style challenges to sharpen syntax and problem intuition</li>
              <li><strong>Exercism</strong> – Test-driven coding exercises across multiple languages</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-serif text-amber-500 dark:text-blue-200 mb-4">How It's Organized</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Each challenge includes a short description, tags, difficulty level, and a structured solution. You can filter by source, language, or topic to quickly find and review solved problems.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-amber-500 dark:text-blue-200 mb-4">Built for Practice</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Solving problems is only part of the journey. Reviewing, comparing, and refactoring builds long-term mastery. This site helps bridge short-term wins with long-term learning.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutChallenge;
