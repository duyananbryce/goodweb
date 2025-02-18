import React from 'react';

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
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${post.imageUrl})` }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{post.category}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                  <button className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                    阅读更多 →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}