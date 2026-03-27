import Anthropic from "@anthropic-ai/sdk";
import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function getRecipeFromChefGemini(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  const prompt = `
    You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make.

    You don't need to use every ingredient. You may include a few extra ingredients, but not too many.

    Format your response in markdown.

    User ingredients: ${ingredientsString}
    `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview", // you can also use "gemini-1.5-flash"
    contents: prompt,
  });

  return response.text;
}


const anthropic = new Anthropic({
    apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,

    dangerouslyAllowBrowser: true,
})
export async function getRecipeFromChefClaude(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")

    const msg = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [
            { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
        ],
    });
    return msg.content[0].text
}
