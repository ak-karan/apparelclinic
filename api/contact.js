// api/contact.js
import sendEmail from './send-email.js';

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Honeypot spam protection
  if (req.body.botcheck || req.body.company) {
    console.log('Spam detected');
    return res.status(200).json({ success: true }); // Pretend it worked
  }

  try {
    const { name, phone, service_required, message } = req.body;

    // Validate required fields
    if (!name || !phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name and phone are required' 
      });
    }

    // Send email
    await sendEmail({
      subject: `📞 New Contact Request - ${service_required || 'General'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">New Contact Request</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; background-color: #f8fafc; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: #f8fafc; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">
                <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: #f8fafc; font-weight: bold;">Service:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${service_required || 'Not specified'}</td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding: 10px; background-color: #f8fafc; font-weight: bold;">Message:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${message}</td>
            </tr>
            ` : ''}
          </table>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #f0f9ff; border-radius: 5px; font-size: 14px; color: #2563eb;">
            ⏰ Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
          </div>
        </div>
      `,
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Request submitted successfully' 
    });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Server error. Please try again.' 
    });
  }
}