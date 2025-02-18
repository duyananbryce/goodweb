'use client';

import Papa from 'papaparse';

export interface PortfolioItem {
  id: number;
  title: string;
  partner: string;
  link: string;
  role: string;
  account: string;
  image?: string;
  cover_image?: string;
  description?: string;
  tags?: string[];
}

export async function loadPortfolioData(): Promise<PortfolioItem[]> {
  try {
    const response = await fetch('/portfolio_data.csv');
    const csvText = await response.text();
    const result = Papa.parse(csvText, { header: true });
    
    const parsedProjects = result.data
      .filter((item: any) => item.title || item['标题']) // 过滤掉没有标题的数据
      .map((item: any, index: number) => ({
        id: index + 1,
        title: item.title || item['标题'],
        partner: item.partner || item['合作方'] || '个人项目',
        link: item.link || item['链接'] || '#',
        role: item.role || item['参与角色'] || '设计师',
        account: item.account || item['账号'] || '',
        image: item.image || item['封面路径'] || null,
        description: item.description || item['描述'] || '',
        tags: item.tags ? (typeof item.tags === 'string' ? item.tags.split(',') : item.tags) : []
      }));

    return parsedProjects;
  } catch (error) {
    console.error('Failed to load portfolio data:', error);
    return [];
  }
}