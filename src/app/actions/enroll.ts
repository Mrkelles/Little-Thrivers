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

  try {
    const { data, error } = await resend.emails.send({
      from: 'Little Thrivers Enrollment <onboarding@resend.dev>',
      to: ['kelvindigitarian@gmail.com'],
      subject: `New Enrollment Inquiry: ${childName}`,
      html: `
        <h1>New Enrollment Inquiry</h1>
        <p><strong>Parent Name:</strong> ${parentName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Preferred Contact:</strong> ${preferredContact}</p>
        <hr />
        <p><strong>Child Name:</strong> ${childName}</p>
        <p><strong>Child Age:</strong> ${childAge}</p>
        <p><strong>Desired Start Date:</strong> ${startDate}</p>
        <p><strong>Type of Care:</strong> ${careType}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { success: false, error: 'Failed to send email.' };
    }

    return { success: true };
  } catch (error) {
    console.error('Submission Error:', error);
    return { success: false, error: 'An unexpected error occurred.' };
  }
}