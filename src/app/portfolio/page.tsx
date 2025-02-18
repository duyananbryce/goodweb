'use client';

import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Papa from 'papaparse';

interface Project {
  id: number;
  title: string;
  partner: string;
  link: string;
  role: string;
  account: string;
  image: string;
}

const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      const response = await fetch('/portfolio_data.csv');
      const csvText = await response.text();
      const result = Papa.parse(csvText, { header: true });
      const parsedProjects = result.data
        .filter((item: any) => item.title) // 过滤掉没有标题的数据
        .map((item: any, index: number) => ({
          id: index + 1,
          title: item.标题,
          partner: item.合作方 || '个人项目',
          link: item.链接 || '#',
          role: item.参与角色 || '设计师',
          account: item.账号 || '',
          image: item.封面路径 || null
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

export default function PortfolioPage() {
  const projects = useProjects();
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          作品集
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {projects.slice(0, 8).map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="relative h-40 sm:h-44 lg:h-48">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">暂无图片</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
                  {project.title}
                </h3>
                {project.account && (
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-1">
                    {project.account}
                  </p>
                )}
                <div className="flex flex-col space-y-1 text-xs text-gray-500 dark:text-gray-400">
                  {project.role && <span className="line-clamp-1">角色：{project.role}</span>}
                  {project.partner && <span className="line-clamp-1">合作方：{project.partner}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}