'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { loadPortfolioData } from '../utils/portfolioData';

type PortfolioItem = {
  title: string;
  image?: string;
  cover_image?: string;
  link: string;
  description: string;
  tags: string[];
  partner: string;
  role: string;
  account: string;
};

const initialItems = [
  {
    title: '雪容融设计概念解读',
    image: '/cover/001.jpg',
    link: 'https://www.bilibili.com/video/BV1si4y1y7b9',
    description: '即时设计',
    tags: ['总策划'],
    partner: '即时设计',
    role: '总策划',
    account: '新来的设计师'
  },
  {
    title: '钉钉教师节祝福',
    image: '/cover/002.jpg',
    link: 'https://www.bilibili.com/video/BV1ZQ4y167CD',
    description: '钉钉',
    tags: ['策划', '剪辑'],
    partner: '钉钉',
    role: '策划',
    account: '钉钉DingTalk'
  },
  {
    title: '老电视里的彩条画面，到底是啥意思？',
    image: '/cover/008.jpg',
    link: 'https://www.bilibili.com/video/BV1nv4y1A732',
    description: '钉钉',
    tags: ['总策划', '配音'],
    partner: '钉钉',
    role: '总策划',
    account: '钉钉DingTalk'
  },
  {
    title: '开工奥运会夺冠精彩瞬间',
    image: '/cover/004.jpg',
    link: 'https://www.bilibili.com/video/BV1RR4y1L7NB',
    description: '钉钉',
    tags: ['文案'],
    partner: '钉钉',
    role: '文案',
    account: '钉钉DingTalk'
  },
  {
    title: 'T3出行情人节比惨大赛',
    image: '/cover/005.jpg',
    link: 'https://www.bilibili.com/video/BV11L4y1s7wu',
    description: 'T3出行',
    tags: ['策划', '配音'],
    partner: 'T3出行',
    role: '策划',
    account: '钉钉DingTalk'
  },
  {
    title: '对话冬奥火炬设计师',
    image: '/cover/006.jpg',
    link: 'https://www.bilibili.com/video/BV1Ya41127Nc',
    description: '阿里云',
    tags: ['总策划', '配音'],
    partner: '阿里云',
    role: '总策划',
    account: '阿里云摩斯扫地僧'
  },
  {
    title: '圆角矩形是UI的终极形态吗？',
    image: '/cover/009.jpg',
    link: 'https://www.bilibili.com/video/BV1HS4y147b2',
    description: '即时设计',
    tags: ['总策划', '配音'],
    partner: '即时设计',
    role: '总策划',
    account: '乘风'
  }
];

export default function PortfolioSection() {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    loadPortfolioData().then(items => {
      if (items && items.length > 0) {
        setPortfolioItems(items);
      } else {
        setPortfolioItems(initialItems);
      }
    }).catch(error => {
      console.error('Failed to load portfolio data:', error);
      setPortfolioItems(initialItems);
    });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">作品集</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {portfolioItems.slice(0, 7).map((item, index) => (
            <Link href={item.link} key={index} className="group">
              <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={item.image || item.cover_image || '/placeholder.jpg'}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.partner && (
                    <span className="px-2 py-1 text-sm rounded-md bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">
                      {item.partner}
                    </span>
                  )}
                  {item.role && (
                    <span className="px-2 py-1 text-sm rounded-md bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                      {item.role}
                    </span>
                  )}
                  {item.account && (
                    <span className="px-2 py-1 text-sm rounded-md bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300">
                      {item.account}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
          <Link href="/portfolio" className="group">
            <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <div className="text-white text-xl font-semibold">查看更多</div>
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                更多作品集
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-sm rounded-md bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                  全部作品
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}