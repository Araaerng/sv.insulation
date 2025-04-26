"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer >
      <div className="bg-[#bfbfbf]">
        <div className="max-w-screen-2xl flex flex-wrap gap-4 items-center mx-auto p-4">
          <div className="flex-wrap gap-4 w-full md:w-[40%]">
            <span className="font-semibold text-lg whitespace-nowrap dark:text-white">{t('name')}</span>
            <div className="flex items-center gap-2">
              <Image src="/map.png" className="h-auto" alt="map" width={28} height={28} />
              <span className="">{t('address')}</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <Image src="/phone.png" className="h-6" alt="phone" width={28} height={28} />
              <div>
                <a href="tel:020778310" className="hover:underline whitespace-nowrap dark:text-white">02-077-8310</a>
                ,
                {' '}
                <a href="tel:0659568799" className="hover:underline whitespace-nowrap dark:text-white">065-956-8799</a>
                ,
                {' '}
                <a href="tel:0812579700" className="hover:underline whitespace-nowrap dark:text-white">081-2579-700</a>
              </div>
            </div>
            <div className="flex gap-2">
              <Image src="/clock.png" className="h-7" alt="clock" width={28} height={28} />
              <a className="whitespace-nowrap dark:text-white">{t('time')}</a>
            </div>
            <div className="flex gap-2">
              <Image src="/mail.png" className="h-6" alt="mail" width={28} height={28} />
              <a href="mailto:sv.insulation2015@gmail.com" className="hover:underline whitespace-nowrap dark:text-white">sv.insulation2015@gmail.com</a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <Image src="/facebook.png" className="h-6 rounded-sm" alt="facebook" width={28} height={28} />
              <a href="https://web.facebook.com/profile.php?id=100062105632634" target="_blank" className="hover:underline whitespace-nowrap dark:text-white">SV.Insulation Co.,Ltd.</a>
            </div>
            <div className="flex gap-2">
              <Image src="/line.png" className="" alt="line" width={28} height={28} />
              <a href="https://line.me/ti/p/~sv.insulation" target="_blank" className="hover:underline whitespace-nowrap dark:text-white">sv.insulation</a>
            </div>
          </div>
          <div className="w-full sm:w-auto md:w-[50%] lg:w-auto flex justify-center">
            <Image src="/line-qr.png" className="h-40 rounded-sm" alt="line-qr" width={160} height={160} />
          </div>
        </div>
      </div>
    </footer>

  );
}
