/**
 * Iaso Story API Client
 * n8n Proxy를 통해 Notion DB에서 Story 데이터를 가져옵니다.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_N8N_STORY_API || 'https://n8n.kjyoo.cloud/webhook';

export interface Story {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  thumbnail: string;
  date: string;
  publicUrl?: string;
}

export interface StoryDetail extends Story {
  id: string;
  content: string;
}

export interface StoriesResponse {
  success: boolean;
  count: number;
  stories: Story[];
}

export interface StoryDetailResponse {
  success: boolean;
  story: StoryDetail;
  error?: string;
}

/**
 * Story 목록 가져오기
 */
export async function fetchStories(): Promise<Story[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/iaso-stories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // 항상 최신 데이터
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: StoriesResponse = await response.json();

    if (!data.success) {
      throw new Error('API returned unsuccessful response');
    }

    return data.stories;
  } catch (error) {
    console.error('Failed to fetch stories:', error);
    // 에러 시 빈 배열 반환 (fallback)
    return [];
  }
}

/**
 * Story 상세 가져오기
 */
export async function fetchStoryBySlug(slug: string): Promise<StoryDetail | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/iaso-story/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: StoryDetailResponse = await response.json();

    if (!data.success) {
      return null;
    }

    return data.story;
  } catch (error) {
    console.error('Failed to fetch story:', error);
    return null;
  }
}
