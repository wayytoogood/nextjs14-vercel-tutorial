import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nextjs Tutorial',
  description: 'My awesome nextjs tutorial!',
};

// **Layout component doesn't re-render when the route changes(for example when navigation with links) so if we want to
// generate new instance of each route we need to use template.js.
// *We can fetch data in layout and pass this data to components that are imported in here but we can not pass this data to pages.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <main className='px-8 py-20 max-w-6xl mx-auto'>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
