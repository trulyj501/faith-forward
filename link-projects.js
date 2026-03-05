import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// 1. Remove PROJECTS_DATA entirely.
content = content.replace(/const PROJECTS_DATA = \([\s\S]*?\}\n\];\n/g, '');

// 2. Replace ProjectsPage projects constant
content = content.replace(/const ProjectsPage = \(\{ lang \}: \{ lang: Language \}\) => \{\n  const projects = PROJECTS_DATA\(lang\);\n/g,
    `const ProjectsPage = ({ lang }: { lang: Language }) => {
  const projects = getContentByCategory('projects');
  const navigate = useNavigate();
`);

// 3. Fix ProjectsPage map
content = content.replace(/\{projects\.map\(\(project, idx\) => \([\s\S]*?key=\{project\.id\}[\s\S]*?className="([^"]+)"[\s\S]*?src=\{project\.image\}[\s\S]*?<h3[^>]+>\{project\.title\}<\/h3>[\s\S]*?<p[^>]+>\s*\{project\.description\}\s*<\/p>[\s\S]*?<a[\s\S]*?href=\{project\.url\}[\s\S]*?className="([^"]+)"[\s\S]*?<span>\{lang === 'ko' \? '상세 보기' : 'View Detail'\}<\/span>[\s\S]*?<\/a>[\s\S]*?<\/div>[\s\S]*?\)\)/g,
    (match, cardClasses, linkClasses) => {
        return `{projects.map((project) => (\n            <div\n              key={project.slug}\n              onClick={() => {\n                navigate(\`/projects/\${project.slug}\`);\n                window.scrollTo({ top: 0, behavior: 'smooth' });\n              }}\n              className="${cardClasses} cursor-pointer"\n            >\n              <div className="w-full aspect-[3/2] sm:aspect-auto h-auto sm:h-full overflow-hidden bg-[#e5eee3] shrink-0">\n                <img\n                  src={(project as any).image}\n                  alt={project.title}\n                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"\n                  referrerPolicy="no-referrer"\n                />\n              </div>\n\n              <div className="w-full h-auto sm:h-full p-5 lg:p-6 flex flex-col text-left justify-between">\n                <h3 className="text-[20px] lg:text-[24px] font-bold text-[#1f2937] mb-2 tracking-tight">{project.title}</h3>\n                <p className="text-slate-600 text-[14px] lg:text-[15px] leading-[1.6] line-clamp-1 md:line-clamp-2 flex-grow tracking-[-0.01em]">\n                  {project.excerpt}\n                </p>\n                <div\n                  className="${linkClasses}"\n                >\n                  <span>{lang === 'ko' ? '상세 보기' : 'View Detail'}</span>\n                  <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover/link:translate-x-1" strokeWidth={1.5} />\n                </div>\n              </div>\n            </div>\n          ))`;
    });

// 4. Replace Projects projects constant
content = content.replace(/const Projects = \(\{ lang \}: \{ lang: Language \}\) => \{\n  const projects = PROJECTS_DATA\(lang\);\n/g,
    `const Projects = ({ lang }: { lang: Language }) => {
  const projects = getContentByCategory('projects');
`);

// 5. Fix Projects Component map
content = content.replace(/\{projects\.map\(\(project, idx\) => \([\s\S]*?key=\{project\.id\}[\s\S]*?onClick=\{[\s\S]*?navigate\(`\/projects`\);[\s\S]*?\}\}[\s\S]*?className="([^"]+)"[\s\S]*?src=\{project\.image\}[\s\S]*?<h3[^>]+>\{project\.title\}<\/h3>[\s\S]*?<p[^>]+>\s*\{project\.description\}\s*<\/p>[\s\S]*?<div[\s\S]*?className="([^"]+)"[\s\S]*?<span>\{lang === 'ko' \? '상세 보기' : 'View Detail'\}<\/span>[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?\)\)/g,
    (match, cardClasses, linkClasses) => {
        return `{projects.map((project) => (\n            <div\n              key={project.slug}\n              onClick={() => {\n                navigate(\`/projects/\${project.slug}\`);\n                window.scrollTo({ top: 0, behavior: 'smooth' });\n              }}\n              className="${cardClasses}"\n            >\n              <div className="w-full aspect-[3/2] sm:aspect-auto h-auto sm:h-full overflow-hidden bg-[#e5eee3] shrink-0">\n                <img\n                  src={(project as any).image}\n                  alt={project.title}\n                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"\n                  referrerPolicy="no-referrer"\n                />\n              </div>\n\n              <div className="w-full h-auto sm:h-full p-5 lg:p-6 flex flex-col text-left justify-between">\n                <h3 className="text-[20px] lg:text-[24px] font-bold text-[#1f2937] mb-2 tracking-tight">{project.title}</h3>\n                <p className="text-slate-600 text-[14px] lg:text-[15px] leading-[1.6] line-clamp-1 md:line-clamp-2 flex-grow tracking-[-0.01em]">\n                  {project.excerpt}\n                </p>\n                <div className="${linkClasses}">\n                  <span>{lang === 'ko' ? '상세 보기' : 'View Detail'}</span>\n                  <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover/link:translate-x-1" strokeWidth={1.5} />\n                </div>\n              </div>\n            </div>\n          ))`;
    });

fs.writeFileSync('src/App.tsx', content);
console.log('App.tsx linked to generic projects array');
