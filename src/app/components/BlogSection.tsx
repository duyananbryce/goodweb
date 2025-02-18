import React from 'react';
import Image from 'next/image';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    title: '构建现代化Web应用的最佳实践',
    excerpt: '探索最新的Web开发技术栈和架构模式，提升应用性能和用户体验。',
    date: '2024-03-15',
    readTime: '8 min',
    category: '技术',
    imageUrl: '/blog-1.jpg'
  },
  {
    title: '设计系统与组件库开发指南',
    excerpt: '如何构建一个可扩展的设计系统，实现组件的高效复用和维护。',
    date: '2024-03-10',
    readTime: '12 min',
    category: '设计',
    imageUrl: '/blog-2.jpg'
  },
  {
    title: 'AI驱动的开发工具革新',
    excerpt: '人工智能如何改变软件开发流程，提高开发效率和代码质量。',
    date: '2024-03-05',
    readTime: '10 min',
    category: 'AI',
    imageUrl: '/blog-3.jpg'
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 animate-fade-in-up">
          最新博客
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up delay-200">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl group">
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-gray-900/90 rounded-full text-sm font-medium text-purple-600 dark:text-purple-400">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 space-x-4">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <button className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-200">
                  阅读更多
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}