# Supabase 設定指南

## 1. 建立 Supabase 專案

已完成 ✅ - 專案 URL: `https://gkdkuupburvutpwqemcq.supabase.co`

## 2. 取得 API 金鑰

1. 前往 [Supabase Dashboard](https://supabase.com/dashboard/project/gkdkuupburvutpwqemcq/settings/api)
2. 複製 **Project URL** 和 **anon public** key
3. 更新 `js/supabase-config.js` 中的設定：

```javascript
const SUPABASE_URL = 'https://gkdkuupburvutpwqemcq.supabase.co';
const SUPABASE_ANON_KEY = '你的 anon key';
```

## 3. 設定 Google OAuth

### 3.1 在 Google Cloud Console 建立憑證

1. 前往 [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. 建立專案或選擇現有專案
3. 點擊「建立憑證」→「OAuth 用戶端 ID」
4. 應用程式類型選擇「網頁應用程式」
5. 名稱輸入：`心流存摺`
6. 授權重新導向 URI 新增：
   ```
   https://gkdkuupburvutpwqemcq.supabase.co/auth/v1/callback
   ```
7. 建立後，複製 **Client ID** 和 **Client Secret**

### 3.2 在 Supabase 啟用 Google Provider

1. 前往 [Authentication Providers](https://supabase.com/dashboard/project/gkdkuupburvutpwqemcq/auth/providers)
2. 找到 Google，點擊啟用
3. 填入 Client ID 和 Client Secret
4. 儲存

## 4. 建立資料庫 Schema

在 Supabase 的 [SQL Editor](https://supabase.com/dashboard/project/gkdkuupburvutpwqemcq/sql/new) 執行以下 SQL：

```sql
-- 使用者記錄表
CREATE TABLE IF NOT EXISTS records (
  id BIGINT PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('achievement', 'emotion')),
  time TIMESTAMPTZ NOT NULL,
  
  -- Achievement 欄位
  title TEXT,
  category TEXT,
  skills TEXT[],
  
  -- Emotion 欄位
  emotion_type TEXT,
  emotion_icon TEXT,
  emotion_category TEXT,
  intensity INTEGER,
  context_person TEXT,
  context_place TEXT,
  context_event TEXT,
  context_weather TEXT,
  expectation TEXT,
  action TEXT,
  happy_source TEXT,
  
  -- 同步欄位
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  synced_at TIMESTAMPTZ DEFAULT NOW()
);

-- 啟用 Row Level Security
ALTER TABLE records ENABLE ROW LEVEL SECURITY;

-- RLS 政策：使用者只能存取自己的資料
CREATE POLICY "Users can view own records" ON records
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own records" ON records
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own records" ON records
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own records" ON records
  FOR DELETE USING (auth.uid() = user_id);

-- 索引優化
CREATE INDEX IF NOT EXISTS idx_records_user_id ON records(user_id);
CREATE INDEX IF NOT EXISTS idx_records_time ON records(time DESC);
CREATE INDEX IF NOT EXISTS idx_records_type ON records(type);
```

## 5. 設定 Site URL (重要)

1. 前往 [Authentication Settings](https://supabase.com/dashboard/project/gkdkuupburvutpwqemcq/auth/url-configuration)
2. 設定 **Site URL** 為你的正式網址，例如：
   - GitHub Pages: `https://xxajnin.github.io/flow-journal`
   - 本地開發: `http://localhost:3000`
3. 在 **Redirect URLs** 新增：
   ```
   https://xxajnin.github.io/flow-journal/flow-journal.html
   http://localhost:3000/flow-journal.html
   http://127.0.0.1:5500/flow-journal.html
   ```

## 6. 測試

1. 在本地啟動開發伺服器：
   ```bash
   npx serve .
   ```
2. 開啟 `http://localhost:3000`
3. 測試 Google 登入
4. 確認資料可以正常儲存 and 同步

## 常見問題

### Google 登入後沒有重導向回來
- 確認 Redirect URLs 設定正確
- 確認 Google OAuth 憑證的重新導向 URI 正確

### 資料無法儲存
- 確認 RLS 政策已建立
- 確認 anon key 正確
- 在瀏覽器開發者工具檢查網路請求錯誤

### CORS 錯誤
- Supabase 預設允許所有來源，確認網址格式正確
