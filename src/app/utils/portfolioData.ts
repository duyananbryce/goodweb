import Papa from 'papaparse';

export interface PortfolioItem {
  title: string;
  collaborator: string;
  link: string;
  role: string;
  account: string;
  cover_image: string;
}

export async function loadPortfolioData(): Promise<PortfolioItem[]> {
  try {
    const response = await fetch('/portfolio_data.csv');
    const csvText = await response.text();
    
    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const items = results.data.map((row: any) => ({
            title: row['标题'] || '',
            collaborator: row['合作方'] || '',
            link: row['链接'] || '',
            role: row['参与角色'] || '',
            account: row['账号'] || '',
            cover_image: row['封面路径'] || ''
          }));
          resolve(items);
        },
        error: (error) => {
          reject(error);
        }
      });
    });
  } catch (error) {
    console.error('Error loading portfolio data:', error);
    return [];
  }
}