import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    let emailContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #ea580c; padding-bottom: 10px;">New Form Submission</h2>
        <p style="color: #666;">You have received a new message via the <strong>${data.formType || 'Contact Form'}</strong>.</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
    `;
    
    for (const [key, value] of Object.entries(data)) {
      if (key !== 'formType') {
        const formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
        emailContent += `
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; width: 30%; font-weight: bold; color: #333;">${formattedKey}</td>
            <td style="padding: 10px; border: 1px solid #ddd; color: #555;">${value}</td>
          </tr>
        `;
      }
    }
    
    emailContent += `
        </table>
        <p style="margin-top: 30px; font-size: 12px; color: #999;">This email was sent from the Sportline Advantage website.</p>
      </div>
    `;

    await transporter.sendMail({
      from: `Sportline Advantage <${process.env.SMTP_EMAIL}>`,
      to: process.env.SMTP_EMAIL,
      subject: `New submission: ${data.formType || 'Contact Form'}`,
      html: emailContent,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
