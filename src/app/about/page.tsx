'use client';

import React from 'react';

interface Skill {
  name: string;
  level: number;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const skills: Skill[] = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  // 可以添加更多技能
];

const experiences: Experience[] = [
  {
    title: '高级前端开发工程师',
    company: '示例科技有限公司',
    period: '2020 - 至今',
    description: '负责公司核心产品的前端架构设计和开发，带领团队完成多个重要项目。'
  },
  // 可以添加更多经历
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          关于我
        </h1>
        
        {/* 个人简介 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            个人简介
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            我是一名充满热情的全栈开发者，专注于创建优秀的用户体验和高性能的应用程序。
            我热爱技术创新，并且持续学习新的开发技术和最佳实践。
          </p>
        </section>

        {/* 技能列表 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            技能专长
          </h2>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-900 dark:text-white font-medium">
                    {skill.name}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-indigo-600 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 工作经历 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            工作经历
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {exp.title}
                </h3>
                <div className="text-gray-500 dark:text-gray-400 mb-2">
                  {exp.company} | {exp.period}
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}