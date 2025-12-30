# 部署指南

## 步驟 1: 上傳到 GitHub

### 方法 A: 使用 GitHub Desktop (推薦)
1. 下載安裝 [GitHub Desktop](https://desktop.github.com/)
2. 登入 GitHub 帳號
3. File → Add Local Repository → 選擇 `D:\AI-only\flow-journal`
4. 點擊 "Publish repository"
5. Repository name: `flow-journal`
6. 點擊 "Publish Repository"

### 方法 B: 使用 Git 命令列
```bash
cd D:\AI-only\flow-journal
git init
git add .
git commit -m "v2.0.0: 新增會員系統和雲端同步"
git branch -M main
git remote add origin https://github.com/xxajnin/flow-journal.git
git push -u origin main --force
```

### 方法 C: 直接上傳到 GitHub
1. 前往 https://github.com/xxajnin/flow-journal
2. 刪除所有舊檔案（如果需要）
3. 點擊 "Add file" → "Upload files"
4. 拖曳整個專案資料夾的檔案
5. 點擊 "Commit changes"

---

## 步驟 2: 部署到 Vercel

1. 前往 [Vercel](https://vercel.com)
2. 使用 GitHub 登入
3. 點擊 "Add New..." → "Project"
4. 選擇 `flow-journal` repository
5. Project Name: `flow-journal`
6. 點擊 "Deploy"

部署完成後，你的網站將在:
- https://flow-journal.vercel.app
- 或 https://flow-journal-xxajnin.vercel.app

---

## 步驟 3: 更新重新導向設定

部署後，如果 Vercel 網址不是 `flow-journal.vercel.app`，需要更新：

### Supabase URL Configuration
1. 前往 https://supabase.com/dashboard/project/gkdkuupburvutpwqemcq/auth/url-configuration
2. 更新 Site URL 為實際的 Vercel 網址
3. 新增 Redirect URL: `https://[你的網址]/flow-journal.html`

### Google OAuth Redirect URI
1. 前往 https://console.cloud.google.com/apis/credentials?project=flow-jo-482707
2. 編輯 "心流存摺" OAuth 用戶端
3. 確認重新導向 URI 包含: `https://gkdkuupburvutpwqemcq.supabase.co/auth/v1/callback`

---

## 測試

1. 開啟 Vercel 部署的網址
2. 點擊 "使用 Google 帳號登入"
3. 確認可以成功登入並同步資料
