// src/app/[locale]/layout.tsx
import { headers } from 'next/headers';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import '../globals.css';
import Navbar from './navbar';
import { NavigationMenuDemo } from './menubar';
import Footer from './footer';
import { Prompt } from 'next/font/google';
import { SidebarProvider } from '@/components/ui/sidebar';

const prompt = Prompt({
  weight: ['300', '400'],
  subsets: ['latin', 'thai'],
  variable: '--font-prompt',  // ประกาศชื่อ CSS variable ที่จะใช้
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();

  const locale = (await headersList).get('x-next-intl-locale') || 'en';

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${prompt.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SidebarProvider className='flex flex-col'>
            <div className='sticky top-0 z-50'>
              <Navbar />
              <div className='bg-[#99cc00] hidden lg:block'>
                <div className="max-w-screen-2xl w-full flex mx-auto ">
                  <NavigationMenuDemo />
                </div>
              </div>
            </div>
            <main>
              {children}
            </main>
            <Footer />
          </SidebarProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
