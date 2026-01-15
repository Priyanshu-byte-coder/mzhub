import { NextRequest, NextResponse } from 'next/server'
import { saveContact } from '@/lib/db'
import { sendAdminAlert, sendAutoReply } from '@/lib/email'

// Input validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_NAME_LENGTH = 100
const MAX_EMAIL_LENGTH = 254
const MAX_MESSAGE_LENGTH = 5000

/**
 * Sanitize string input to prevent injection attacks
 */
function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

/**
 * Validate contact form input
 */
function validateInput(data: { name?: string; email?: string; message?: string }): {
  valid: boolean
  error?: string
  sanitized?: { name: string; email: string; message: string }
} {
  const { name, email, message } = data

  // Check required fields
  if (!name || !email || !message) {
    return { valid: false, error: 'Missing required fields: name, email, and message are required' }
  }

  // Validate types
  if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
    return { valid: false, error: 'Invalid input types' }
  }

  // Validate lengths
  if (name.length > MAX_NAME_LENGTH) {
    return { valid: false, error: `Name must be less than ${MAX_NAME_LENGTH} characters` }
  }
  if (email.length > MAX_EMAIL_LENGTH) {
    return { valid: false, error: `Email must be less than ${MAX_EMAIL_LENGTH} characters` }
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return { valid: false, error: `Message must be less than ${MAX_MESSAGE_LENGTH} characters` }
  }

  // Validate email format
  if (!EMAIL_REGEX.test(email)) {
    return { valid: false, error: 'Invalid email format' }
  }

  // Sanitize inputs
  return {
    valid: true,
    sanitized: {
      name: sanitizeInput(name),
      email: email.toLowerCase().trim(),
      message: sanitizeInput(message),
    },
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate and sanitize input
    const validation = validateInput(body)
    if (!validation.valid || !validation.sanitized) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      )
    }

    const { name, email, message } = validation.sanitized

    // Get request metadata for logging
    const ipAddress = request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      'unknown'
    const userAgent = request.headers.get('user-agent') || 'unknown'

    // Store contact in database
    let contactId: string | null = null
    try {
      contactId = await saveContact({
        name,
        email,
        message,
        source: 'contact_form',
        ipAddress,
        userAgent,
      })
      console.log('Contact saved to database:', contactId)
    } catch (dbError) {
      console.error('Database error (continuing with emails):', dbError)
      // Continue to send emails even if DB fails
    }

    // Send admin alert email (don't fail request if email fails)
    const adminEmailSent = await sendAdminAlert({ name, email, message })

    // Send auto-reply to user (don't fail request if email fails)
    const autoReplySent = await sendAutoReply({ name, email })

    // Log results
    console.log('Contact form processed:', {
      contactId,
      adminEmailSent,
      autoReplySent,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
        id: contactId,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}
