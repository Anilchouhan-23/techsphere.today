const fs = require('fs');
const path = require('path');

const targetDirs = [
  path.join(__dirname, 'src'),
  path.join(__dirname, 'public'),
];

const targetFilesList = [
  path.join(__dirname, 'index.html'),
  path.join(__dirname, 'package.json'),
  path.join(__dirname, 'README.md'),
];

function replaceInFile(filePath) {
  if (filePath.endsWith('.png') || filePath.endsWith('.jpg') || filePath.endsWith('.ico') || filePath.endsWith('.zip')) {
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Specific full-phrase replacements first
  content = content.replace(/TechSelection Store/g, 'TechSphere');
  content = content.replace(/TechSelection/g, 'TechSphere');
  content = content.replace(/techselection\.store/g, 'techsphere.today');
  content = content.replace(/techselection/gi, 'techsphere');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else {
      replaceInFile(filePath);
    }
  }
}

console.log('Starting mass replacement...');
targetDirs.forEach(dir => walkDir(dir));
targetFilesList.forEach(file => {
  if (fs.existsSync(file)) replaceInFile(file);
});
console.log('Mass replacement complete!');
