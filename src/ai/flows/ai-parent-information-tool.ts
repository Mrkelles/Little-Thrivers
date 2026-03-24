'use server';
/**
 * @fileOverview An AI assistant designed to answer prospective parents' questions about the daycare's policies, fees, and educational approach.
 *
 * - aiParentInformationTool - A function that handles parent inquiries.
 * - AIParentInformationToolInput - The input type for the aiParentInformationTool function.
 * - AIParentInformationToolOutput - The return type for the aiParentInformationTool function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AIParentInformationToolInputSchema = z.object({
  question: z
    .string()
    .describe("The parent's question about the daycare's policies, fees, or educational approach."),
});
export type AIParentInformationToolInput = z.infer<typeof AIParentInformationToolInputSchema>;

const AIParentInformationToolOutputSchema = z.object({
  answer: z.string().describe("The AI's answer to the parent's question."),
});
export type AIParentInformationToolOutput = z.infer<typeof AIParentInformationToolOutputSchema>;

export async function aiParentInformationTool(
  input: AIParentInformationToolInput
): Promise<AIParentInformationToolOutput> {
  return aiParentInformationToolFlow(input);
}

const aiParentInformationToolPrompt = ai.definePrompt({
  name: 'aiParentInformationToolPrompt',
  input: { schema: AIParentInformationToolInputSchema },
  output: { schema: AIParentInformationToolOutputSchema },
  prompt: `You are Calgary DayHome Connect's AI assistant, designed to provide warm, helpful, and trustworthy information to prospective parents. Your goal is to answer questions about our home daycare's policies, fees, and educational approach.

Here is key information about Calgary DayHome Connect:
**Name:** Calgary DayHome Connect
**Location:** Calgary, Alberta
**Philosophy & Educational Approach:** We believe in a nurturing, play-based learning environment where children thrive through exploration and discovery. Our child-led approach focuses on holistic development, fostering social, emotional, cognitive, and physical growth. We aim to prepare children for school readiness while ensuring a safe, warm, and engaging space with individualized attention.
**Key Policies:** We maintain small group sizes to ensure personalized care. Healthy, nutritious snacks and meals are provided daily. Outdoor play is incorporated into our routine every day, weather permitting. We prioritize open and transparent communication with parents, providing regular updates on their child's progress and activities.
**Fees:** Our fees are competitive and reflect the high quality of care and education we provide. For specific and up-to-date information on tuition rates and current availability (including full-time and part-time options), please contact us directly.
**Provider Credentials:** Our dedicated provider is certified in Early Childhood Education (ECE) and holds current First Aid and CPR certifications, ensuring a safe and enriching environment for all children.
**Operating Hours:** We typically operate Monday through Friday, from 7:30 AM to 5:30 PM, but flexible arrangements can be discussed.

Please answer the parent's question based *only* on the information provided above. If a question cannot be fully answered with the given information, politely guide the parent to contact Calgary DayHome Connect directly for more details. Maintain a warm, friendly, and professional tone.

Question: {{{question}}}`,
});

const aiParentInformationToolFlow = ai.defineFlow(
  {
    name: 'aiParentInformationToolFlow',
    inputSchema: AIParentInformationToolInputSchema,
    outputSchema: AIParentInformationToolOutputSchema,
  },
  async (input) => {
    const { output } = await aiParentInformationToolPrompt(input);
    return output!;
  }
);
