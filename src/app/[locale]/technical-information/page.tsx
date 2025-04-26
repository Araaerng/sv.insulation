
'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export default function TechnicalInformationPage() {
  const t = useTranslations('technical-information');

  return (
    <div className="p-0 ">
      <PhotoProvider>
        <div className="flex flex-col sm:flex-row gap-5 md:gap-10 w-full bg-blue-200 py-5 px-[5%]">
          <div className='sm:w-[50%] flex gap-5 flex-col-reverse sm:flex-col justify-between'>
            <PhotoView src={`/technical/technical-information-1.png`}>
              <Image
                className="w-auto sm:w-full sm:max-h-[400px] rounded-xl shadow-xl"
                src="/technical/technical-information-1.png"
                width={512}
                height={512}
                alt="technical-information-1"
                priority
              />
            </PhotoView>
            <div className="text-black rounded-xl shadow-lg px-6 py-4 space-y-2">
              <h1 className=" text-xl md:text-3xl font-bold">
                {t('title')}
              </h1>
            </div>
          </div>
          <div className='sm:w-[50%] flex justify-center'>
            <PhotoView src={`/technical/technical-information-2.png`}>
              <Image
                className=" max-h-[400px] w-full sm:max-h-[500px] rounded-xl shadow-2xl"
                src="/technical/technical-information-2.png"
                width={512}
                height={512}
                alt="technical-information-2"
                priority
              />
            </PhotoView>
          </div>
        </div>
      </PhotoProvider>

      <PhotoProvider>
        <div className='max-w-screen-2xl flex flex-col items-center justify-between mx-auto p-5 md:p-10  sm:gap-5'>
          <div id="section-1" className='scroll-mt-[80px] md:scroll-mt-[143px] lg:scroll-mt-[196px]' />
          <div className='my-4 p-4 text-xl md:text-2xl bg-[#FCD5B5] rounded-lg text-center'>{t('head-1')}</div>
          <PhotoView src={`/technical/technical-information-3.png`}>
            <Image
              className="bg-[#dfdfdf]/40 border xl:w-[50%] h-auto object-cover rounded-xl shadow-xl"
              src="/technical/technical-information-3.png"
              width={512}
              height={512}
              alt="technical-information-3"
              priority
            />
          </PhotoView>
          <div id="section-2" className='scroll-mt-[80px] md:scroll-mt-[143px] lg:scroll-mt-[196px]' />
          <div className='my-4 p-4 text-xl md:text-2xl bg-[#FCD5B5] rounded-lg text-center'>{t('head-2')}</div>
          <PhotoView src={`/technical/technical-information-4.png`}>
            <Image
              className="bg-[#dfdfdf]/40 border xl:w-[50%] h-auto object-cover rounded-xl shadow-xl"
              src="/technical/technical-information-4.png"
              width={512}
              height={512}
              alt="technical-information-4"
              priority
            />
          </PhotoView>
          <div id="section-3" className='scroll-mt-[80px] md:scroll-mt-[143px] lg:scroll-mt-[196px]' />
          <div className='my-4 p-4 text-xl md:text-2xl bg-[#FCD5B5] rounded-lg text-center'>{t('head-3')}</div>
          <PhotoView src={`/technical/technical-information-5.png`}>
            <Image
              className="bg-[#dfdfdf]/40 border md:w-[70%] object-cover rounded-xl shadow-xl"
              src="/technical/technical-information-5.png"
              width={512}
              height={512}
              alt="technical-information-5"
              priority
            />
          </PhotoView>
          <div id="section-4" className='scroll-mt-[80px] md:scroll-mt-[143px] lg:scroll-mt-[196px]' />
          <div className='my-4 p-4 text-xl md:text-2xl bg-[#FCD5B5] rounded-lg text-center'>{t('head-4')}</div>
          <PhotoView src={`/technical/technical-information-6.png`}>
            <Image
              className="bg-[#dfdfdf]/40 border xl:w-[50%] h-auto object-cover rounded-xl shadow-xl"
              src="/technical/technical-information-6.png"
              width={512}
              height={512}
              alt="technical-information-6"
              priority
            />
          </PhotoView>
          <div id="section-5" className='scroll-mt-[80px] md:scroll-mt-[143px] lg:scroll-mt-[196px]' />
          <div className='my-4 p-4 text-xl md:text-2xl bg-[#FCD5B5] rounded-lg text-center'>{t('head-5')}</div>
          <PhotoView src={`/technical/technical-information-7.png`}>
            <Image
              className="bg-[#dfdfdf]/40 border xl:w-[50%] h-auto object-cover rounded-xl shadow-xl"
              src="/technical/technical-information-7.png"
              width={512}
              height={512}
              alt="technical-information-7"
              priority
            />
          </PhotoView>
        </div>
      </PhotoProvider>
    </div >
  );
}
