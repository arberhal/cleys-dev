export async function GET(): Promise<Response> {

    //2023-07-06T21:58:40.071Z

    const pages = [
        { url: '/', lastmod: '2024-05-15', changefreq: 'weekly', priority: 1.0 },
        { url: '/projects', lastmod: '2024-05-15', changefreq: 'weekly', priority: 0.9 },
        { url: '/services', lastmod: '2024-05-15', changefreq: 'weekly', priority: 0.9 },
        { url: '/contact', lastmod: '2024-05-15', changefreq: 'weekly', priority: 0.5 },
        { url: '/ueberuns', lastmod: '2024-05-15', changefreq: 'weekly', priority: 0.9 },
    
    ];

   
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages.map(page => `
            <url>
                <loc>${new URL(page.url, 'https://cleys.ch').href}</loc>
                <lastmod>${page.lastmod}</lastmod>
                <changefreq>${page.changefreq}</changefreq>
                <priority>${page.priority}</priority>
            </url>
        `).join('')}
    </urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
}
