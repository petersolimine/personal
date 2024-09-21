'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const tabs = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'blog', label: 'Blog' },
];

const socialLinks = [
  { id: 'github', icon: Github, href: 'https://github.com/petersolimine' },
  { id: 'twitter', icon: Twitter, href: 'https://twitter.com/@peterthedecent' },
  {
    id: 'linkedin',
    icon: Linkedin,
    href: 'https://linkedin.com/in/petersolimine',
  },
  { id: 'email', icon: Mail, href: 'mailto:petersolimine@gmail.com' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');
  const [sidebarLeft, setSidebarLeft] = useState('calc(50% - 532px)');

  useEffect(() => {
    const updateSidebarPosition = () => {
      const mainContentWidth = 1064; // 2 * 532px
      const viewportWidth = window.innerWidth;
      const newLeft = Math.max(0, (viewportWidth - mainContentWidth) / 2);
      setSidebarLeft(`${newLeft}px`);
    };

    updateSidebarPosition();
    window.addEventListener('resize', updateSidebarPosition);

    return () => window.removeEventListener('resize', updateSidebarPosition);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white font-['Inter',sans-serif]">
      {/* SVG Background Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1283 610"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="pulseGradient">
              <stop offset="10%" stopColor="#58F0D4"></stop>
              <stop offset="95%" stopColor="#58F0D400"></stop>
            </radialGradient>
            <linearGradient gradientTransform="rotate(90)" id="fadeGradient">
              <stop offset="0%" stopColor="#888888"></stop>
              <stop offset="50%" stopColor="white"></stop>
              <stop offset="100%" stopColor="#888888"></stop>
            </linearGradient>
            <mask id="vignette">
              <rect
                fill="url('#fadeGradient')"
                height="610"
                width="1283"
                x="0"
                y="0"
              ></rect>
            </mask>
            <mask id="v-clip">
              <path
                className="pulse-fade"
                d="M184.5 114.5H2C154.667 262.5 458 556.385 494 591C530 625.615 612.5 613 612.5 541.5V114.5H485.5V406L184.5 114.5Z"
                stroke="white"
                vectorEffect="non-scaling-stroke"
              ></path>
            </mask>
            <mask id="o-clip">
              <path
                className="pulse-fade"
                d="M653.5 114.5H1075L774 410V1C774 1 954.5 1 1075 1C1195.5 1 1282 114.5 1282 207C1282 299.5 1282 495.5 1282 495.5H868.5L1162 207V609.5C1162 609.5 998 609.5 868.5 609.5C739 609.5 653.5 487 653.5 410C653.5 333 653.5 114.5 653.5 114.5Z"
                stroke="white"
                vectorEffect="non-scaling-stroke"
              ></path>
            </mask>
          </defs>
          <style>
            {`
              .vPath {
                offset-path: path('M184.5 114.5H2C154.667 262.5 458 556.385 494 591C530 625.615 612.5 613 612.5 541.5V114.5H485.5V406L184.5 114.5Z');
                animation: followpath 5s linear infinite, pulse-fade 3s linear infinite;
                opacity: 0;
              }

              .oPath {
                offset-path: path('M653.5 114.5H1075L774 410V1C774 1 954.5 1 1075 1C1195.5 1 1282 114.5 1282 207C1282 299.5 1282 495.5 1282 495.5H868.5L1162 207V609.5C1162 609.5 998 609.5 868.5 609.5C739 609.5 653.5 487 653.5 410C653.5 333 653.5 114.5 653.5 114.5Z');
                animation: followpath 10s linear infinite, pulse-fade 3s linear infinite;
                animation-delay: 1.5s;
                opacity: 0;
              }

              .dashed {
                stroke-dasharray: 3;
                stroke-width: 1;
              }
              .pulse-fade {
                stroke-width: 3;
              }

              @-moz-document url-prefix() {
                .dashed {
                  stroke-dasharray: 6;
                  stroke-width: 2;
                }
                .pulse-fade {
                  stroke-width: 6;
                }
              }

              @media (prefers-reduced-motion) {
                .vPath {
                  opacity: 0;
                }
                .oPath {
                  opacity: 0;
                }
              }

              @keyframes followpath {
                to {
                  offset-distance: 100%;
                }
              }

              @keyframes pulse-fade {
                0%, 30%, 100% { opacity: 0; }
                40% { opacity: 1; }
              }
            `}
          </style>
          <g mask="url(#vignette)">
            <g mask="url(#v-clip)">
              <circle
                className="vPath"
                fill="url('#pulseGradient')"
                r="100"
              ></circle>
            </g>
            <g mask="url(#o-clip)">
              <circle
                className="oPath"
                fill="url('#pulseGradient')"
                r="100"
              ></circle>
            </g>
            <path
              className="dashed"
              d="M184.5 114.5H2C154.667 262.5 458 556.385 494 591C530 625.615 612.5 613 612.5 541.5V114.5H485.5V406L184.5 114.5Z"
              stroke="rgb(var(--gray-300))"
              vectorEffect="non-scaling-stroke"
            ></path>
            <path
              className="dashed"
              d="M653.5 114.5H1075L774 410V1C774 1 954.5 1 1075 1C1195.5 1 1282 114.5 1282 207C1282 299.5 1282 495.5 1282 495.5H868.5L1162 207V609.5C1162 609.5 998 609.5 868.5 609.5C739 609.5 653.5 487 653.5 410C653.5 333 653.5 114.5 653.5 114.5Z"
              stroke="rgb(var(--gray-300))"
              vectorEffect="non-scaling-stroke"
            ></path>
          </g>
        </svg>
      </div>

      {/* Responsive Header */}
      <header className="relative z-10 lg:hidden flex justify-center items-center p-4 bg-black bg-opacity-80 backdrop-blur-sm">
        <nav className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-2 rounded-full text-sm transition-colors ${
                activeTab === tab.id
                  ? 'bg-white text-black'
                  : 'hover:bg-gray-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      {/* Content for Mobile and Tablet */}
      <div className="lg:hidden flex items-center justify-center px-4 md:px-8 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'about' && (
              <div>
                <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
                <p className="text-lg">
                  Ayy, how we doin? I&apos;m Pete. I like to make stuff.
                  Let&apos;s be friends!
                </p>
              </div>
            )}
            {activeTab === 'projects' && (
              <div>
                <h2 className="text-3xl font-bold mb-4 text-white">
                  My Projects
                </h2>
                <ul className="space-y-4">
                  <li>
                    <h3 className="text-xl font-semibold text-white">
                      Parallel Distribution
                    </h3>
                    <p>Bootstrapped SaaS for scaling CPG brands.</p>
                  </li>
                  <li>
                    <h3 className="text-xl font-semibold text-white">
                      Indie Hacking
                    </h3>
                    <p>
                      Chatti, Parrot, Quizwiz, SayBloom, etc... Consumer apps.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-xl font-semibold text-white">Beulr</h3>
                    <p>Probably why you&apos;re here, RIP.</p>
                  </li>
                  <li>
                    <h3 className="text-xl font-semibold text-white">
                      Chroma Hacker in Residence
                    </h3>
                    <p>Chroma is epic</p>
                  </li>
                </ul>
              </div>
            )}
            {activeTab === 'blog' && (
              <div>
                <h2 className="text-3xl font-bold mb-4 text-white">Blog</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Coming soon...
                    </h3>
                    <p>Question: would you rather read, or watch?</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:justify-center mt-32">
        {/* Sidebar */}
        <nav
          className="fixed w-48 bg-black bg-opacity-80 backdrop-blur-sm rounded-l-2xl z-10 ml-16"
          style={{ left: sidebarLeft }}
        >
          {/* Sidebar content */}
          <div className="space-y-8">
            <h1 className="text-2xl font-bold text-white">Peter Solimine</h1>
            <ul className="space-y-4">
              {tabs.map((tab) => (
                <li key={tab.id} className="w-full">
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full p-2 text-left rounded-full transition-colors ${
                      activeTab === tab.id
                        ? 'bg-white text-black'
                        : 'hover:bg-gray-800'
                    }`}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-start space-x-4 mt-8">
            {socialLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
            ))}
          </div>
        </nav>

        {/* Main Content Wrapper */}
        <div className="w-full flex justify-center min-h-screen">
          {/* Main Content */}
          <main className="bg-black bg-opacity-80 backdrop-blur-sm rounded-r-2xl ml-48 w-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="min-h-[400px]"
              >
                {activeTab === 'about' && (
                  <div>
                    <h2 className="text-3xl font-bold mb-4 text-white">
                      About Me
                    </h2>
                    <p className="text-lg">
                      Ayy, how we doin? I&apos;m Pete. I like to make stuff.
                      Let&apos;s be friends!
                    </p>
                  </div>
                )}
                {activeTab === 'projects' && (
                  <div>
                    <h2 className="text-3xl font-bold mb-4 text-white">
                      My Projects
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <h3 className="text-xl font-semibold text-white">
                          Parallel Distribution
                        </h3>
                        <p>Bootstrapped SaaS for scaling CPG brands.</p>
                      </li>
                      <li>
                        <h3 className="text-xl font-semibold text-white">
                          Indie Hacking
                        </h3>
                        <p>
                          Chatti, Parrot, Quizwiz, SayBloom, etc... Consumer
                          apps.
                        </p>
                      </li>
                      <li>
                        <h3 className="text-xl font-semibold text-white">
                          Beulr
                        </h3>
                        <p>Probably why you&apos;re here, RIP.</p>
                      </li>
                      <li>
                        <h3 className="text-xl font-semibold text-white">
                          Chroma Hacker in Residence
                        </h3>
                        <p>Chroma is epic</p>
                      </li>
                    </ul>
                  </div>
                )}
                {activeTab === 'blog' && (
                  <div>
                    <h2 className="text-3xl font-bold mb-4 text-white">Blog</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          Coming soon...
                        </h3>
                        <p>Question: would you rather read, or watch?</p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse-fade {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
        .vPath,
        .oPath {
          animation: pulse-fade 3s infinite;
        }
        .oPath {
          animation-delay: 1.5s;
        }
        @media (prefers-reduced-motion: reduce) {
          .vPath,
          .oPath {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
