import { BlogMetadata } from '@/types'

interface ScoredPost {
  post: BlogMetadata
  score: number
}

export function getRelatedPosts(
  currentPost: BlogMetadata,
  allPosts: BlogMetadata[],
  limit: number = 3
): BlogMetadata[] {
  const scoredPosts: ScoredPost[] = allPosts
    .filter((post) => post.slug !== currentPost.slug)
    .map((post) => ({
      post,
      score: calculateRelevanceScore(currentPost, post),
    }))

  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((sp) => sp.post)
}

function calculateRelevanceScore(
  currentPost: BlogMetadata,
  candidatePost: BlogMetadata
): number {
  let score = 0

  if (currentPost.category === candidatePost.category) {
    score += 10
  }

  const currentTags = new Set(currentPost.tags.map((t) => t.toLowerCase()))
  const candidateTags = candidatePost.tags.map((t) => t.toLowerCase())
  
  const commonTags = candidateTags.filter((tag) => currentTags.has(tag))
  score += commonTags.length * 5

  if (currentPost.author === candidatePost.author) {
    score += 3
  }

  const currentDate = new Date(currentPost.date).getTime()
  const candidateDate = new Date(candidatePost.date).getTime()
  const daysDiff = Math.abs(currentDate - candidateDate) / (1000 * 60 * 60 * 24)
  
  if (daysDiff < 30) {
    score += 2
  } else if (daysDiff < 90) {
    score += 1
  }

  const titleWords = new Set(
    currentPost.title
      .toLowerCase()
      .split(/\s+/)
      .filter((word) => word.length > 3)
  )
  const candidateTitleWords = candidatePost.title
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length > 3)

  const commonTitleWords = candidateTitleWords.filter((word) =>
    titleWords.has(word)
  )
  score += commonTitleWords.length * 2

  return score
}
