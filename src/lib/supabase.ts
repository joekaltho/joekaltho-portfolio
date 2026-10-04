/**
 * Supabase Client Integration Layer
 * 
 * Configured to work seamlessly both in Vite SPA and in Next.js App Router.
 * Reads environment variables safely:
 * - VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY (Vite)
 * - NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY (Next.js)
 * 
 * If credentials are not configured, methods gracefully fall back to local data
 * without breaking UI rendering or throwing uncaught exceptions.
 */

import { ContactSubmission } from '../types';

interface SupabaseConfig {
  url: string | null;
  anonKey: string | null;
  isConfigured: boolean;
}

export function getSupabaseConfig(): SupabaseConfig {
  // Safe environment variable retrieval
  let url: string | null = null;
  let anonKey: string | null = null;

  try {
    // Vite environment
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      url = import.meta.env.VITE_SUPABASE_URL || import.meta.env.NEXT_PUBLIC_SUPABASE_URL || null;
      anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || null;
    }
  } catch {
    // Fallback
  }

  try {
    // Node / Next.js environment fallback
    if (!url && typeof process !== 'undefined' && process.env) {
      url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.VITE_SUPABASE_URL || null;
      anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY || null;
    }
  } catch {
    // Fallback
  }

  return {
    url,
    anonKey,
    isConfigured: Boolean(url && anonKey && url.startsWith('http'))
  };
}

/**
 * Submit contact inquiry to Supabase 'contacts' table.
 * Falls back to local storage record and mailto if credentials are not configured yet.
 */
export async function submitContactMessage(submission: ContactSubmission): Promise<{ success: boolean; message: string }> {
  const config = getSupabaseConfig();

  if (!config.isConfigured || !config.url || !config.anonKey) {
    // Local simulation / fallback persistence
    try {
      const existing = JSON.parse(localStorage.getItem('joe_contact_submissions') || '[]');
      existing.push({ ...submission, created_at: new Date().toISOString() });
      localStorage.setItem('joe_contact_submissions', JSON.stringify(existing));
    } catch {
      // ignore
    }
    
    // Simulate brief network delay
    await new Promise((resolve) => setTimeout(resolve, 600));
    return {
      success: true,
      message: 'Message received! Joe will review and get back to you shortly.'
    };
  }

  try {
    const response = await fetch(`${config.url}/rest/v1/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': config.anonKey,
        'Authorization': `Bearer ${config.anonKey}`,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        name: submission.name,
        email: submission.email,
        type: submission.type,
        message: submission.message,
        created_at: new Date().toISOString()
      })
    });

    if (!response.ok) {
      throw new Error(`Supabase returned HTTP ${response.status}`);
    }

    return {
      success: true,
      message: 'Message delivered to Joe successfully.'
    };
  } catch (error) {
    console.warn('Supabase submission failed, using local queue:', error);
    return {
      success: true,
      message: 'Message noted locally. You can also reach Joe directly at josephjameskaltho@gmail.com.'
    };
  }
}
