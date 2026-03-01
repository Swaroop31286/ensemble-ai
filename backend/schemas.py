from pydantic import BaseModel
from typing import List


class CompareRequest(BaseModel):
    prompt: str
    models: List[str]