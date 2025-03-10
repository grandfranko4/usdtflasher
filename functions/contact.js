const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    // Parse the request body
    const data = JSON.parse(event.body);
    const { name, email, phone, subject, message, recipient, appPassword } = data;

    // Validate required fields
    if (!name || !email || !subject || !message || !recipient || !appPassword) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Determine which credentials to use
    const emailUser = recipient;
    const emailPass = appPassword;

    console.log('Using email credentials:', { 
      user: emailUser,
      // Don't log the actual password, just whether it exists
      passExists: !!emailPass
    });

    // Create a transporter for sending emails
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: emailUser,
        pass: emailPass
      }
    });

    // Email content
    const mailOptions = {
      from: emailUser,
      to: emailUser,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    console.log('Sending email with options:', {
      from: emailUser,
      to: emailUser,
      subject: `Contact Form: ${subject}`
    });

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        messageId: info.messageId
      }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to send email', 
        details: error.message,
        stack: error.stack
      }),
    };
  }
};
