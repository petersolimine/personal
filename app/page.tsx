'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Dither = dynamic(() => import('./Dither'), { ssr: false });
const funSiteUrl = 'https://datboi.org';

const projects = [
  ['Parallel Distribution', 'Bootstrapped SaaS for scaling CPG brands.'],
  ['Indie Hacking', 'Chatti, Parrot, Quizwiz, SayBloom, etc... Consumer apps.'],
  ['Beulr', "Probably why you're here, RIP."],
  ['Chroma Hacker in Residence', 'Chroma is epic'],
];

const socialLinks = [
  { id: 'github', label: 'GitHub', icon: Github, href: 'https://github.com/petersolimine' },
  { id: 'twitter', label: 'Twitter', icon: Twitter, href: 'https://twitter.com/@peterthedecent' },
  { id: 'linkedin', label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/petersolimine' },
  { id: 'email', label: 'Email', icon: Mail, href: 'mailto:petersolimine@gmail.com' },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0">
        <Dither
          waveColor={[0.42, 0.95, 0.36]}
          disableAnimation={false}
          enableMouseInteraction
          mouseRadius={0.34}
          colorNum={4}
          pixelSize={2}
          waveAmplitude={0.22}
          waveFrequency={2.6}
          waveSpeed={0.035}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,5,5,0.18)_0%,rgba(5,5,5,0.78)_72%,#050505_100%)]" />

      <section className="relative z-10 mx-auto grid min-h-screen w-full max-w-6xl grid-rows-[auto_1fr_auto] px-5 py-5 sm:px-8">
        <header className="flex items-center justify-between border-b border-white/10 pb-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/58">
            Peter Solimine
          </p>
          <Link
            href={funSiteUrl}
            className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/38 transition hover:text-[#7aff5a]"
          >
            Learn more
          </Link>
        </header>

        <div className="grid items-center gap-6 py-6 lg:grid-cols-[0.95fr_1.05fr] lg:py-0">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex rounded-full border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#7aff5a] backdrop-blur-md">
              Software engineer / growth hacker / fast clapper
            </p>
            <h1 className="text-5xl font-semibold tracking-[-0.075em] text-white sm:text-6xl lg:text-7xl">
              Hi, I&apos;m Peter Solimine.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-7 text-white/72">
              Ayy, how we doin? I&apos;m Peter. I like to make stuff. Let&apos;s
              be friends!
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="rounded-full border border-white/10 bg-black/30 p-2.5 text-white/58 backdrop-blur-md transition hover:border-[#7aff5a]/50 hover:bg-[#7aff5a]/10 hover:text-[#7aff5a]"
                >
                  <link.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-black/42 p-5 shadow-[0_30px_120px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            <div className="grid gap-3 sm:grid-cols-2">
              {projects.map(([title, description], index) => (
                <article
                  key={title}
                  className="min-h-[128px] rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                >
                  <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-white/32">
                    0{index + 1}
                  </div>
                  <h2 className="text-lg font-semibold tracking-tight text-white">
                    {title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-white/58">{description}</p>
                </article>
              ))}
            </div>

            <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/32">
                Blog
              </div>
              <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                <h2 className="text-lg font-semibold text-white">Coming soon...</h2>
                <p className="text-sm text-white/58">
                  Question: would you rather read, or watch?
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer className="border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-white/34">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <Link href={funSiteUrl} className="transition hover:text-[#7aff5a]">
              Learn more
            </Link>
            <span>petersolimine@gmail.com</span>
          </div>
        </footer>
      </section>
    </main>
  );
}
