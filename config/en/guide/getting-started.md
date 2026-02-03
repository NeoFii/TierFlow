# Getting Started

Switch your existing OpenAI API calls to MindRouter intelligent routing in just 5 minutes.

## Prerequisites

- Experience with any LLM API
- Python 3.8+ or Node.js 18+
- A MindRouter API Key ([sign up](https://mindrouter.ai))

## Step 1: Get Your API Key

Log in to the [MindRouter Console](https://mindrouter.ai/console) and create a new key on the "API Keys" page:

```
MINDROUTER_API_KEY=mr-sk-xxxxxxxxxxxxxxxxxxxxxxxx
```

## Step 2: Replace Base URL

MindRouter is OpenAI API compatible. Just change `base_url` and `api_key` — no other code changes needed.

### Python (OpenAI SDK)

```python
from openai import OpenAI

client = OpenAI(
    api_key="mr-sk-xxxxxxxxxxxxxxxxxxxxxxxx",
    base_url="https://api.mindrouter.ai/v1"
)

response = client.chat.completions.create(
    model="auto",  # MindRouter auto-selects the optimal model
    messages=[
        {"role": "user", "content": "Explain vector databases in one sentence"}
    ]
)

print(response.choices[0].message.content)
```

### Node.js (OpenAI SDK)

```javascript
import OpenAI from "openai";

const client = new OpenAI({
    apiKey: "mr-sk-xxxxxxxxxxxxxxxxxxxxxxxx",
    baseURL: "https://api.mindrouter.ai/v1"
});

const response = await client.chat.completions.create({
    model: "auto",  // MindRouter auto-selects the optimal model
    messages: [
        { role: "user", content: "Explain vector databases in one sentence" }
    ]
});

console.log(response.choices[0].message.content);
```

### cURL

```bash
curl https://api.mindrouter.ai/v1/chat/completions \
  -H "Authorization: Bearer mr-sk-xxxxxxxxxxxxxxxxxxxxxxxx" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "auto",
    "messages": [
      {"role": "user", "content": "Explain vector databases in one sentence"}
    ]
  }'
```

## Step 3: Understand Routing Modes

MindRouter offers three routing modes via the `model` field:

| Mode | model Value | Description |
|------|-------------|-------------|
| **Auto Route** | `auto` | Automatically selects the optimal model based on task complexity (recommended) |
| **Cost Priority** | `auto:cost` | Chooses the cheapest model that meets quality thresholds |
| **Quality Priority** | `auto:quality` | Chooses the highest-scoring model on benchmarks |
| **Direct Model** | `gpt-4o` / `claude-3.5-sonnet` etc. | Routes directly to the specified model, bypassing routing |

```python
# Auto routing (recommended)
response = client.chat.completions.create(
    model="auto",
    messages=[{"role": "user", "content": "Hello"}]
)

# Cost priority
response = client.chat.completions.create(
    model="auto:cost",
    messages=[{"role": "user", "content": "Translate the following to French: ..."}]
)

# Quality priority
response = client.chat.completions.create(
    model="auto:quality",
    messages=[{"role": "user", "content": "Analyze security vulnerabilities in this code and suggest fixes: ..."}]
)

# Direct model (bypass routing)
response = client.chat.completions.create(
    model="claude-3.5-sonnet",
    messages=[{"role": "user", "content": "..."}]
)
```

## Step 4: Inspect Routing Results

Every API response includes routing metadata showing which model was used and the cost:

```json
{
  "id": "chatcmpl-abc123",
  "object": "chat.completion",
  "model": "gpt-4o-mini",
  "choices": [...],
  "usage": {
    "prompt_tokens": 25,
    "completion_tokens": 42,
    "total_tokens": 67
  },
  "mindrouter": {
    "requested_model": "auto",
    "routed_model": "gpt-4o-mini",
    "route_reason": "simple_query",
    "estimated_cost": "$0.000042",
    "saved_vs_flagship": "82%",
    "latency_ms": 320
  }
}
```

Key fields:

| Field | Description |
|-------|-------------|
| `routed_model` | The model that actually handled the request |
| `route_reason` | Why this model was chosen (e.g., `simple_query`, `code_generation`, `complex_reasoning`) |
| `estimated_cost` | Estimated cost for this request |
| `saved_vs_flagship` | Percentage saved compared to using a flagship model directly |

## Step 5: View the Dashboard

Log in to the [MindRouter Console](https://mindrouter.ai/console) to view:

- **Request Distribution**: Percentage breakdown of requests routed to each model
- **Cost Trends**: Daily/weekly API spend over time
- **Savings Report**: Cost comparison vs. using flagship models directly
- **Latency Monitoring**: Real-time P90 latency charts per provider

## FAQ

### Does MindRouter affect response quality?

No. The routing engine evaluates each request's complexity and only downgrades when a lighter model can handle it. You can set quality floor thresholds in the console.

### Is streaming supported?

Yes. Use the `stream=True` parameter just like with the OpenAI API:

```python
stream = client.chat.completions.create(
    model="auto",
    messages=[{"role": "user", "content": "Write a short essay about AI"}],
    stream=True
)

for chunk in stream:
    print(chunk.choices[0].delta.content or "", end="")
```

### How do I set budget limits?

Configure daily/monthly budget caps in the console under "Budget Management". Once exceeded, the API returns `429` status codes.

## Next Steps

- Read [Routing Strategy](/en/guide/routing-strategy) to understand how the routing engine works
- Browse [Model List](/en/guide/models) for all supported models and pricing
- Check the [API Reference](/en/guide/api-reference) for full API documentation
