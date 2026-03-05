import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Add import
if (!content.includes("import { getContentByCategory }")) {
    content = content.replace("import ContentDetail from './pages/ContentDetail';", "import ContentDetail from './pages/ContentDetail';\nimport { getContentByCategory } from './lib/content';");
}


// Replace LatestInsights
content = content.replace(/const LatestInsights = \(\{ lang \}: \{ lang: Language \}\) => \{\n  const posts = INSIGHTS_DATA\(lang\);\n  const navigate = useNavigate\(\);/g,
    `const LatestInsights = ({ lang }: { lang: Language }) => {
  const posts = getContentByCategory('insights').slice(0, 3);
  const navigate = useNavigate();`);

// Replace InsightsPage
content = content.replace(/const InsightsPage = \(\{ lang \}: \{ lang: Language \}\) => \{\n  const posts = INSIGHTS_DATA\(lang\);/g,
    `const InsightsPage = ({ lang }: { lang: Language }) => {
  const posts = getContentByCategory('insights');
  const navigate = useNavigate();`);

// Remove INSIGHTS_DATA
content = content.replace(/const INSIGHTS_DATA = \(lang: Language\) => \[([\s\S]*?)\];/g, '');

// Fix mapping in both components
content = content.replace(/\{posts\.map\(\(post.*?\) => \([\s\S]*?key=\{post\.id\}[\s\S]*?onClick=\{.*?navigate\(\`\/insights\`.*?\}[\s\S]*?className="(.*?)"\s*>\s*<div className="mb-6">\s*<span className=\{cn\(".*?", post\.color\)\}>\s*\{post\.category\}\s*<\/span>[\s\S]*?<h3.*?>\s*\{post\.title\}\s*<\/h3>\s*<p.*?>\s*\{post\.excerpt\}\s*<\/p>\s*<div.*?>\s*<span.*?>\{post\.date\}<\/span>/g,
    (match, classNames) => {
        return `{posts.map((post) => (\n            <div\n              key={post.slug}\n              onClick={() => {\n                navigate(\`/insights/\${post.slug}\`);\n                window.scrollTo({ top: 0, behavior: 'smooth' });\n              }}\n              className="${classNames}"\n            >\n              <div className="mb-6">\n                <span className={cn("px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest", (post as any).color || 'bg-black/5 text-black/60')}>\n                  {(post as any).label || post.category}\n                </span>\n              </div>\n              <h3 className="text-xl font-sans font-bold mb-4 group-hover:text-emerald-600 transition-colors leading-tight tracking-tight text-[#1D1D1F]">\n                {post.title}\n              </h3>\n              <p className="text-black/50 text-sm mb-8 leading-relaxed line-clamp-3 flex-grow">\n                {post.excerpt}\n              </p>\n              <div className="pt-6 border-t border-black/[0.05] flex items-center justify-between mt-auto">\n                <span className="text-[10px] font-bold uppercase tracking-widest text-black/20">\n                  {post.publishedDate ? new Date(post.publishedDate).toLocaleDateString(lang === 'ko' ? 'ko-KR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}\n                </span>`;
    });

fs.writeFileSync('src/App.tsx', content);
console.log('App.tsx dynamically linked to markdown insights');
