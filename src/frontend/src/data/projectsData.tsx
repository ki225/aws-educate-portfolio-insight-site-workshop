export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailDescription: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  images: string[];
  // views: number;
  labels: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projectsData: Record<string, ProjectData> = {
  "sorting-hat-website": {
    id: "sorting-hat-website",
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
    images: ["/images/sorting-hat-1.jpg", "/images/sorting-hat-2.jpg"],
    labels: ["S3", "EC2", "CP"],
    // views: 120,
    liveUrl: "https://sorting-hat.example.com",
    githubUrl: "https://github.com/user/sorting-hat",
  },
  "project-2": {
    id: "project-2",
    title: "E-Commerce Dashboard",
    subtitle: "React & Node.js",
    description:
      "功能完整的電商管理後台系統，提供商品管理、訂單追蹤和銷售數據分析，採用 React + Node.js 全端開發架構。",
    detailDescription: `
      一個功能完整的電商管理後台系統，提供商品管理、訂單追蹤、銷售數據分析等功能。
      前端使用 React 配合 Chart.js 製作數據視覺化圖表，後端使用 Node.js 與 Express 建構 RESTful API，
      資料庫採用 MongoDB 儲存。整個系統具備完整的使用者權限管理、即時數據更新、
      以及響應式設計，能夠適應不同裝置的螢幕尺寸。
    `,
    technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "JWT"],
    features: [
      "商品庫存管理",
      "訂單狀態追蹤",
      "銷售數據視覺化",
      "使用者權限管理",
      "即時通知系統",
      "匯出報表功能",
    ],
    challenges: [
      "大量數據的效能優化",
      "即時數據同步機制",
      "複雜的權限控制邏輯",
      "圖表數據的準確性驗證",
    ],
    images: ["/images/dashboard-1.jpg", "/images/dashboard-2.jpg"],
    labels: ["React", "Node.js", "MongoDB"],
    // views: 150,
    liveUrl: "https://ecommerce-dashboard.example.com",
    githubUrl: "https://github.com/user/ecommerce-dashboard",
  },
  "project-3": {
    id: "project-3",
    title: "Weather Forecast App",
    subtitle: "Mobile-First PWA",
    description:
      "採用 Mobile-First 設計的天氣預報 PWA 應用，整合第三方 API 提供即時天氣資訊，支援離線瀏覽和多城市查詢。",
    detailDescription: `
      一個採用 Mobile-First 設計理念的天氣預報應用程式，整合第三方天氣 API 提供準確的天氣資訊。
      應用程式支援 PWA (Progressive Web App) 功能，使用者可以將其安裝到手機桌面，
      離線時也能瀏覽已快取的天氣資料。介面設計簡潔直觀，支援多城市天氣查詢、
      七天天氣預報、以及天氣警報通知功能。
    `,
    technologies: [
      "Vue.js",
      "PWA",
      "Service Worker",
      "Weather API",
      "Vuex",
      "SCSS",
    ],
    features: [
      "即時天氣資訊查詢",
      "七天天氣預報",
      "多城市管理",
      "離線資料瀏覽",
      "天氣警報推送",
      "地理位置自動偵測",
    ],
    challenges: [
      "Service Worker 的快取策略",
      "不同天氣 API 的資料格式整合",
      "PWA 的跨平台兼容性",
      "離線狀態的使用者體驗設計",
    ],
    images: ["/images/weather-1.jpg", "/images/weather-2.jpg"],
    labels: ["Vue.js", "PWA", "API"],
    // views: 95,
    liveUrl: "https://weather-forecast.example.com",
    githubUrl: "https://github.com/user/weather-forecast",
  },
};
