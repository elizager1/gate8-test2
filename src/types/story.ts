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
