import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import { join } from 'path'
 
export const runtime = 'nodejs'
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
export default async function Icon() {
  const imageData = await readFile(join(process.cwd(), 'public', 'shared', 'mzhub-logo.png'))
  
  return new Response(imageData, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
