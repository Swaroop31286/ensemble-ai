import os
from google import genai
from dotenv import load_dotenv

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
print("Gemini Key Loaded:", bool(GEMINI_API_KEY))

client = genai.Client(api_key=GEMINI_API_KEY)


async def get_gemini_response(prompt: str) -> str:
    try:
        response = client.models.generate_content(
            model="gemini-2.0-flash",  # <- STABLE & widely available
            contents=prompt,
        )

        if response and response.text:
            return response.text

        return "Gemini returned an empty response."

    except Exception as e:
        return f"[Gemini Error] {str(e)}"