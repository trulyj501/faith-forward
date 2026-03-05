import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');

content = content.replace(/<AnimatePresence>/g, '');
content = content.replace(/<\/AnimatePresence>/g, '');
content = content.replace(/<motion\.div/g, '<div');
content = content.replace(/<\/motion\.div>/g, '</div>');

// Matches initial={{ ... }} or initial=\{...\}
content = content.replace(/\s*initial=\{\{[\s\S]*?\}\}/g, '');
content = content.replace(/\s*initial=\{[^}]+\}/g, '');

content = content.replace(/\s*exit=\{\{[\s\S]*?\}\}/g, '');
content = content.replace(/\s*exit=\{[^}]+\}/g, '');

content = content.replace(/\s*transition=\{\{[\s\S]*?\}\}/g, '');
content = content.replace(/\s*transition=\{[^}]+\}/g, '');

content = content.replace(/\s*animate=\{\{[\s\S]*?\}\}/g, '');
content = content.replace(/\s*animate=\{[^}]+\}/g, '');

content = content.replace(/import \{ motion, AnimatePresence \} from 'motion\/react';\n?/, '');

fs.writeFileSync('src/App.tsx', content);
console.log('Framer motion stripped.');
