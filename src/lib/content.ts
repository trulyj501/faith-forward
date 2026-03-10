// Utility to fetch and parse markdown files using Vite's import.meta.glob

export interface ContentItem {
    slug: string;
    title: string;
    excerpt: string;
    tags?: string[];
    publishedDate?: string;
    subtitle?: string;
    image?: string;
    url?: string;
    label?: string;
    color?: string;
    rating?: number;
    content: string; // the raw markdown body
    category: 'services' | 'insights' | 'prompts';
}

// In Vite, this gathers all markdown files in the specified directories
const rawContentModules = import.meta.glob('../../content/**/*.md', {
    as: 'raw',
    eager: true,
});

export const getAllContent = (): ContentItem[] => {
    const allContent: ContentItem[] = [];

    for (const path in rawContentModules) {
        let rawMarkdown = (rawContentModules[path] as string).replace(/\r\n/g, '\n');

        // Determine category from path (.../content/services/qotd.md -> services)
        const categoryMatch = path.match(/content\/(.*?)\//);
        const category = categoryMatch ? categoryMatch[1] : 'unknown';

        // More robust frontmatter split
        const parts = rawMarkdown.split('---\n');

        let metadata: Partial<ContentItem> = {};
        let content = rawMarkdown;

        if (parts.length >= 3 && rawMarkdown.startsWith('---')) {
            const fmString = parts[1];
            content = parts.slice(2).join('---\n').trim();

            // Parse simple key: value pairs from frontmatter
            const lines = fmString.split('\n');
            lines.forEach(line => {
                const colonIndex = line.indexOf(':');
                if (colonIndex !== -1) {
                    const key = line.slice(0, colonIndex).trim();
                    const val = line.slice(colonIndex + 1).trim().replace(/^"|"$/g, '');
                    const cleanKey = key as keyof ContentItem;

                    if (cleanKey === 'tags') {
                        metadata[cleanKey] = val.replace(/^\[|\]$/g, '').split(',').map(s => s.trim().replace(/^"|"$/g, ''));
                    } else if (cleanKey === 'rating') {
                        metadata[cleanKey] = parseFloat(val);
                    } else if (cleanKey === 'publishedDate') {
                        metadata[cleanKey] = val;
                    } else {
                        (metadata as any)[cleanKey] = val;
                    }
                }
            });
        }

        // Default slug to filename if not provided
        if (!metadata.slug) {
            metadata.slug = path.split('/').pop()?.replace('.md', '') || 'unknown';
        }

        allContent.push({
            ...metadata,
            content,
            category: category as any,
        } as ContentItem);
    }

    // Sort by date descending
    return allContent.sort((a, b) => {
        if (!a.publishedDate) return 1;
        if (!b.publishedDate) return -1;
        return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
    });
};

export const getContentByCategory = (category: string) => {
    return getAllContent().filter(item => item.category === category);
};

export const getContentBySlug = (slug: string) => {
    return getAllContent().find(item => item.slug === slug);
};
