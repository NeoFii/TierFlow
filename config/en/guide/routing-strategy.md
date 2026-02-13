# Routing Strategy

::: warning Work in Progress
This page is under construction. Stay tuned!
:::

## Overview

TierFlow's routing engine makes intelligent decisions based on multi-dimensional metrics to select the optimal model for each request.

## Routing Decision Flow

```
User Request → Complexity Assessment → Model Matching → Cost Optimization → Execute
```

### 1. Task Complexity Assessment

The routing engine analyzes request content to evaluate task type and complexity:

| Complexity | Typical Tasks | Recommended Tier |
|------------|---------------|------------------|
| Low | Simple Q&A, translation, format conversion | Efficient |
| Medium | Content generation, code completion, data analysis | Balanced |
| High | Complex reasoning, creative writing, code architecture | Flagship |

### 2. Model Capability Matching

Matches task requirements based on benchmark scores...

### 3. Cost Optimization

Selects the lowest-cost model that meets quality requirements...

### 4. Latency-Aware Scheduling

Real-time monitoring of API status across all models, avoiding high-latency endpoints...

## Custom Routing Rules

Coming soon...
