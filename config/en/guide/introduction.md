# What is TierFlow?

TierFlow is an **AI model intelligent routing platform**. We integrate APIs from leading LLM providers — OpenAI, Anthropic, Google, DeepSeek, Mistral — and serve developers through a unified interface.

Core value: **Reduce API costs by up to 60% without compromising output quality through intelligent routing.**

## The Problem

Developers using LLM APIs face several common pain points:

| Pain Point | Description |
|------------|-------------|
| **High Costs** | Flagship models (GPT-4o, Claude Opus) are expensive, but many requests don't require that tier |
| **Choice Overload** | More models every month, each with different strengths — hard to pick the right one per task |
| **Vendor Lock-in** | Every provider has different API formats, making migration costly |
| **Availability Risk** | Single-provider outages or rate limits directly impact your business |

## How TierFlow Solves This

```
User Request → TierFlow Engine → Analyze Task Complexity
                                         ↓
                                ┌───────────────────┐
                                │  Routing Engine    │
                                │                   │
                                │  · Complexity     │
                                │    Assessment     │
                                │  · Model Matching │
                                │  · Cost Optimize  │
                                │  · Latency-Aware  │
                                └───────┬───────────┘
                                        ↓
                    ┌─────────┬─────────┴────────┬──────────┐
                    ▼         ▼                  ▼          ▼
                 OpenAI   Anthropic          Google     DeepSeek
                GPT-4o    Claude 3.5       Gemini 2.0   DeepSeek-V3
                GPT-4o    Sonnet            Flash        Chat
                mini      Haiku            Pro
```

1. **Unified API**: OpenAI-compatible format — change one `base_url` and you're in
2. **Smart Routing**: Automatically assesses request complexity and matches the best value model
3. **Failover**: When a provider has issues, automatically switches to an equivalent backup
4. **Cost Transparency**: Real-time dashboard showing model selection and cost breakdown per request

## Routing Decision Factors

TierFlow makes routing decisions based on multiple dimensions:

### Performance Metrics

| Metric | Description | Update Frequency |
|--------|-------------|-----------------|
| **P90 Latency** | 90th percentile response time per model API | Real-time |
| **Availability** | API success rate over the past 24 hours | Every minute |
| **Throughput** | Current tokens/s processing speed | Real-time |

### Cost Metrics

| Model | Input ($/1M tokens) | Output ($/1M tokens) | Tier |
|-------|---------------------|----------------------|------|
| GPT-4o | $2.50 | $10.00 | Flagship |
| Claude 3.5 Sonnet | $3.00 | $15.00 | Flagship |
| Gemini 2.0 Flash | $0.10 | $0.40 | Cost-effective |
| GPT-4o mini | $0.15 | $0.60 | Cost-effective |
| DeepSeek-V3 | $0.27 | $1.10 | Cost-effective |

> Prices are example data for illustration. Refer to each provider's official pricing for actual rates.

### Benchmark Scores

| Model | MMLU | HumanEval | GSM8K | MT-Bench |
|-------|------|-----------|-------|----------|
| GPT-4o | 88.7 | 90.2 | 95.3 | 9.3 |
| Claude 3.5 Sonnet | 88.3 | 92.0 | 96.4 | 9.1 |
| Gemini 2.0 Flash | 85.1 | 82.3 | 90.1 | 8.4 |
| GPT-4o mini | 82.0 | 87.2 | 93.2 | 8.7 |
| DeepSeek-V3 | 87.1 | 89.4 | 94.8 | 9.0 |

> Scores are example data for demonstrating routing decision dimensions.

## Use Cases

- **SaaS Products**: High volume, diverse request types — many simple queries don't need flagship models
- **AI Agents / Workflows**: Multi-step task chains where different steps have different complexity levels
- **Content Platforms**: Standard tasks (translation, summarization) use lightweight models; creative writing uses flagship
- **Enterprise Tools**: Control API budgets while maintaining output quality for critical tasks

## Next Steps

Ready to get started? Head to [Getting Started](/en/guide/getting-started) to integrate in 5 minutes.
