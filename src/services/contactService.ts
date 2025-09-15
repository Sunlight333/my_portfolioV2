/**
 * @fileoverview Contact service using localStorage for persistence (no backend).
 * Provides CRUD-like helpers compatible with previous Firebase-based API.
 */

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  user_id: string | null;
  created_at: string;
  is_read: boolean;
}

export type ContactMessageInsert = Omit<ContactMessage, 'id' | 'created_at' | 'is_read'>;

const STORAGE_KEY = 'contact_messages_local';

const readAll = (): ContactMessage[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as ContactMessage[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const writeAll = (messages: ContactMessage[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
};

export const contactService = {
  async getAllMessages(): Promise<{ data: ContactMessage[] | null; error: Error | null }> {
    const all = readAll().sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
    return { data: all, error: null };
  },

  async insertMessage(message: ContactMessageInsert): Promise<{ data: ContactMessage | null; error: Error | null }> {
    const all = readAll();
    const newMessage: ContactMessage = {
      ...message,
      id: crypto.randomUUID(),
      created_at: new Date().toISOString(),
      is_read: false,
    };
    all.unshift(newMessage);
    writeAll(all);
    return { data: newMessage, error: null };
  },

  async markAsRead(id: string): Promise<{ data: ContactMessage | null; error: Error | null }> {
    const all = readAll();
    const index = all.findIndex(m => m.id === id);
    if (index === -1) return { data: null, error: new Error('Message not found') };
    all[index].is_read = true;
    writeAll(all);
    return { data: all[index], error: null };
  },

  async deleteMessage(id: string): Promise<{ error: Error | null }> {
    const all = readAll();
    const next = all.filter(m => m.id !== id);
    writeAll(next);
    return { error: null };
  },
};
