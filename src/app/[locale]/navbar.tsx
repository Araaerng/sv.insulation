"use client";
import { AppSidebar } from '@/components/ui/app-sidebar';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { startTransition } from 'react';

export default function Navbar() {
  const t = useTranslations('nevbar');
  const router = useRouter();
  const pathname = usePathname();

  const onSelectChange = (nextLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = nextLocale;
    const newPath = segments.join('/');

    startTransition(() => {
      router.replace(newPath);
    });
  };

  return (
    <nav>
      <div className="bg-[#bfbfbf]">
        <div className="max-w-screen-2xl flex items-center justify-between mx-auto p-2 sm:p-4">
          <Link href="/" className="flex items-end space-x-3 rtl:space-x-reverse">
            <Image src="/logo/sv-logo.png" className="w-auto h-[60px] sm:h-[80px] md:h-[96px] lg:h-[128px]" alt="sv logo" width={128} height={128} />
            <div className="flex flex-col ">
              <span className="sm:text-2xl lg:text-5xl font-semibold whitespace-nowrap">SV.Insulation</span>
              <span className="sm:text-xl lg:text-4xl font-semibold whitespace-nowrap">บริษัท เอสวี.อินซูเลชั่น จำกัด</span>
            </div>
          </Link>
          <div className="hidden md:flex gap-4">
            <div className="md:flex gap-2">
              {t('contact')}
              <div className="flex  flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Image src="/phone.png" alt="phone" width={32} height={32} />
                  <div>
                    <a href="tel:0659568799" className="hover:underline whitespace-nowrap">065-956-8799</a>
                    ,
                    {' '}
                    <a href="tel:0812579700" className="hover:underline whitespace-nowrap">081-2579-700</a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/mail.png" alt="mail" width={32} height={32} />
                  <a href="mailto:sv.insulation2015@gmail.com" className="hover:underline whitespace-nowrap">SV.Insulation2015@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/line.png" alt="line" width={32} height={32} />
                  <a href="https://line.me/ti/p/~sv.insulation" className="hover:underline whitespace-nowrap">SV.Insulation</a>
                </div>
              </div>
            </div>
            <div className="flex flex-row md:flex-col gap-2 justify-center">
              <div className="flex gap-2 cursor-pointer" onClick={() => onSelectChange('th')}>
                <Image src="/th.svg" alt="th" width={32} height={32} />
                TH
              </div>
              <div className="flex gap-2 cursor-pointer" onClick={() => onSelectChange('en')}>
                <Image src="/us.png" alt="us" className="h-6 w-[32px]" width={32} height={32} />
                EN
              </div>
            </div>

          </div>
          <div className='block lg:hidden mt-4'>
            <AppSidebar />
          </div>
        </div>
      </div>
    </nav>

  );
}
