import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    const { data: resendData, error } = await resend.emails.send({
      from: 'Sportline Advantage <onboarding@resend.dev>',
      to: ['vanith.bb@gmail.com'],
      subject: `New submission: ${data.formType || 'Contact Form'}`,
      html: emailContent,
    });

    if (error) {
      return Response.json({ error: error.message || 'Error sending email' }, { status: 500 });
    }

    return Response.json({ success: true, data: resendData });
  } catch (error) {
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
