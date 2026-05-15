import { createBrowserClient, createServerClient, type CookieOptions } from '@supabase/ssr'
import { createClient as createSupabaseJsClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing required Supabase environment variables: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

export function createStaticServerSupabaseClient() {
  return createSupabaseJsClient(supabaseUrl, supabaseAnonKey)
}

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    supabaseUrl,
    supabaseServiceRoleKey ?? supabaseAnonKey,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch {
            // The `set` method was called from a Server Component.
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch {
            // The `remove` method was called from a Server Component.
          }
        },
      },
    }
  )
}

export function createBrowserSupabaseClient() {
  return createBrowserClient(
    supabaseUrl,
    supabaseAnonKey
  )
}
