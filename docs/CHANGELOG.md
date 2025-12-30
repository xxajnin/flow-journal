# # 更新日誌 (Changelog)

所有重大變更都會記錄在此檔案中。

格式基於 [Keep a Changelog](https://keepachangelog.com/zh-TW/1.0.0/)。

---

## [2.0.0] - 2025-12-29

### 新增 (Added)
- **會員系統** - 使用 Supabase 作為後端
  - Google OAuth 登入功能
  - 使用者資料隔離 (Row Level Security)
  
- **雲端同步** - 跨裝置資料同步
  - 自動同步機制
  - 離線支援 (本地優先)
  - 本地資料遷移到雲端

- **新增檔案**
  - `auth.html` - 登入頁面
  - `terms.html` - 服務條款頁面
  - `privacy.html` - 隱私政策頁面
  - `vercel.json` - Vercel 部署配置
  - `js/supabase-config.js` - Supabase 客戶端配置
  - `js/auth.js` - 認證模組 (Google OAuth)
  - `js/sync.js` - 雲端同步模組

### 變更 (Changed)
- `flow-journal.html` - 整合認證與同步功能
  - Header 區域新增使用者資訊顯示
  - 新增同步狀態指示器
  - 新增登出按鈕

### 技術細節
- **後端**: Supabase (PostgreSQL)
- **認證**: Supabase Auth + Google OAuth
- **資料同步**: 雙向同步 (localStorage + Supabase)

---

## [1.0.0] - 初始版本

### 功能
- ✨ 記錄完成事項
  - 標題、分類、展現能力
- 💭 記錄情緒時刻
  - 4 種情緒分類
  - 人地事天氣完整記錄
  - 情緒強度滑桿
- 📖 查看過往記錄
  - 時間軸模式
  - 多種篩選方式
- 📥 匯入匯出 (CSV/JSON)
- 💾 本地儲存 (localStorage + IndexedDB)
