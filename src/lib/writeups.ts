import { getCollection } from 'astro:content';
import fs from 'node:fs';
import path from 'node:path';

export interface WriteupItem {
  kind: 'md' | 'pdf';
  id: string;
  href: string;
  pdfUrl?: string;
  data: {
    title: string;
    description: string;
    publishDate: Date;
    platform: string;
    difficulty: string;
    os: string;
    tags: string[];
    targetIp?: string;
  };
}

const PDF_DIR = path.join(process.cwd(), 'public', 'writeups-pdf');
const META_FILE = path.join(process.cwd(), 'src', 'data', 'pdf-writeups.json');

export function slugify(s: string) {
  return s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function getPdfWriteups(): WriteupItem[] {
  if (!fs.existsSync(PDF_DIR)) return [];

  const meta: Record<string, any> = fs.existsSync(META_FILE)
    ? JSON.parse(fs.readFileSync(META_FILE, 'utf-8'))
    : {};

  return fs
    .readdirSync(PDF_DIR)
    .filter((f) => f.toLowerCase().endsWith('.pdf'))
    .map((file) => {
      const base = file.replace(/\.pdf$/i, '');
      const m = meta[file] ?? {};
      const stat = fs.statSync(path.join(PDF_DIR, file));
      const id = slugify(base);
      return {
        kind: 'pdf' as const,
        id,
        href: `/writeups/pdf/${id}`,
        pdfUrl: `/writeups-pdf/${encodeURIComponent(file)}`,
        data: {
          title: m.title ?? base,
          description: m.description ?? `Writeup en PDF: ${base}.`,
          publishDate: new Date(m.publishDate ?? stat.mtime),
          platform: m.platform ?? 'CTF',
          difficulty: m.difficulty ?? 'Info',
          os: m.os ?? 'N/A',
          tags: m.tags ?? ['PDF'],
          targetIp: m.targetIp,
        },
      };
    });
}

export async function getAllWriteups(): Promise<WriteupItem[]> {
  const md = await getCollection('writeups');
  const mdItems: WriteupItem[] = md.map((w: any) => ({
    kind: 'md' as const,
    id: w.id,
    href: `/writeups/${w.id}`,
    data: w.data,
  }));

  return [...mdItems, ...getPdfWriteups()].sort(
    (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime()
  );
}

export function getPdfItems() {
  return getPdfWriteups();
}
