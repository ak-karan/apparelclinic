// api/pickup.js
import sendEmail from './send-email.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Honeypot spam protection
  if (req.body.botcheck || req.body.company) {
    console.log('Spam detected');
    return res.status(200).json({ success: true });
  }

  try {
    const { 
      name, 
      phone, 
      pickup_address, 
      service_type, 
      preferred_date, 
      special_instructions 
    } = req.body;

    // Validate required fields
    if (!name || !phone || !pickup_address) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, phone and address are required' 
      });
    }

    // Send email
    await sendEmail({
      subject: `🚚 New Pickup Request - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">🚚 New Pickup Request</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; background-color: #f8fafc; font-weight: bold; width: 140px;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: #f8fafc; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">
                <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: #f8fafc; font-weight: bold;">Pickup Address:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${pickup_address}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: #f8fafc; font-weight: bold;">Service Type:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${service_type}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: #f8fafc; font-weight: bold;">Preferred Date:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${preferred_date}</td>
            </tr>
            ${special_instructions ? `
            <tr>
              <td style="padding: 10px; background-color: #f8fafc; font-weight: bold;">Instructions:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${special_instructions}</td>
            </tr>
            ` : ''}
          </table>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #f0f9ff; border-radius: 5px; font-size: 14px;">
            <p style="margin: 5px 0; color: #2563eb;">⏰ Request Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            <p style="margin: 5px 0; color: #2563eb;">📱 Follow up with customer within 30 minutes</p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Pickup request submitted successfully' 
    });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Server error. Please call us directly.' 
    });
  }
}