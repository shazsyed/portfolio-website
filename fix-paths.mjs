import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distDir = join(__dirname, 'dist');

function makePathsRelative(filePath) {
  let content = readFileSync(filePath, 'utf-8');
  
  // Replace absolute paths with relative paths
  content = content.replace(/href="\//g, 'href="./');
  content = content.replace(/src="\//g, 'src="./');
  content = content.replace(/from"\//g, 'from"./');
  content = content.replace(/import"\//g, 'import"./');
  
  writeFileSync(filePath, content, 'utf-8');
  console.log(`✓ Fixed paths in: ${filePath}`);
}

function processDirectory(dir) {
  const files = readdirSync(dir);
  
  for (const file of files) {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.css')) {
      makePathsRelative(filePath);
    }
  }
}

console.log('🔧 Converting absolute paths to relative paths...');
processDirectory(distDir);
console.log('✅ Done! Your site now works with file:// protocol.');
