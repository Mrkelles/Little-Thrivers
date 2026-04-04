
'use server';

/**
 * Note: Enrollment inquiries are now handled client-side using the EmailJS library
 * as per user request. This file remains for future server-side needs but the 
 * primary enrollment logic has moved to the component level in src/app/enroll/page.tsx.
 */

export async function submitEnrollmentAction(formData: FormData) {
  return { success: false, error: 'Inquiries are now handled via EmailJS client-side.' };
}
