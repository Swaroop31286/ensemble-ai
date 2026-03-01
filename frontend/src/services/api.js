import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export const compareLLMs = async (prompt, models) => {
  const response = await axios.post(`${BASE_URL}/compare`, {
    prompt,
    models,
  });

  return response.data;
};