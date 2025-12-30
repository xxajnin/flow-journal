// 同步模組
window.FlowJournal = window.FlowJournal || {};
window.FlowJournal.sync = {
    async uploadRecord(record) {
        const supabase = window.FlowJournal.supabase.get();
        const user = await window.FlowJournal.auth.getUser();
        if (!user) return null;
        const dbRecord = { ...record, user_id: user.id };
        const { data, error } = await supabase.from('records').upsert(dbRecord);
        if (error) throw error;
        return data;
    },
    async fullSync() {
        // ... simplified full sync ...
        return null;
    }
};
