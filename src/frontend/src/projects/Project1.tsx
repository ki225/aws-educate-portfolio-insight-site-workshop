// src/projects/Project1.tsx
import React from "react";

export default function Project1(): React.JSX.Element {
  return (
    <article className="project-detail">
      <h1 className="detail-title">智能養蝦系統 (Auto Shrimp Farm)</h1>
      <p className="detail-subtitle">
        利用多台水下攝影機與邊緣運算，實現自動餵料及蝦隻食慾判定。
      </p>

      <section className="detail-section">
        <h2>背景與動機</h2>
        <p>
          傳統蝦場投料大都依照人員經驗定時定量，無法根據實際食慾動態調整，常造成浪費
          或餌料不足。本專案透過多鏡頭影像辨識與 Jetson Orin
          邊緣推論，自動偵測蝦隻進食狀況，
          並控制投料機實時補料，提升飼料利用率與養殖效率。
        </p>
      </section>

      <section className="detail-section">
        <h2>功能特色</h2>
        <ul>
          <li>多台水下攝影機同步影像輸入，避免單點故障。</li>
          <li>SegFormer-B0 模型即時分割餌料佔比，量化食慾指數。</li>
          <li>Jetson Orin Nano Super 邊緣運算，低延遲無需 Wi-Fi 網路。</li>
          <li>自動投料系統，根據預設閾值動態補料。</li>
          <li>Web UI 儀表板，可遠端監控即時影像與食慾趨勢。</li>
        </ul>
      </section>

      <section className="detail-section">
        <h2>技術棧</h2>
        <ul className="tech-list">
          <li>前端：Vite + React + TypeScript</li>
          <li>後端：AWS Lambda + API Gateway + DynamoDB</li>
          <li>深度學習：PyTorch + MMSegmentation + SegFormer</li>
          <li>邊緣設備：Jetson Orin Nano Super (Ubuntu)</li>
          <li>部署：Docker + GitHub Actions CI/CD</li>
        </ul>
      </section>

      <section className="detail-section">
        <h2>未來展望</h2>
        <p>
          - 整合多時段歷史資料進行食慾趨勢分析與預測。
          <br />
          - 加入蝦隻個體識別與健康狀態監測。
          <br />- 打通養殖場管理系統，串接自動上下餌料機與智能水質監控。
        </p>
      </section>
    </article>
  );
}
