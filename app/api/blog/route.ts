import { NextResponse } from 'next/server'
import { getAllBlogPosts } from '@/lib/blog/blog'

export async function GET() {
  try {
    const posts = getAllBlogPosts()
    return NextResponse.json(
      { posts },
      { status: 200 }
    )
  } catch (error) {
    console.error('Blog API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
