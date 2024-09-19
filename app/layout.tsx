import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ayy, how we doin?',
  description: 'Hi I am Peter, software engineer, growth hacker, fast clapper.',
  keywords: [
    'software engineer',
    'growth hacking',
    'web development',
    'Indie Hacking',
    'Peter Solimine',
    'Beulr',
  ],
  author: 'Peter Solimine',
  openGraph: {
    title:
      'Peter Solimine - Software engineer, growth hacker, fast clapping enthusiast',
    description:
      "I'm Peter Solimine and this is my personal website. Visit it daily for good juju",
    type: 'website',
    url: 'https://petersolimine.com',
    image: 'https://petersolimine.com/og-image.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@peterthedecent',
    creator: '@peterthedecent',
  },
  robots: 'index, follow',
  themeColor: '#4285f4',
  viewport: 'width=device-width, initial-scale=1',
  canonical: 'https://petersolimine.com',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
