'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '../components/Navbar';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  cover_image: string;
  tags: string[];
}

const initialPosts: BlogPost[] = [
  {
    id: '1',
    title: '如何提高前端开发效率',
    excerpt: '探讨现代前端开发中提高效率的各种方法和工具...',
    date: '2024-01-15',
    cover_image: '/blog/frontend-dev.jpg',
    tags: ['前端开发', '效率工具', 'Web开发']
  },
  {
    id: '2',
    title: '设计系统的重要性',
    excerpt: '一个好的设计系统如何帮助团队提高开发效率和产品一致性...',
    date: '2024-01-10',
    cover_image: '/blog/design-system.jpg',
    tags: ['设计系统', 'UI/UX', '产品设计']
  }
];

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">博客文章</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48">
                <Image
                  src={post.cover_image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-sm rounded-md bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    阅读更多 →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}