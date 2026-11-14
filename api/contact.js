export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body || {};

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all required fields (name, email, message).' });
  }

  // Accepts variables with OR without VITE_ prefix
  const serviceId = process.env.EMAILJS_SERVICE_ID || process.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID || process.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY || process.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return res.status(500).json({
      error: 'Email service credentials are not yet configured in server environment variables.'
    });
  }

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: name.trim(),
          name: name.trim(),
          from_email: email.trim(),
          email: email.trim(),
          reply_to: email.trim(),
          subject: subject?.trim() || `Portfolio Contact from ${name.trim()}`,
          message: message.trim(),
          to_email: 'gourisharathore@gmail.com',
          to_name: 'Gourisha Rathore'
        }
      })
    });

    if (response.ok) {
      return res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } else {
      const errorText = await response.text();
      console.error('EmailJS API Error:', errorText);
      return res.status(502).json({ error: 'Email service delivery failed: ' + errorText });
    }
  } catch (err) {
    console.error('Serverless Contact Handler Error:', err);
    return res.status(500).json({ error: 'Internal server error while sending email.' });
  }
}
