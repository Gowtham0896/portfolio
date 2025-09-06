# Cybersecurity Portfolio - Gowtham Chennavaram

## Email Setup Instructions

The contact form is ready to send emails! To enable email functionality:

### Option 1: Resend (Recommended)
1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add to your environment variables:
   \`\`\`
   RESEND_API_KEY=your_api_key_here
   \`\`\`
4. Uncomment the Resend code in `app/api/contact/route.ts`
5. Install Resend: `npm install resend`

### Option 2: SendGrid
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get your API key
3. Add to environment variables:
   \`\`\`
   SENDGRID_API_KEY=your_api_key_here
   \`\`\`
4. Install SendGrid: `npm install @sendgrid/mail`

### Option 3: Nodemailer (Gmail/SMTP)
1. Set up app password for Gmail
2. Add to environment variables:
   \`\`\`
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   \`\`\`
3. Install Nodemailer: `npm install nodemailer`

Currently, the form logs submissions to console for testing. Replace the TODO section in the API route with your preferred email service.
