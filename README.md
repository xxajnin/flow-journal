# 心流存摺 FlowMind

一個幫助你記錄成長與管理情緒的個人日誌 PWA 應用。

![心流存摺](https://img.shields.io/badge/version-2.0.0-green)
![License](https://img.shields.io/badge/license-Personal-blue)

## ✨ 功能特色

### 📝 記錄完成事項
- 記錄每日成就
- 標記展現的能力
- 分類管理

### 💭 記錄情緒時刻
- 4 種情緒分類：快樂感恩、焦慮失落、期待平靜、其他
- 記錄情緒強度
- 人地事天氣完整記錄
- 焦慮時提供行動建議

### 📖 查看過往記錄
- 時間軸模式
- 多種篩選方式
- 行動建議統計
- 編輯功能

### 🔐 會員系統 (v2.0 新增)
- Google 帳號一鍵登入
- 跨裝置資料同步
- 雲端安全儲存

### 📥 匯入匯出
- 支援 CSV 格式
- 支援 JSON 格式
- 智慧合併資料

## 🚀 使用方式

### 線上使用
訪問: [https://flow-journal.vercel.app](https://flow-journal.vercel.app)

### 手機安裝 (PWA)
1. 用 Safari (iOS) 或 Chrome (Android) 開啟網址
2. 點擊「加入主畫面」
3. 就像原生 App 一樣使用

## 🔒 資料安全

- 使用 Google OAuth 安全認證
- 資料儲存在 Supabase 安全伺服器
- Row Level Security 確保資料隔離
- 支援離線使用（資料自動同步）
- 訪客模式資料僅存本地

## 🛠 技術架構

- **前端**: 純 HTML/CSS/JavaScript (無框架)
- **後端**: Supabase (PostgreSQL)
- **認證**: Google OAuth via Supabase Auth
- **部署**: Vercel
- **PWA**: 離線優先架構

## 📁 專案結構

```
flow-journal/
├── index.html          # 入口頁面
├── auth.html           # 登入頁面
├── flow-journal.html   # 主應用程式
├── terms.html          # 服務條款
├── privacy.html        # 隱私政策
├── manifest.json       # PWA 配置
├── vercel.json         # Vercel 部署配置
├── js/
│   ├── supabase-config.js  # Supabase 配置
│   ├── auth.js             # 認證模組
│   └── sync.js             # 同步模組
├── css/                # 樣式檔案
└── docs/
    ├── CHANGELOG.md    # 更新日誌
    └── SETUP_SUPABASE.md  # Supabase 設定指南
```

## 📄 授權

個人使用專案

Created with ❤️ for personal growth and emotional wellness
