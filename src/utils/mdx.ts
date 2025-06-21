import {  codewars, exercism, hackerrank, leetcode } from "#velite";

export type Challenge = {
  slug: string;
  title: string;
  difficulty?: "easy" | "medium" | "hard";
  date: string;
  excerpt?: string;
  readTime?: string;
  tags: string[];
  content: string;
};

function mapChallenge<T extends { slugAsParams: string; title: string; date: string; body: string }>(
  item: T & Partial<Challenge>
): Challenge {
  return {
    slug: item.slugAsParams,
    title: item.title,
    difficulty: item.difficulty,
    date: item.date,
    excerpt: item.excerpt,
    readTime: item.readTime,
    tags: item.tags || [],
    content: item.body,
  };
}


export async function getLeetcode(): Promise<Challenge[]> {
  try {
    return leetcode
      .slice()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map(mapChallenge);
  } catch (error) {
    console.error("Failed to load leetcode challenges:", error);
    return [];
  }
}

export async function getLeetcodeBySlug(slug: string): Promise<Challenge | null> {
  try {
    const item = leetcode.find((c) => c.slugAsParams === slug);
    return item ? mapChallenge(item) : null;
  } catch (error) {
    console.error(`Failed to load leetcode challenge: ${slug}`, error);
    return null;
  }
}

export async function getCodewars(): Promise<Challenge[]> {
  try {
    return codewars
      .slice()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map(mapChallenge);
  } catch (error) {
    console.error("Failed to load codewars challenges:", error);
    return [];
  }
}

export async function getCodewarsBySlug(slug: string): Promise<Challenge | null> {
  try {
    const item = codewars.find((c) => c.slugAsParams === slug);
    return item ? mapChallenge(item) : null;
  } catch (error) {
    console.error(`Failed to load codewars challenge: ${slug}`, error);
    return null;
  }
}

export async function getHackerRank(): Promise<Challenge[]> {
  try {
    return hackerrank
      .slice()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map(mapChallenge);
  } catch (error) {
    console.error("Failed to load hackerrank challenges:", error);
    return [];
  }
}

export async function getHackerRankBySlug(slug: string): Promise<Challenge | null> {
  try {
    const item = hackerrank.find((c) => c.slugAsParams === slug);
    return item ? mapChallenge(item) : null;
  } catch (error) {
    console.error(`Failed to load hackerrank challenge: ${slug}`, error);
    return null;
  }
}

export async function getExercism(): Promise<Challenge[]> {
  try {
    return exercism
      .slice()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map(mapChallenge);
  } catch (error) {
    console.error("Failed to load exercism challenges:", error);
    return [];
  }
}

export async function getExercismBySlug(slug: string): Promise<Challenge | null> {
  try {
    const item = exercism.find((c) => c.slugAsParams === slug);
    return item ? mapChallenge(item) : null;
  } catch (error) {
    console.error(`Failed to load exercism challenge: ${slug}`, error);
    return null;
  }
}