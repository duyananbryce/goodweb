'use client';

import Image from "next/image";
import BlogSection from "./components/BlogSection";
import PodcastSection from "./components/PodcastSection";
import PortfolioSection from "./components/PortfolioSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      {/* 导航栏 */}
      <nav className="fixed top-0 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-md z-50 border-b border-gray-200/50 dark:border-gray-800/50 transition-all duration-300 hover:bg-white/80 dark:hover:bg-gray-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="/portfolio" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200 hover:scale-105 transform">作品集</a>
              <a href="/blog" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200 hover:scale-105 transform">博客</a>
              <a href="/podcast" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200 hover:scale-105 transform">播客</a>
              <a href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200 hover:scale-105 transform">关于我</a>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="pt-16">
        {/* 项目经历部分 */}
        <section className="py-20 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-900/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">项目经历</h2>
            <div className="space-y-12">
              {/* 抖音个人账号 */}
              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl shadow-lg flex items-center justify-center transform transition-transform group-hover:scale-105">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.43v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 015.2-2.32V6.54a7.93 7.93 0 006.59 4.7v-3.4a4.83 4.83 0 01.61-1.15z"/>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">个人抖音账号运营</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">大学期间，运营自己的抖音账号，半年时间达成100w粉丝</p>
                </div>
              </div>

              {/* 猿辅导内容策划 */}
              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg flex items-center justify-center transform transition-transform group-hover:scale-105">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">猿辅导-内容策划</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">负责运营@小猿搜题APP的抖音平台和B站频道。2020年8月开始运营，发布视频300+，累计播放量9000w+，涨粉23w，点赞1000w+，最高单视频播放量1300W</p>
                </div>
              </div>

              {/* 站酷网视频策划 */}
              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl shadow-lg flex items-center justify-center transform transition-transform group-hover:scale-105">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">站酷网-视频策划</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">运营官方抖音、B站账号。从零起步，抖音粉丝累计8w，播放1200w；B站粉丝2.5w，播放1100w+</p>
                </div>
              </div>

              {/* 猿辅导电商直播 */}
              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl shadow-lg flex items-center justify-center transform transition-transform group-hover:scale-105">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">猿辅导-电商直播编导</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">负责直播间搭建、产品素材制作、素材投放、品牌活动拍摄</p>
                </div>
              </div>

              {/* 品牌合作 */}
              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl shadow-lg flex items-center justify-center transform transition-transform group-hover:scale-105">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">品牌合作</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">与钉钉、天猫、即时设计、广东共青团等账号多次进行内容合作</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 作品集部分 */}
        <PortfolioSection />

        {/* 博客部分 */}
        <BlogSection />

        {/* 播客部分 */}
        <PodcastSection />

        {/* 联系方式部分 */}
        <section id="contact" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">联系我</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 邮箱 */}
              <a href="mailto:example@example.com" className="group">
                <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">邮箱</h3>
                  <p className="text-gray-600 dark:text-gray-300">example@example.com</p>
                </div>
              </a>

              {/* 微信 */}
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">微信</h3>
                <p className="text-gray-600 dark:text-gray-300">my_wechat_id</p>
              </div>

              {/* GitHub */}
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="group">
                <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">GitHub</h3>
                  <p className="text-gray-600 dark:text-gray-300">github.com/yourusername</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
