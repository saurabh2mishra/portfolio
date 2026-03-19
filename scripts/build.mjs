import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const dist = resolve(root, 'dist');

if (existsSync(dist)) {
  rmSync(dist, { recursive: true, force: true });
}

mkdirSync(dist, { recursive: true });

for (const entry of ['index.html', 'blog.html', 'skills.html', 'src', 'resources', 'public']) {
  cpSync(resolve(root, entry), resolve(dist, entry), { recursive: true });
}

console.log('Static portfolio build complete: dist/');
