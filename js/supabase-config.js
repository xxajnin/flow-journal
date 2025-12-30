// Supabase 配置
const SUPABASE_URL = 'https://gkdkuupburvutpwqemcq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrZGt1dXBidXJ2dXRwd3FlbWNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5ODgzNzksImV4cCI6MjA4MjU2NDM3OX0.AKghi7WexovnuSI4JoVMnSt4tpaMo6bbNhsUXvoDP-g';

function loadSupabaseSDK() {
    return new Promise((resolve, reject) => {
        if (window.supabase) { resolve(window.supabase); return; }
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
        script.onload = () => resolve(window.supabase);
        script.onerror = () => reject(new Error('Failed to load Supabase SDK'));
        document.head.appendChild(script);
    });
}

let supabaseClient = null;
async function initSupabase() {
    if (supabaseClient) return supabaseClient;
    await loadSupabaseSDK();
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return supabaseClient;
}
function getSupabase() {
    if (!supabaseClient) throw new Error('Supabase not initialized');
    return supabaseClient;
}

window.FlowJournal = window.FlowJournal || {};
window.FlowJournal.supabase = { init: initSupabase, get: getSupabase, SUPABASE_URL, SUPABASE_ANON_KEY };
