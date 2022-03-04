export interface ResponseFromAPI {
  hits: Hit[];
}

export interface Hit {
  story_title: string;
  created_at: string;
  author: string;
  url: string;
  id: string;
  story_url: string;
  parent_id: number;
}
