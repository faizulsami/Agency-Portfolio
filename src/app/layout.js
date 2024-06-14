import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Raleway } from 'next/font/google';
import './globals.css';
import Aos from '@/components/aos';

const inter = Inter({ subsets: ['latin'] });

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  icons: {
    icon: ['./favicon.ico'],
    apple:"./favicon.ico"
  },
});

export const metadata = {
  title: 'CraFlex',
  description: 'CRAFT WEBSITES FOR BUSINESS',
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <html lang="en">
        <body className={raleway.variable}>{children} 
          <Aos/>
        </body>
      </html>
    </>
  );
}
