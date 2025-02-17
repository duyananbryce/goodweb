'use client';

import React from 'react';
import Image from 'next/image';

interface Podcast {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  duration: string;
  date: string;
  episodeNumber: number;
}

const podcasts: Podcast[] = [
  {
    id: 1,
    title: '技术播客示例',
    description: '在这一集中，我们讨论了最新的技术趋势和开发经验分享。',
    coverImage: '/project1.jpg',
    duration: '45分钟',
    date: '2024-01-20',
    episodeNumber: 1
  },
  // 可以添加更多播客
];

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          播客节目
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {podcasts.map((podcast) => (
            <div
              key={podcast.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="relative h-48">
                <Image
                  src={podcast.coverImage}
                  alt={podcast.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span>第 {podcast.episodeNumber} 集</span>
                  <span>{podcast.duration}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {podcast.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {podcast.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {podcast.date}
                  </span>
                  <button
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                    onClick={() => console.log(`Play podcast ${podcast.id}`)}
                  >
                    收听节目
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}