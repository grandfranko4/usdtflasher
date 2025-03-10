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
    const { product, amount, paymentMethod, customerInfo, adminEmail, appPassword } = data;

    // Validate required fields
    if (!product || !paymentMethod || !customerInfo || !adminEmail || !appPassword) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          error: 'Missing required fields',
          receivedData: {
            hasProduct: !!product,
            hasAmount: !!amount,
            hasPaymentMethod: !!paymentMethod,
            hasCustomerInfo: !!customerInfo,
            hasAdminEmail: !!adminEmail,
            hasAppPassword: !!appPassword
          }
        }),
      };
    }

    // Determine which credentials to use
    const emailUser = adminEmail;
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
      subject: `New Payment: ${product}`,
      html: `
        <h2>New Payment Received</h2>
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Amount:</strong> ${amount || 'Not specified'}</p>
        <p><strong>Payment Method:</strong> ${paymentMethod}</p>
        <h3>Customer Information:</h3>
        <p><strong>Name:</strong> ${customerInfo.name || 'Not provided'}</p>
        <p><strong>Email:</strong> ${customerInfo.email || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${customerInfo.phone || 'Not provided'}</p>
      `
    };

    console.log('Sending payment notification email with options:', {
      from: emailUser,
      to: emailUser,
      subject: `New Payment: ${product}`
    });

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Payment notification email sent successfully:', info.messageId);

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'Payment notification sent successfully',
        messageId: info.messageId
      }),
    };
  } catch (error) {
    console.error('Error sending payment notification:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to send payment notification', 
        details: error.message,
        stack: error.stack
      }),
    };
  }
};
