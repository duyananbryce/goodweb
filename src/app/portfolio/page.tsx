'use client';

import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { PortfolioItem } from '../utils/portfolioData';

interface Project extends PortfolioItem {}

const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      const response = await fetch('/portfolio_data.csv');
      const csvText = await response.text();
      const result = Papa.parse<Project>(csvText, { header: true });
      const parsedProjects = result.data
        .filter((item: Project) => item.title) // 过滤掉没有标题的数据
        .map((item: Project, index: number) => ({
          id: index + 1,
          title: item.title || item['标题'] || '',
          partner: item.partner || '个人项目',
          link: item.link || '#',
          role: item.role || '设计师',
          account: item.account || '',
          image: item.image || null
        }));
      // 添加"查看更多"选项
      parsedProjects.push({
        id: parsedProjects.length + 1,
        title: '查看更多',
        partner: '',
        link: '#',
        role: '',
        account: '',
        image: '/cover/more.jpg'
      });
      setProjects(parsedProjects);
    };
    loadProjects();
  }, []);

  return projects;
};

export default function Portfolio() {
  const projects = useProjects();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">作品集</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48">
                <Image
                  src={project.image || '/placeholder.jpg'}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.partner}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{project.role}</span>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">查看详情</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}