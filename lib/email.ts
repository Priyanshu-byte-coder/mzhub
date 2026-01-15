import nodemailer from 'nodemailer'

// SMTP Configuration from environment variables
const smtpConfig = {
    host: process.env.SMTP_HOST || 'smtp.office365.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // Use STARTTLS
    auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASSWORD || '',
    },
}

const adminEmail = process.env.ADMIN_EMAIL || 'builtbyneal@gmail.com'
const fromEmail = process.env.FROM_EMAIL || process.env.ADMIN_EMAIL || 'builtbyneal@gmail.com'

/**
 * Create reusable transporter
 */
function createTransporter() {
    return nodemailer.createTransport(smtpConfig)
}

/**
 * Send admin alert email with full inquiry details
 */
export async function sendAdminAlert(data: {
    name: string
    email: string
    message: string
}): Promise<boolean> {
    const transporter = createTransporter()

    const mailOptions = {
        from: `"MZHub Contact Form" <${fromEmail}>`,
        to: adminEmail,
        subject: `🔔 New Contact Inquiry from ${data.name}`,
        html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #D4AF37, #B8860B); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #555; }
          .value { background: white; padding: 10px; border-radius: 4px; margin-top: 5px; border: 1px solid #eee; }
          .message-box { background: white; padding: 15px; border-left: 4px solid #D4AF37; margin-top: 10px; }
          .footer { padding: 15px; text-align: center; color: #888; font-size: 12px; }
          .timestamp { color: #888; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0;">📬 New Contact Form Submission</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">From:</div>
              <div class="value">${escapeHtml(data.name)}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="message-box">${escapeHtml(data.message).replace(/\n/g, '<br>')}</div>
            </div>
            <div class="timestamp">
              Received: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
            </div>
          </div>
          <div class="footer">
            This is an automated notification from MZHub contact form.
          </div>
        </div>
      </body>
      </html>
    `,
        text: `
New Contact Form Submission
============================
From: ${data.name}
Email: ${data.email}

Message:
${data.message}

Received: ${new Date().toISOString()}
    `,
    }

    try {
        await transporter.sendMail(mailOptions)
        console.log('Admin alert email sent successfully')
        return true
    } catch (error) {
        console.error('Failed to send admin alert email:', error)
        return false
    }
}

/**
 * Send auto-reply confirmation email to user
 */
export async function sendAutoReply(data: {
    name: string
    email: string
}): Promise<boolean> {
    const transporter = createTransporter()

    const mailOptions = {
        from: `"MZHub Team" <${fromEmail}>`,
        to: data.email,
        subject: `Thank you for reaching out, ${data.name}!`,
        html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; background: #f5f5f5; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .card { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #1a1a2e, #16213e); color: white; padding: 30px; text-align: center; }
          .header h1 { margin: 0; color: #D4AF37; font-size: 28px; }
          .content { padding: 30px; }
          .highlight { color: #D4AF37; font-weight: bold; }
          .cta { display: inline-block; background: linear-gradient(135deg, #D4AF37, #B8860B); color: white; padding: 12px 30px; border-radius: 6px; text-decoration: none; margin-top: 20px; }
          .footer { background: #f9f9f9; padding: 20px; text-align: center; color: #888; font-size: 12px; border-top: 1px solid #eee; }
          .social { margin-top: 15px; }
          .social a { margin: 0 10px; color: #D4AF37; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="card">
            <div class="header">
              <h1>MZHub</h1>
              <p style="margin: 10px 0 0; opacity: 0.9;">Message Received</p>
            </div>
            <div class="content">
              <p>Dear <span class="highlight">${escapeHtml(data.name)}</span>,</p>
              
              <p>Thank you for reaching out to us! We've received your message and truly appreciate you taking the time to connect with MZHub.</p>
              
              <p>Our team is reviewing your inquiry and will get back to you as soon as possible, typically within <strong>24-48 hours</strong>.</p>
              
              <p>In the meantime, feel free to explore our website for more information about our services and solutions.</p>
              
              <p style="margin-top: 25px;">
                Warm regards,<br>
                <strong style="color: #D4AF37;">The MZHub Team</strong>
              </p>
            </div>
            <div class="footer">
              <p>This is an automated response. Please do not reply to this email.</p>
              <p>&copy; ${new Date().getFullYear()} MZHub. All rights reserved.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
        text: `
Dear ${data.name},

Thank you for reaching out to us! We've received your message and truly appreciate you taking the time to connect with MZHub.

Our team is reviewing your inquiry and will get back to you as soon as possible, typically within 24-48 hours.

Warm regards,
The MZHub Team

---
This is an automated response. Please do not reply to this email.
© ${new Date().getFullYear()} MZHub. All rights reserved.
    `,
    }

    try {
        await transporter.sendMail(mailOptions)
        console.log('Auto-reply email sent successfully')
        return true
    } catch (error) {
        console.error('Failed to send auto-reply email:', error)
        return false
    }
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text: string): string {
    const htmlEscapes: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
    }
    return text.replace(/[&<>"']/g, (char) => htmlEscapes[char])
}
