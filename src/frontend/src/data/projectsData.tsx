export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailDescription: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  image: string;
  // views: number;
  labels: string[];
}

export const projectsData: Record<string, ProjectData> = {
  "workshop-cp-1": {
    id: "workshop-cp-1",
    title: "Sorting Hat Website",
    subtitle: "0322 CP Workshop",
    description:
      "一個互動式哈利波特分院帽網站，透過問卷測驗為使用者分配霍格華茲學院，使用 React 開發並部署在 AWS 平台上。",
    detailDescription: `
      這是一個基於哈利波特分院帽的互動式網站，透過一系列精心設計的問題來判斷使用者的霍格華茲學院歸屬。
      專案使用 React 建構前端介面，並部署在 AWS 雲端平台上。整個開發過程中學習了從設計到部署的完整流程，
      包括使用者體驗設計、狀態管理、以及雲端服務的配置。這個專案不僅展現了技術能力，
      也體現了對細節的注重和創意思維的運用。
    `,
    technologies: ["React", "TypeScript", "AWS S3", "AWS EC2", "CSS3"],
    features: [
      "互動式問卷系統",
      "動態結果展示",
      "響應式設計",
      "動畫效果",
      "分院結果分享功能",
    ],
    challenges: [
      "如何設計有趣且準確的問題邏輯",
      "AWS S3 靜態網站托管配置",
      "跨瀏覽器兼容性問題",
      "使用者體驗優化",
    ],
    image: "/images/ws-1.jpg",
    labels: ["S3", "EC2", "CP"],
  },
  "workshop-aif-2": {
    id: "workshop-aif-2",
    title: "AIF Workshop｜Amazon Bedrock + AI Agent 實作體驗",
    subtitle: "AWS Educate 證照陪跑計畫",
    description:
      "以 Amazon Bedrock + AI Agent 打造吉伊卡哇戀愛測驗，結合 LINE Bot 實作與 RAG 概念應用的生成式 AI 教學工作坊。",
    detailDescription: `
      本次 AIF Workshop 工作坊，學員實作了一個結合 Amazon Bedrock + AI Agent 的吉伊卡哇風格戀愛測驗應用，
    並透過 LINE Bot 與心理測驗互動設計，深入理解 LLM Agent、RAG 架構與 AWS 雲端服務整合。
    課程涵蓋生成式 AI、EC2/S3 等 AWS 服務基礎，以及 AI Agent 開發流程，幫助學員累積 AIF 證照所需技能。
    學員也親手打造屬於自己的 AI 心理測驗，收穫滿滿！
    `,
    technologies: [
      "Amazon Bedrock",
      "LangChain",
      "RAG",
      "LINE Messaging API",
      "AWS EC2",
      "AWS S3",
    ],
    features: [
      "Amazon Bedrock + LangChain 整合應用",
      "建立具互動性的 LLM Agent",
      "RAG 檔案檢索架構實作",
      "LINE Bot 心理測驗整合",
      "AWS EC2/S3 基礎操作與部署",
      "AIF 證照考點講解與筆記分享",
    ],
    challenges: [
      "整合多項 AWS 與 AI 技術的串接流程",
      "建構可穩定對話的 Agent 架構",
      "RAG 文件檢索正確性與效能調整",
      "LINE Bot 互動邏輯與訊息格式設計",
    ],
    image: "/images/ws-2.jpg",
    labels: ["Amazon Bedrock", "AI Agent", "AWS Educate"],
  },
  "workshop-aif-1": {
    id: "workshop-aif-1",
    title: "The AI Tour｜用 AI 洞察 Taylor Swift 演唱會商業密碼",
    subtitle: "AIF 工作坊｜AI + 商業決策",
    description:
      "以 Taylor Swift 演唱會為分析案例，透過 AI 技術深入探討市場趨勢與商業洞察，結合 Bedrock Flow、Amplify、全端串接與資料分析實作。",
    detailDescription: `
    本次 AIF 工作坊以「The AI Tour」為題，帶領學員以 Taylor Swift 演唱會為商業案例，實際操作 AI 技術應用。
    在 Tech 組講師 Richie、Claire、Kiki 的引導下，學員從 AWS Amplify 部署開始，
    串接 Bedrock Flow 並完成前後端整合，最終透過 Chatbot 與 AI 互動，學習如何應用機器學習與數據分析，
    協助做出更具洞察力的商業決策。整場活動充滿趣味性與實作深度，是一場含金量十足的 AI 工作坊！
  `,
    technologies: [
      "Amazon Bedrock",
      "AWS Amplify",
      "AWS S3",
      "Bedrock Flow",
      "Chatbot",
      "Machine Learning",
      "Frontend-Backend Integration",
    ],
    features: [
      "AI 商業決策案例實作（以 Taylor Swift 為例）",
      "使用 AWS Amplify 快速部署應用",
      "整合 Amazon Bedrock Flow 進行對話應用",
      "實作資料分析與市場趨勢預測",
      "前後端串接、打造互動式 Chatbot",
      "增進 AI 工具應用於商業分析的實務能力",
    ],
    challenges: [
      "資料分析與視覺化呈現的準確性與易用性",
      "Bedrock Flow 模型調整與回應優化",
      "前後端整合部署與 Debug",
      "在商業情境下使用 AI 的情境建構與推論",
    ],
    image: "/images/ws-3.jpg",
    labels: ["AI for Business", "Amazon Bedrock", "Amplify"],
  },
};
