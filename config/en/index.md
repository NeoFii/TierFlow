---
layout: home

hero:
  name: MindRouter
  text: AI Model Intelligent Routing Platform
  tagline: Unified API access, smart model selection — same quality, 60% lower cost
  image:
    src: /logo.svg
    alt: MindRouter
  actions:
    - theme: brand
      text: Get Started
      link: /en/guide/getting-started
    - theme: alt
      text: Why MindRouter?
      link: /en/guide/introduction

features:
  - icon: 🧠
    title: Intelligent Routing
    details: Automatically selects the optimal model for each request based on P90 latency, token cost, and benchmark scores — no manual switching required.
  - icon: 💰
    title: Cut Costs by 60%
    details: Not every task needs the most powerful model. MindRouter routes simple tasks to cost-effective models and reserves flagship models for complex ones.
  - icon: 🔗
    title: Unified API Interface
    details: OpenAI-compatible API format. Switch with one line of code. No need to maintain separate SDKs and credentials for each provider.
  - icon: ⚡
    title: Latency-Aware Scheduling
    details: Real-time P90 latency monitoring across all model APIs. Automatically fails over to equivalent backup models when a provider experiences spikes or outages.
  - icon: 📊
    title: Multi-Dimensional Quality Assessment
    details: Continuously tracks model capabilities across MMLU, HumanEval, GSM8K, and MT-Bench benchmarks to ensure routing decisions are data-driven.
  - icon: 🏢
    title: Multi-Provider Access
    details: Integrated with OpenAI, Anthropic, Google, Alibaba, ByteDance, Moonshot, DeepSeek, Zhipu AI and more global & Chinese providers.
---

<style>
.model-table-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px;
}

.model-table-wrapper h2 {
  text-align: center;
  font-size: 28px;
  margin-bottom: 8px;
}

.model-table-wrapper .subtitle {
  text-align: center;
  color: var(--vp-c-text-2);
  margin-bottom: 32px;
}

.model-table-wrapper .legend {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 24px;
  flex-wrap: wrap;
  font-size: 14px;
}

.model-table-wrapper .legend span {
  display: flex;
  align-items: center;
  gap: 6px;
}

.model-table-scroll {
  overflow-x: auto;
  display: flex;
  justify-content: center;
}

.model-table {
  border-collapse: collapse;
  font-size: 14px;
  margin: 0 auto;
}

.model-table th,
.model-table td {
  padding: 12px 8px;
  text-align: center;
  border-bottom: 1px solid var(--vp-c-divider);
  white-space: nowrap;
}

.model-table th {
  background: var(--vp-c-bg-soft);
  font-weight: 600;
  position: sticky;
  top: 0;
}

.model-table th:first-child,
.model-table td:first-child {
  text-align: left;
  background: var(--vp-c-bg);
}

.model-table tr:hover {
  background: var(--vp-c-bg-soft);
}

