
'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitEnrollmentAction(formData: FormData) {
  const parentName = formData.get('parentName') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const preferredContact = formData.get('preferredContact') as string;
  const childName = formData.get('childName') as string;
  const childAge = formData.get('childAge') as string;
  const startDate = formData.get('startDate') as string;
  const careType = formData.get('careType') as string;
  const message = formData.get('message') as string;

  if (!process.env.RESEND_API_KEY) {
    return { success: false, error: 'Resend API key is missing in environment variables.' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'kelvindigitarian@gmail.com',
      subject: `New Enrollment Inquiry: ${childName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h1 style="color: #F5821F;">New Enrollment Inquiry</h1>
          <p>You have received a new inquiry from the Little Thrivers website.</p>
          
          <h2 style="border-bottom: 2px solid #5BBF4E; padding-bottom: 5px;">Parent Details</h2>
          <p><strong>Name:</strong> ${parentName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Preferred Contact:</strong> ${preferredContact}</p>
          
          <h2 style="border-bottom: 2px solid #5BBF4E; padding-bottom: 5px; margin-top: 20px;">Child Details</h2>
          <p><strong>Name:</strong> ${childName}</p>
          <p><strong>Age/DOB:</strong> ${childAge}</p>
          <p><strong>Start Date:</strong> ${startDate}</p>
          <p><strong>Care Type:</strong> ${careType}</p>
          
          <h2 style="border-bottom: 2px solid #5BBF4E; padding-bottom: 5px; margin-top: 20px;">Additional Info</h2>
          <p>${message || 'No additional message provided.'}</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return { 
        success: false, 
        error: `Resend Error: ${error.message}. Ensure kelvindigitarian@gmail.com is verified in your Resend dashboard.` 
      };
    }

    return { success: true };
  } catch (err: any) {
    console.error('Unexpected Submission Error:', err);
    return { success: false, error: err.message || 'An unexpected error occurred while sending the email.' };
  }
}
