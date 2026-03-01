import asyncio
from llm_clients.openai_client import get_openai_response
from llm_clients.gemini_client import get_gemini_response
from llm_clients.openrouter_client import get_openrouter_response


async def aggregate_responses(prompt: str, models: list[str]) -> dict:
    tasks = {}

    if "openai" in models:
        tasks["openai"] = get_openai_response(prompt)

    if "gemini" in models:
        tasks["gemini"] = get_gemini_response(prompt)

    if "openrouter" in models:
        tasks["openrouter"] = get_openrouter_response(prompt)

    results = {}

    responses = await asyncio.gather(
        *tasks.values(),
        return_exceptions=True
    )

    for (model_name, _), response in zip(tasks.items(), responses):
        if isinstance(response, Exception):
            results[model_name] = f"[Error] {str(response)}"
        else:
            results[model_name] = response

    return results