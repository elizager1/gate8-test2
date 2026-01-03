# BE-DEV AGENT - GATES 1-3: Backend Development

## MISSION
Create /api/stories endpoint for POC-BE-001.

## EXECUTION

### Step 1: Create story.ts types
Create file `/workspace/src/types/story.ts`:
```typescript
export interface Story {
  id?: string;
  story_code: string;
  title: string;
  description?: string;
  domain: string;
  status: string;
  current_gate: number;
  story_points?: number;
  assigned_agent?: string;
  created_at?: string;
  updated_at?: string;
}

export interface StoriesResponse {
  success: boolean;
  stories: Story[];
  count: number;
  error?: string;
  timestamp: string;
}
```

### Step 2: Create API route
Create file `/workspace/src/app/api/stories/route.ts`:
```typescript
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET() {
  const timestamp = new Date().toISOString();
  
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
```

### Step 3: Create signal
```bash
echo '{"signal_type":"be_ready","from_agent":"be-dev-agent","story":"POC-BE-001"}' > /workspace/.claude/signal-be-ready.json
```

## EXIT
Create both files and the signal, then exit.
