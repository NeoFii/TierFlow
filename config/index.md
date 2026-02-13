---
layout: home

hero:
  name: TierFlow
  text: AI 模型智能路由平台
  tagline: 统一 API 接入，智能选择最优模型，质量不降，成本直降 60%
  image:
    src: /logo.svg
    alt: TierFlow
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started
    - theme: alt
      text: 为什么选择 TierFlow？
      link: /guide/introduction

features:
  - icon: 🧠
    title: 智能路由
    details: 根据 P90 延迟、Token 成本、Benchmark 评分等多维指标，自动为每次请求选择最优模型，无需手动切换。
  - icon: 💰
    title: 成本直降 60%
    details: 并非所有任务都需要最强模型。TierFlow 将简单任务路由到高性价比模型，复杂任务才启用旗舰模型，大幅降低总花销。
  - icon: 🔗
    title: 统一 API 接口
    details: 兼容 OpenAI API 格式，一行代码切换。无需为每个模型厂商维护独立的 SDK 和密钥管理。
  - icon: ⚡
    title: 延迟感知调度
    details: 实时监测各模型 API 的 P90 延迟，当某个供应商出现延迟飙升或故障时，自动切换到同级别的备用模型。
  - icon: 📊
    title: 多维质量评估
    details: 基于 MMLU、HumanEval、GSM8K、MT-Bench 四大 Benchmark 持续跟踪模型能力，确保路由决策有据可依。
  - icon: 🏢
    title: 多供应商接入
    details: 已接入 OpenAI、Anthropic、Google、阿里云、字节跳动、Moonshot、DeepSeek、智谱 AI 等国内外主流厂商。
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

## 📊 模型能力与定价一览

<p class="subtitle">TierFlow 持续追踪各模型的 Benchmark 评分、API 延迟与定价，智能选择最优模型</p>

<div class="legend">
  <span>🏆 综合最强</span>
  <span>💎 性价比之王</span>
  <span>🚀 速度最快</span>
  <span><span class="tier tier-flagship">旗舰</span> 顶级性能</span>
  <span><span class="tier tier-balanced">均衡</span> 性能与成本平衡</span>
  <span><span class="tier tier-efficient">高效</span> 极致性价比</span>
</div>

<div class="model-table-scroll">
<table class="model-table">
  <thead>
    <tr>
      <th>模型</th>
      <th>MMLU</th>
      <th>HumanEval</th>
      <th>GSM8K</th>
      <th>MT-Bench</th>
      <th>输入 ($/1M)</th>
      <th>输出 ($/1M)</th>
      <th>P90 延迟</th>
      <th>等级</th>
    </tr>
  </thead>
  <tbody>
    <tr class="section-divider">
      <td colspan="9">🌍 国际模型</td>
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
      <td><span class="tier tier-flagship">旗舰</span></td>
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
      <td><span class="tier tier-efficient">高效</span></td>
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
      <td><span class="tier tier-flagship">旗舰</span></td>
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
      <td><span class="tier tier-efficient">高效</span></td>
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
      <td><span class="tier tier-efficient">高效</span></td>
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
      <td><span class="tier tier-balanced">均衡</span></td>
    </tr>
    <tr class="section-divider">
      <td colspan="9">🇨🇳 国产模型</td>
    </tr>
    <tr>
      <td>
        <div class="model-name">Qwen-Max</div>
        <div class="provider">阿里云</div>
      </td>
      <td class="score-high">86.2</td>
      <td class="score-high">89.5</td>
      <td class="score-high">94.1</td>
      <td class="score-high">9.0</td>
      <td class="price-low">¥0.02/千</td>
      <td class="price-low">¥0.06/千</td>
      <td>450ms</td>
      <td><span class="tier tier-flagship">旗舰</span></td>
    </tr>
    <tr>
      <td>
        <div class="model-name">Qwen-Plus <span class="badge">💎</span></div>
        <div class="provider">阿里云</div>
      </td>
      <td>83.8</td>
      <td class="score-high">86.2</td>
      <td class="score-high">91.5</td>
      <td>8.6</td>
      <td class="price-low">¥0.004/千</td>
      <td class="price-low">¥0.012/千</td>
      <td class="score-high">320ms</td>
      <td><span class="tier tier-balanced">均衡</span></td>
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
      <td class="price-low">¥0.001/千</td>
      <td class="price-low">¥0.002/千</td>
      <td>380ms</td>
      <td><span class="tier tier-flagship">旗舰</span></td>
    </tr>
    <tr>
      <td>
        <div class="model-name">豆包 Pro</div>
        <div class="provider">字节跳动</div>
      </td>
      <td>84.5</td>
      <td>85.8</td>
      <td class="score-high">92.0</td>
      <td>8.7</td>
      <td class="price-low">¥0.0008/千</td>
      <td class="price-low">¥0.002/千</td>
      <td class="score-high">260ms</td>
      <td><span class="tier tier-balanced">均衡</span></td>
    </tr>
    <tr>
      <td>
        <div class="model-name">Kimi (moonshot-v1)</div>
        <div class="provider">Moonshot</div>
      </td>
      <td>82.3</td>
      <td>84.0</td>
      <td>89.5</td>
      <td>8.5</td>
      <td class="price-low">¥0.012/千</td>
      <td class="price-low">¥0.012/千</td>
      <td>420ms</td>
      <td><span class="tier tier-balanced">均衡</span></td>
    </tr>
    <tr>
      <td>
        <div class="model-name">GLM-4</div>
        <div class="provider">智谱 AI</div>
      </td>
      <td>83.0</td>
      <td>82.5</td>
      <td>88.7</td>
      <td>8.4</td>
      <td class="price-low">¥0.014/千</td>
      <td class="price-low">¥0.014/千</td>
      <td>400ms</td>
      <td><span class="tier tier-balanced">均衡</span></td>
    </tr>
    <tr>
      <td>
        <div class="model-name">ERNIE 4.0</div>
        <div class="provider">百度</div>
      </td>
      <td>84.2</td>
      <td>83.6</td>
      <td>90.8</td>
      <td>8.6</td>
      <td class="price-mid">¥0.12/千</td>
      <td class="price-mid">¥0.12/千</td>
      <td>520ms</td>
      <td><span class="tier tier-flagship">旗舰</span></td>
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
      <td class="price-low">¥0.01/千</td>
      <td class="price-low">¥0.01/千</td>
      <td>350ms</td>
      <td><span class="tier tier-balanced">均衡</span></td>
    </tr>
  </tbody>
</table>
</div>

<p style="text-align: center; margin-top: 24px; color: var(--vp-c-text-3); font-size: 13px;">
  * 数据为示例展示，实际 Benchmark 评分和定价以各厂商官方公告为准。TierFlow 持续追踪更新。<br>
  * 国际模型定价为美元/百万 tokens，国产模型定价为人民币/千 tokens。
</p>

</div>
