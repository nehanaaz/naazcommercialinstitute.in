export function getReadingTime(text?: string, wordsPerMinute = 200) {
  if (!text) return { minutes: 0, words: 0 };

  // Remove MDX/HTML artifacts
  const cleanText = text.replace(/<[^>]*>/g, " ").replace(/[#_*`>~-]/g, " ");

  const words = cleanText.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));

  return {
    words,
    minutes,
    time: `${minutes} min read`,
  };
}
