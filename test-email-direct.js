// Direct email test to verify SendGrid is working
require('dotenv').config({ path: '.env.local' })

async function testEmail() {
    console.log('📧 Testing Direct Email Send via SendGrid...\n')
    
    const testData = {
        name: 'Direct Test',
        email: 'doshipriyanshu3@gmail.com',
        message: 'This is a direct test to verify SendGrid email delivery is working.'
    }

    try {
        const response = await fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(testData)
        })

        const result = await response.json()

        console.log('Response Status:', response.status)
        console.log('Response:', JSON.stringify(result, null, 2))
        console.log('\n')
        
        if (response.ok) {
            console.log('✅ API call successful!')
            console.log('\n📋 What to check now:')
            console.log('1. Check doshipriyanshu3@gmail.com inbox')
            console.log('2. Check doshipriyanshu3@gmail.com spam/junk folder')
            console.log('3. Check SendGrid Activity Feed: https://app.sendgrid.com/activity')
            console.log('\n⏰ Wait 1-2 minutes for email delivery')
            console.log('\nIf still no email after 2 minutes:')
            console.log('- Go to SendGrid Activity Feed')
            console.log('- Look for emails sent to: doshipriyanshu3@gmail.com')
            console.log('- Check the Status column (Delivered/Processed/Dropped/Bounced)')
            console.log('- Click on the entry to see detailed delivery logs')
        } else {
            console.log('❌ API call failed:', result.error)
        }
    } catch (error) {
        console.log('❌ Error:', error.message)
        console.log('\nMake sure dev server is running: npm run dev')
    }
}

testEmail()
//TRIGERING REDEPLOYMENT