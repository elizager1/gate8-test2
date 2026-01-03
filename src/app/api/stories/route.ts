import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function GET() {
  const timestamp = new Date().toISOString();
  
  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Handle missing env vars gracefully
  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({
      success: true,
      stories: [],
      count: 0,
      message: 'Supabase not configured - add SUPABASE_URL and SUPABASE_ANON_KEY env vars',
      timestamp
    }, { status: 200 });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    const { data: stories, error, count } = await supabase
      .from('stories')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json({
        success: false,
        stories: [],
        count: 0,
        error: error.message,
        timestamp
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      stories: stories || [],
      count: count || 0,
      timestamp
    }, { status: 200 });

  } catch (err) {
    return NextResponse.json({
      success: false,
      stories: [],
      count: 0,
      error: err instanceof Error ? err.message : 'Unknown error',
      timestamp
    }, { status: 500 });
  }
}
