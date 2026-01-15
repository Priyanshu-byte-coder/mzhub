// Check environment configuration
require('dotenv').config({ path: '.env.local' })

console.log('📋 Current Email Configuration:\n')
console.log('ADMIN_EMAIL:', process.env.ADMIN_EMAIL || 'NOT SET (will default to builtbyneal@gmail.com)')
console.log('SMTP_HOST:', process.env.SMTP_HOST || 'NOT SET')
console.log('SMTP_PORT:', process.env.SMTP_PORT || 'NOT SET')
console.log('SMTP_USER:', process.env.SMTP_USER || 'NOT SET')
console.log('SMTP_PASSWORD:', process.env.SMTP_PASSWORD ? '***SET***' : 'NOT SET')
console.log('\n')

if (!process.env.ADMIN_EMAIL || process.env.ADMIN_EMAIL === 'builtbyneal@gmail.com') {
    console.log('⚠️  WARNING: ADMIN_EMAIL is not set to doshipriyanshu3@gmail.com')
    console.log('Admin emails will be sent to:', process.env.ADMIN_EMAIL || 'builtbyneal@gmail.com')
    console.log('\nTo fix: Update .env.local file and set:')
    console.log('ADMIN_EMAIL=doshipriyanshu3@gmail.com')
} else {
    console.log('✅ ADMIN_EMAIL is correctly set to:', process.env.ADMIN_EMAIL)
}