.model-table .model-name {
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

.model-table .provider {
  color: var(--vp-c-text-2);
  font-size: 12px;
}

.model-table .tier {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.tier-flagship {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.tier-balanced {
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  color: white;
}

.tier-efficient {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
}

.score-high {
  color: #10b981;
  font-weight: 600;
}

.score-mid {
  color: #f59e0b;
}

.price-low {
  color: #10b981;
}

.price-mid {
  color: #f59e0b;
}

.price-high {
  color: #ef4444;
}

.badge {
  font-size: 16px;
  margin-left: 4px;
}

.section-divider {
  background: var(--vp-c-bg-soft);
  font-weight: 600;
  color: var(--vp-c-text-2);
}

.section-divider td {
  padding: 8px 12px !important;
  text-align: left !important;
}
</style>

<div class="model-table-wrapper">

## 📊 Model Capabilities & Pricing

<p class="subtitle">MindRouter continuously tracks benchmark scores, API latency, and pricing to intelligently route to the optimal model</p>

<div class="legend">
  <span>🏆 Best Overall</span>
  <span>💎 Best Value</span>
  <span>🚀 Fastest</span>
  <span><span class="tier tier-flagship">Flagship</span> Top Performance</span>
  <span><span class="tier tier-balanced">Balanced</span> Performance & Cost</span>
  <span><span class="tier tier-efficient">Efficient</span> Best Cost-Efficiency</span>
</div>

<div class="model-table-scroll">
<table class="model-table">
  <thead>
    <tr>
      <th>Model</th>
      <th>MMLU</th>
      <th>HumanEval</th>
      <th>GSM8K</th>
      <th>MT-Bench</th>
      <th>Input ($/1M)</th>
      <th>Output ($/1M)</th>
      <th>P90 Latency</th>
      <th>Tier</th>
    </tr>
  </thead>
  <tbody>
    <tr class="section-divider">
      <td colspan="9">🌍 Global Models</td>
    </tr>
    <tr>
      <td>
        <div class="model-name">GPT-4o <span class="badge">🏆</span></div>
        <div class="provider">OpenAI</div>
      </td>
      <td class="score-high">88.7</td>
      <td class="score-high">90.2</td>
      <td class="score-high">95.3</td>
      <td class="score-high">9.3</td>
      <td class="price-mid">$2.50</td>
      <td class="price-high">$10.00</td>
      <td>680ms</td>
      <td><span class="tier tier-flagship">Flagship</span></td>
    </tr>
    <tr>
      <td>
        <div class="model-name">GPT-4o mini <span class="badge">🚀</span></div>
        <div class="provider">OpenAI</div>
      </td>
      <td>82.0</td>
      <td class="score-high">87.2</td>
      <td class="score-high">93.2</td>
      <td>8.7</td>
      <td class="price-low">$0.15</td>
      <td class="price-low">$0.60</td>
      <td class="score-high">320ms</td>
      <td><span class="tier tier-efficient">Efficient</span></td>
    </tr>
    <tr>
      <td>
        <div class="model-name">Claude 3.5 Sonnet</div>
        <div class="provider">Anthropic</div>
      </td>
      <td class="score-high">88.3</td>
      <td class="score-high">92.0</td>
      <td class="score-high">96.4</td>
      <td class="score-high">9.1</td>
      <td class="price-mid">$3.00</td>
      <td class="price-high">$15.00</td>
      <td>720ms</td>
      <td><span class="tier tier-flagship">Flagship</span></td>
    </tr>
    <tr>
      <td>
        <div class="model-name">Claude 3.5 Haiku</div>
        <div class="provider">Anthropic</div>
      </td>
      <td>78.5</td>
      <td>81.0</td>
      <td>88.2</td>
      <td>8.2</td>
      <td class="price-low">$0.25</td>
      <td class="price-low">$1.25</td>
      <td class="score-high">280ms</td>
      <td><span class="tier tier-efficient">Efficient</span></td>
    </tr>
    <tr>
      <td>
        <div class="model-name">Gemini 2.0 Flash <span class="badge">🚀</span></div>
        <div class="provider">Google</div>
      </td>
      <td>85.1</td>
      <td>82.3</td>
      <td>90.1</td>
      <td>8.4</td>
      <td class="price-low">$0.10</td>
      <td class="price-low">$0.40</td>
      <td class="score-high">240ms</td>
      <td><span class="tier tier-efficient">Efficient</span></td>
    </tr>
    <tr>
      <td>
        <div class="model-name">Gemini 1.5 Pro</div>
        <div class="provider">Google</div>
      </td>
      <td class="score-high">86.5</td>
      <td>84.1</td>
      <td class="score-high">92.3</td>
      <td>8.8</td>
      <td class="price-mid">$1.25</td>
      <td class="price-mid">$5.00</td>
      <td>580ms</td>
      <td><span class="tier tier-balanced">Balanced</span></td>
    </tr>
    <tr class="section-divider">
      <td colspan="9">🇨🇳 Chinese Models</td>
    </tr>
    <tr>
      <td>
        <div class="model-name">Qwen-Max</div>
        <div class="provider">Alibaba Cloud</div>
      </td>
      <td class="score-high">86.2</td>
      <td class="score-high">89.5</td>
      <td class="score-high">94.1</td>
      <td class="score-high">9.0</td>
      <td class="price-low">$0.003</td>
      <td class="price-low">$0.009</td>
      <td>450ms</td>
      <td><span class="tier tier-flagship">Flagship</span></td>
    </tr>
    <tr>
      <td>
        <div class="model-name">Qwen-Plus <span class="badge">💎</span></div>
        <div class="provider">Alibaba Cloud</div>
      </td>
      <td>83.8</td>
      <td class="score-high">86.2</td>
      <td class="score-high">91.5</td>
      <td>8.6</td>
      <td class="price-low">$0.0006</td>
      <td class="price-low">$0.002</td>
      <td class="score-high">320ms</td>
      <td><span class="tier tier-balanced">Balanced</span></td>
    </tr>
    <tr>
      <td>
        <div class="model-name">DeepSeek-V3 <span class="badge">💎</span></div>
        <div class="provider">DeepSeek</div>
      </td>
      <td class="score-high">87.1</td>
      <td class="score-high">89.4</td>
      <td class="score-high">94.8</td>
      <td class="score-high">9.0</td>
      <td class="price-low">$0.00014</td>
      <td class="price-low">$0.00028</td>
      <td>380ms</td>
      <td><span class="tier tier-flagship">Flagship</span></td>
    </tr>
    <tr>
      <td>
        <div class="model-name">Doubao Pro</div>
        <div class="provider">ByteDance</div>
      </td>
      <td>84.5</td>
      <td>85.8</td>
      <td class="score-high">92.0</td>
      <td>8.7</td>
      <td class="price-low">$0.00011</td>
      <td class="price-low">$0.00028</td>
      <td class="score-high">260ms</td>
      <td><span class="tier tier-balanced">Balanced</span></td>
    </tr>
    <tr>
      <td>
        <div class="model-name">Kimi (moonshot-v1)</div>
        <div class="provider">Moonshot AI</div>
      </td>
      <td>82.3</td>
      <td>84.0</td>
      <td>89.5</td>
      <td>8.5</td>
      <td class="price-low">$0.0017</td>
      <td class="price-low">$0.0017</td>
      <td>420ms</td>
      <td><span class="tier tier-balanced">Balanced</span></td>
    </tr>
    <tr>
      <td>
        <div class="model-name">GLM-4</div>
        <div class="provider">Zhipu AI</div>
      </td>
      <td>83.0</td>
      <td>82.5</td>
      <td>88.7</td>
      <td>8.4</td>
      <td class="price-low">$0.002</td>
      <td class="price-low">$0.002</td>
      <td>400ms</td>
      <td><span class="tier tier-balanced">Balanced</span></td>
    </tr>
    <tr>
      <td>
        <div class="model-name">ERNIE 4.0</div>
        <div class="provider">Baidu</div>
      </td>
      <td>84.2</td>
      <td>83.6</td>
      <td>90.8</td>
      <td>8.6</td>
      <td class="price-mid">$0.017</td>
      <td class="price-mid">$0.017</td>
      <td>520ms</td>
      <td><span class="tier tier-flagship">Flagship</span></td>
    </tr>
    <tr>
      <td>
        <div class="model-name">MiniMax-abab6.5</div>
        <div class="provider">MiniMax</div>
      </td>
      <td>81.5</td>
      <td>80.2</td>
      <td>87.3</td>
      <td>8.3</td>
      <td class="price-low">$0.0014</td>
      <td class="price-low">$0.0014</td>
      <td>350ms</td>
      <td><span class="tier tier-balanced">Balanced</span></td>
    </tr>
  </tbody>
</table>
</div>

<p style="text-align: center; margin-top: 24px; color: var(--vp-c-text-3); font-size: 13px;">
  * Data shown for illustration purposes. Actual benchmark scores and pricing are subject to each provider's official announcements.<br>
  * Chinese model prices converted to USD at approximate rates. MindRouter continuously tracks and updates this data.
</p>

</div>
