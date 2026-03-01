import os
from openai import AsyncOpenAI
from dotenv import load_dotenv

load_dotenv()

client = AsyncOpenAI(api_key=os.getenv("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"))


async def get_openai_response(prompt: str) -> str:
    try:
        response = await client.chat.completions.create(
            model="gpt-4o-mini",  # cheap + fast
            messages=[
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
        )
        return response.choices[0].message.content
    except Exception as e:
        return f"[OpenAI Error] {str(e)}"