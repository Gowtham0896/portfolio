import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // For now, we'll simulate sending an email
    // In production, you would integrate with a service like Resend, SendGrid, or Nodemailer
    console.log("[v0] Contact form submission:", { name, email, message })

    // Simulate email sending to Gowtham's email
    const emailContent = `
      New contact form submission:
      
      Name: ${name}
      Email: ${email}
      Message: ${message}
      
      Submitted at: ${new Date().toISOString()}
    `

    // TODO: Replace with actual email service integration
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'portfolio@yourdomain.com',
    //   to: 'cgowtham1508@gmail.com',
    //   subject: `Portfolio Contact: ${name}`,
    //   text: emailContent,
    // })

    console.log(" Email would be sent to jagadabiabhi@gmail.com:", emailContent)

    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error(" Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }
}
