import React from 'react';

interface PodcastEpisode {
  title: string;
  description: string;
  duration: string;
  date: string;
  episodeNumber: number;
}

const podcastEpisodes: PodcastEpisode[] = [
  {
    title: '探索前端工程化的未来',
    description: '讨论现代前端开发中的工程化实践，以及未来发展趋势。',
    duration: '45:30',
    date: '2024-03-20',
    episodeNumber: 12
  },
  {
    title: '从零开始学习人工智能',
    description: '深入浅出地讲解AI基础知识，帮助开发者快速入门。',
    duration: '38:15',
    date: '2024-03-13',
    episodeNumber: 11
  },
  {
    title: '技术创业者的成长之路',
    description: '分享技术创业过程中的经验教训和成功要素。',
    duration: '42:45',
    date: '2024-03-06',
    episodeNumber: 10
  }
];

export default function PodcastSection() {
  return (
    <section id="podcast" className="py-24 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 animate-fade-in-up">
          播客节目
        </h2>
        <div className="space-y-6 animate-fade-in-up delay-200">
          {podcastEpisodes.map((episode, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-102 hover:shadow-xl group">
              <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <span>第 {episode.episodeNumber} 期</span>
                    <span className="mx-2">·</span>
                    <span>{episode.date}</span>
                    <span className="mx-2">·</span>
                    <span>{episode.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {episode.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                    {episode.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200">
                    收听
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}