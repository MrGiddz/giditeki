'use server';

/**
 * @fileOverview An AI chatbot assistant for answering website visitor questions about company services.
 *
 * - aiChatbotAssistant - A function that handles the chatbot interaction.
 * - AIChatbotAssistantInput - The input type for the aiChatbotAssistant function.
 * - AIChatbotAssistantOutput - The return type for the aiChatbotAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIChatbotAssistantInputSchema = z.object({
  query: z.string().describe('The user query or question.'),
});
export type AIChatbotAssistantInput = z.infer<typeof AIChatbotAssistantInputSchema>;

const AIChatbotAssistantOutputSchema = z.object({
  response: z.string().describe('The chatbot response to the user query.'),
});
export type AIChatbotAssistantOutput = z.infer<typeof AIChatbotAssistantOutputSchema>;

export async function aiChatbotAssistant(input: AIChatbotAssistantInput): Promise<AIChatbotAssistantOutput> {
  return aiChatbotAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiChatbotAssistantPrompt',
  input: {schema: AIChatbotAssistantInputSchema},
  output: {schema: AIChatbotAssistantOutputSchema},
  prompt: `You are a helpful AI chatbot assistant for Apex Digital, an IT consulting and software development company. Your goal is to answer user questions about the company's services and direct them to the appropriate resources or contact forms.

  Company Description: Apex Digital is an IT consulting firm and a software development company. We provide client services (custom web & mobile app development, enterprise software solutions, IT infrastructure consulting, cloud solutions, and ongoing technical support). We also develop our own internal projects and custom tools that can be sold or offered as SaaS products. Our style is modern, minimal, and tech-forward.

  User Query: {{{query}}}

  Please provide a concise and informative response to the user's query. If the query is unclear, ask for clarification. If the query is about a specific service, briefly describe the service and suggest relevant resources (e.g., a contact form or a specific page on the website).
  `,
});

const aiChatbotAssistantFlow = ai.defineFlow(
  {
    name: 'aiChatbotAssistantFlow',
    inputSchema: AIChatbotAssistantInputSchema,
    outputSchema: AIChatbotAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
