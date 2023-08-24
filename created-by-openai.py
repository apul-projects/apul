import os
import openai

openai.api_key = os.getenv("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")

response = openai.ChatCompletion.create(
  model="gpt-4",
  messages=[],
  temperature=0,
  max_tokens=2048
)
