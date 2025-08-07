import { useEffect, useState } from 'react';
import type { BlogPostMeta } from '../types';
import { formatDate } from '@utils/seo';

const markdownPosts = Object.entries(
  import.meta.glob('../content/blog/*.md', { eager: true, as: 'raw' })
);

function parseFrontMatter(raw: string): { meta: BlogPostMeta; body: string } | null {
  // Very small front-matter parser: expects ---\nkey: value\n---
  const match = raw.match(/^---[\s\S]*?---/);
  if (!match) return null;
  const header = match[0];
  const body = raw.slice(match[0].length).trim();
  const meta: any = {};
  header
    .replace(/^---|---$/g, '')
    .trim()
    .split('\n')
    .forEach((line) => {
      const [k, ...rest] = line.split(':');
      meta[k.trim()] = rest.join(':').trim();
    });
  meta.tags = (meta.tags || '').split(',').map((t: string) => t.trim()).filter(Boolean);
  return { meta: meta as BlogPostMeta, body };
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPostMeta[]>([]);

  useEffect(() => {
    const metas: BlogPostMeta[] = [];
    for (const [path, mod] of markdownPosts) {
      const parsed = parseFrontMatter(mod as unknown as string);
      if (parsed) metas.push(parsed.meta);
    }
    metas.sort((a, b) => (a.date < b.date ? 1 : -1));
    setPosts(metas);
  }, []);

  return (
    <section id="blog" className="section">
      <div className="container-responsive">
        <h2 className="text-2xl font-bold mb-6">Blog & Articles</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.slug} className="glass p-5">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-slate-400 text-sm">{formatDate(p.date)}</p>
              <p className="mt-2 text-slate-300">{p.summary}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}