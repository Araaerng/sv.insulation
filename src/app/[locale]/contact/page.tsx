
'use client';
import Image from 'next/image';
import 'react-multi-carousel/lib/styles.css';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <div className="p-0 ">
      <div className="relative w-full">
        <Image
          className="w-full h-[40vh] 2xl:h-[60vh] object-cover"
          src="/banner-contact.png"
          width={512}
          height={512}
          alt="banner-contact"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center mx-[20%]">
          <div className="bg-red-700 rounded-xl shadow-lg px-10 py-8 space-y-2">
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              {t('title')}
            </h1>
          </div>
        </div>
      </div>
      <div className='max-w-screen-2xl flex flex-col items-center justify-center mx-auto my-10 p-4'>
        <div className='w-full flex flex-col md:flex-row items-center justify-center gap-10'>
          <div className='flex flex-col w-full md:w-[50%]'>
            <h1 className="text-xl md:text-3xl font-bold">
              {t('name')}
            </h1>
            <h1 className="text-md md:text-xl">
              {t('address')}
            </h1>
            <div className='flex flex-col gap-5 mt-6 text-lg md:text-2xl'>
              <div className="flex items-center gap-4 ">
                <Image src="/phone.png" className="h-10 w-auto" alt="phone" width={28} height={28} />
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
              <div className="flex items-center gap-4 ">
                <Image src="/mail.png" className="h-10 w-auto" alt="mail" width={28} height={28} />
                <a href="mailto:sv.insulation2015@gmail.com" className="hover:underline whitespace-nowrap dark:text-white">sv.insulation2015@gmail.com</a>
              </div>
              <div className="flex items-center gap-4 ">
                <Image src="/facebook.png" className="h-10 w-auto rounded-sm" alt="facebook" width={28} height={28} />
                <a href="https://web.facebook.com/profile.php?id=100062105632634" target="_blank" className="hover:underline whitespace-nowrap dark:text-white">SV.Insulation Co.,Ltd.</a>
              </div>
              <div className="flex gap-4">
                <Image src="/line.png" className="h-10 w-auto" alt="line" width={28} height={28} />
                <a href="https://line.me/ti/p/~sv.insulation" target="_blank" className="hover:underline whitespace-nowrap dark:text-white">sv.insulation</a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d547.2317808484677!2d100.84431544566449!3d13.561624634829013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sth!2sth!4v1745507860612!5m2!1sth!2sth"
              className="w-full h-[450px] md:h-[600px] 2xl:h-[700px] object-cover"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
