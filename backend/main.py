from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from schemas import CompareRequest
from aggregator import aggregate_responses

app = FastAPI(title="EnsembleAI Backend")

# CORS (VERY IMPORTANT for React frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development (later restrict)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "EnsembleAI Backend Running"}


@app.post("/compare")
async def compare_llms(request: CompareRequest):
    responses = await aggregate_responses(
        prompt=request.prompt,
        models=request.models
    )
    return responses