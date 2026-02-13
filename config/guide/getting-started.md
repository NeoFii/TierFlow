# 快速开始

只需 5 分钟，将现有的 OpenAI API 调用切换到 TierFlow 智能路由。

## 前置条件

- 已有任意大模型 API 的使用经验
- Python 3.8+ 或 Node.js 18+
- 一个 TierFlow API Key（[注册获取](https://tierflow.ai)）

## 第一步：获取 API Key

登录 [TierFlow 控制台](https://tierflow.ai/console)，在「API 密钥」页面创建新的密钥：

```
TIERFLOW_API_KEY=tf-sk-xxxxxxxxxxxxxxxxxxxxxxxx
```

## 第二步：替换 Base URL

TierFlow 兼容 OpenAI API 格式。只需修改 `base_url` 和 `api_key`，无需更改其他代码。

### Python (OpenAI SDK)

```python
from openai import OpenAI

client = OpenAI(
    api_key="tf-sk-xxxxxxxxxxxxxxxxxxxxxxxx",
    base_url="https://api.tierflow.ai/v1"
)

response = client.chat.completions.create(
    model="auto",  # TierFlow 自动选择最优模型
    messages=[
        {"role": "user", "content": "用一句话解释什么是向量数据库"}
    ]
)

print(response.choices[0].message.content)
```

### Node.js (OpenAI SDK)

```javascript
import OpenAI from "openai";

const client = new OpenAI({
    apiKey: "tf-sk-xxxxxxxxxxxxxxxxxxxxxxxx",
    baseURL: "https://api.tierflow.ai/v1"
});

const response = await client.chat.completions.create({
    model: "auto",  // TierFlow 自动选择最优模型
    messages: [
        { role: "user", content: "用一句话解释什么是向量数据库" }
    ]
});

console.log(response.choices[0].message.content);
```

### cURL

```bash
curl https://api.tierflow.ai/v1/chat/completions \
  -H "Authorization: Bearer tf-sk-xxxxxxxxxxxxxxxxxxxxxxxx" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "auto",
    "messages": [
      {"role": "user", "content": "用一句话解释什么是向量数据库"}
    ]
  }'
```

## 第三步：理解路由模式

TierFlow 提供三种路由模式，通过 `model` 字段指定：

| 模式 | model 值 | 说明 |
|------|----------|------|
| **自动路由** | `auto` | 根据任务复杂度自动选择最优模型（推荐） |
| **成本优先** | `auto:cost` | 在满足质量下限的前提下，优先选择最便宜的模型 |
| **质量优先** | `auto:quality` | 优先选择 Benchmark 评分最高的模型 |
| **指定模型** | `gpt-4o` / `claude-3.5-sonnet` 等 | 直接指定目标模型，跳过路由 |

```python
# 自动路由（推荐）
response = client.chat.completions.create(
    model="auto",
    messages=[{"role": "user", "content": "你好"}]
)

# 成本优先
response = client.chat.completions.create(
    model="auto:cost",
    messages=[{"role": "user", "content": "把以下内容翻译成英文：..."}]
)

# 质量优先
response = client.chat.completions.create(
    model="auto:quality",
    messages=[{"role": "user", "content": "请分析这段代码的安全漏洞并给出修复方案：..."}]
)

# 指定模型（跳过路由）
response = client.chat.completions.create(
    model="claude-3.5-sonnet",
    messages=[{"role": "user", "content": "..."}]
)
```

```python
# 自动路由（推荐）
response = client.chat.completions.create(
    model="auto",
    messages=[{"role": "user", "content": "你好"}]
)

# 成本优先
response = client.chat.completions.create(
    model="auto:cost",
    messages=[{"role": "user", "content": "把以下内容翻译成英文：..."}]
)

# 质量优先
response = client.chat.completions.create(
    model="auto:quality",
    messages=[{"role": "user", "content": "请分析这段代码的安全漏洞并给出修复方案：..."}]
)

# 指定模型（跳过路由）
response = client.chat.completions.create(
    model="claude-3.5-sonnet",
    messages=[{"role": "user", "content": "..."}]
)
```

## 第四步：查看路由结果

每次 API 响应中都会包含路由元信息，告诉你实际使用了哪个模型以及费用：

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
  "tierflow": {
    "requested_model": "auto",
    "routed_model": "gpt-4o-mini",
    "route_reason": "simple_query",
    "estimated_cost": "$0.000042",
    "saved_vs_flagship": "82%",
    "latency_ms": 320
  }
}
```

关键字段说明：

| 字段 | 说明 |
|------|------|
| `routed_model` | 实际执行请求的模型 |
| `route_reason` | 路由原因（如 `simple_query`、`code_generation`、`complex_reasoning`） |
| `estimated_cost` | 本次请求的预估费用 |
| `saved_vs_flagship` | 相比直接使用旗舰模型节省的费用百分比 |

## 第五步：查看仪表盘

登录 [TierFlow 控制台](https://tierflow.ai/console) 查看：

- **请求分布**：各模型被路由到的次数占比
- **成本趋势**：每日/每周的 API 花费变化
- **节省报告**：对比直接使用旗舰模型的费用节省
- **延迟监控**：各供应商的 P90 延迟实时图表

## 常见问题

### TierFlow 会影响响应质量吗？

不会。TierFlow 的路由引擎会评估每个请求的复杂度，只在模型能力足以胜任时才进行降级路由。你可以在控制台设置质量下限阈值。

### 支持流式输出吗？

支持。使用 `stream=True` 参数即可，与 OpenAI API 用法完全一致：

```python
stream = client.chat.completions.create(
    model="auto",
    messages=[{"role": "user", "content": "写一篇关于AI的短文"}],
    stream=True
)

for chunk in stream:
    print(chunk.choices[0].delta.content or "", end="")
```

### 如何设置预算上限？

在控制台「预算管理」中设置每日/每月预算上限，超过限额后 API 将返回 `429` 状态码。

## 下一步

- 查看 [路由策略详解](/guide/routing-strategy) 了解路由引擎的工作原理
- 查看 [模型列表](/guide/models) 了解所有支持的模型和定价
- 查看 [API 参考](/guide/api-reference) 了解完整的 API 文档
