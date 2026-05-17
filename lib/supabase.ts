import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_URL !== 'your_supabase_project_url' 
  ? process.env.NEXT_PUBLIC_SUPABASE_URL 
  : 'https://placeholder-project.supabase.co'

const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== 'your_supabase_anon_key'
  ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY 
  : 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
