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
    title: "Hi I'm Peter Solimine",
    description:
      "I'm Peter Solimine and this is my personal website. Visit it daily for good juju. I am a software engineer and growth hacker.",
    type: 'website',
    url: 'https://petersolimine.com',
    image: 'https://petersolimine.com/og-image.jpg',
    images: [
      {
        url: 'https://petersolimine.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Peter Solimine',
      },
    ],
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
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': "Hi I'm Peter Solimine 👋",
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#4285f4',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#4285f4',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
