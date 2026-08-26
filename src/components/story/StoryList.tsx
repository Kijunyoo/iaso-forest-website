'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';
import { fetchStories, Story } from '@/lib/api/stories';

const categoryColors: Record<string, string> = {
  가이드: 'bg-blue-100 text-blue-700',
  정보: 'bg-green-100 text-green-700',
  인터뷰: 'bg-purple-100 text-purple-700',
  FAQ: 'bg-amber-100 text-amber-700',
};

// Skeleton Loading Component
function StoryCardSkeleton() {
  return (
    <div className="bg-white rounded-iaso overflow-hidden shadow-iaso-sm animate-pulse">
      <div className="aspect-video bg-gray-200" />
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-16 h-5 bg-gray-200 rounded" />
          <div className="w-20 h-4 bg-gray-200 rounded" />
        </div>
        <div className="w-full h-6 bg-gray-200 rounded mb-2" />
        <div className="w-3/4 h-6 bg-gray-200 rounded mb-4" />
        <div className="w-full h-4 bg-gray-200 rounded mb-2" />
        <div className="w-2/3 h-4 bg-gray-200 rounded mb-4" />
        <div className="w-24 h-4 bg-gray-200 rounded" />
      </div>
    </div>
  );
}

// Story Card Component
function StoryCard({ story }: { story: Story }) {
  const href = story.publicUrl || `/story/${story.slug}`;
  const isExternal = !!story.publicUrl;

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group bg-white rounded-iaso overflow-hidden shadow-iaso-sm hover:shadow-iaso-lg transition-all hover:-translate-y-1"
    >
      {/* 썸네일 */}
      <div className="relative aspect-video overflow-hidden">
        {story.thumbnail ? (
          <Image
            src={story.thumbnail}
            alt={story.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No Image</span>
          </div>
        )}
      </div>

      {/* 콘텐츠 */}
      <div className="p-6">
        {/* 카테고리 & 날짜 */}
        <div className="flex items-center gap-3 mb-3">
          <span
            className={`px-2 py-0.5 text-xs font-medium rounded ${
              categoryColors[story.category] || 'bg-gray-100 text-gray-700'
            }`}
          >
            {story.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-iaso-text-light">
            <Calendar className="w-3 h-3" />
            {story.date}
          </span>
        </div>

        {/* 제목 */}
        <h3 className="font-bold text-lg text-iaso-text mb-2 group-hover:text-iaso-green transition-colors line-clamp-2">
          {story.title}
        </h3>

        {/* 발췌 */}
        <p className="text-sm text-iaso-text-light line-clamp-2 mb-4">
          {story.excerpt}
        </p>

        {/* 더보기 */}
        <span className="inline-flex items-center gap-1 text-sm text-iaso-green font-medium group-hover:gap-2 transition-all">
          자세히 보기
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </a>
  );
}

// Main StoryList Component
export default function StoryList() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadStories() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchStories();
        setStories(data);
      } catch (err) {
        setError('스토리를 불러오는데 실패했습니다.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadStories();
  }, []);

  // Loading State
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <StoryCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-iaso-green text-white rounded-iaso hover:bg-iaso-green-600 transition-colors"
        >
          다시 시도
        </button>
      </div>
    );
  }

  // Empty State
  if (stories.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-iaso-text-light">등록된 스토리가 없습니다.</p>
      </div>
    );
  }

  // Success State
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {stories.map((story) => (
        <StoryCard key={story.slug} story={story} />
      ))}
    </div>
  );
}
