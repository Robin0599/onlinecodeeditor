import os
import openai

openai.api_key = "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"

response = openai.Completion.create(
  model="text-davinci-003",
  prompt="code to import jquery",
  temperature=0.7,
  max_tokens=256,
  top_p=1,
  frequency_penalty=0,
  presence_penalty=0
)
print(response['choices'][0]['text'])