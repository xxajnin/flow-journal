// 認證模組
window.FlowJournal = window.FlowJournal || {};
window.FlowJournal.auth = {
    async signInWithGoogle() {
        const supabase = window.FlowJournal.supabase.get();
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: { redirectTo: window.location.origin + '/flow-journal.html' }
        });
        if (error) throw error;
        return data;
    },
    async signOut() {
        const supabase = window.FlowJournal.supabase.get();
        await supabase.auth.signOut();
        localStorage.removeItem('flowJournalGuestMode');
        window.location.href = 'auth.html';
    },
    async getUser() {
        const supabase = window.FlowJournal.supabase.get();
        const { data: { user } } = await supabase.auth.getUser();
        return user;
    },
    async getSession() {
        const supabase = window.FlowJournal.supabase.get();
        const { data: { session } } = await supabase.auth.getSession();
        return session;
    },
    async isLoggedIn() {
        const session = await this.getSession();
        return session !== null;
    },
    async getUserInfo() {
        const user = await this.getUser();
        if (!user) return null;
        return {
            id: user.id, email: user.email,
            name: user.user_metadata?.full_name || user.email?.split('@')[0] || '使用者',
            avatar: user.user_metadata?.avatar_url || null
        };
    }
};
