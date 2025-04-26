
'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export default function InstallServicePage() {
  const t = useTranslations('install-service');

  return (
    <div className="p-0 ">
      <div className="flex flex-col sm:flex-row gap-5 md:gap-10 w-full bg-[#cfcfcf] py-5 px-[5%]">
        <div className='sm:w-[50%] flex gap-5 flex-col-reverse sm:flex-col justify-between'>
          <Image
            className="w-full sm:h-[300px] lg:h-[40vh] rounded-xl shadow-xl"
            src="/install/aluminum-1.png"
            width={512}
            height={512}
            alt="aluminum-1.png"
            priority
          />
          <div className="text-black rounded-xl shadow-lg px-6 py-4 space-y-2">
            <h1 className=" text-xl md:text-3xl font-bold">
              {t('title')}
            </h1>
          </div>
        </div>
        <div className='sm:w-[50%] flex justify-center'>
          <Image
            className=" h-[400px] w-full lg:h-[50vh] rounded-xl shadow-2xl"
            src="/p-4.png"
            width={512}
            height={512}
            alt="technical-information-2"
            priority
          />
        </div>
      </div>
      <div className='max-w-screen-2xl flex flex-col items-center justify-between mx-auto p-5 md:p-10 sm:gap-5'>
        <div id="section-1" className='scroll-mt-[80px] md:scroll-mt-[143px] lg:scroll-mt-[196px]' />
        <div className='my-4 p-4 text-xl sm:text-2xl bg-[#FCD5B5] rounded-lg text-center'>{t('head-1')}</div>
        <PhotoProvider>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p, i) => (
              <div key={i}>
                <PhotoView src={`/install/clear-room-${p}.jpg`}>
                  <Image
                    className="w-full h-[400px] sm:h-[300px] lg:h-[400px] rounded-4xl border-2"
                    src={`/install/clear-room-${p}.jpg`}
                    width={512}
                    height={512}
                    alt="banner-1"
                    priority
                  />
                </PhotoView>
              </div>
            ))}
          </div>
        </PhotoProvider>
        <div id="section-2" className='scroll-mt-[80px] md:scroll-mt-[143px] lg:scroll-mt-[196px]' />
        <div className='my-4 p-4 text-xl sm:text-2xl bg-[#FCD5B5] rounded-lg text-center'>{t('head-2')}</div>
        <PhotoProvider>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p, i) => (
              <div key={i}>
                <PhotoView src={`/install/cold-room-${p}.jpg`}>
                  <Image
                    className="w-full h-[400px] sm:h-[300px] lg:h-[400px] rounded-4xl border-2"
                    src={`/install/cold-room-${p}.jpg`}
                    width={512}
                    height={512}
                    alt="banner-1"
                    priority
                  />
                </PhotoView>
              </div>
            ))}
          </div>
        </PhotoProvider>
        <div id="section-3" className='scroll-mt-[80px] md:scroll-mt-[143px] lg:scroll-mt-[196px]' />
        <div className='my-4 p-4 text-xl sm:text-2xl bg-[#FCD5B5] rounded-lg text-center'>{t('head-3')}</div>
        <PhotoProvider>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p, i) => (
              <div key={i}>
                <PhotoView src={`/install/production-line-${p}.jpg`}>
                  <Image
                    className="w-full h-[400px] sm:h-[300px] lg:h-[400px] rounded-4xl border-2"
                    src={`/install/production-line-${p}.jpg`}
                    width={512}
                    height={512}
                    alt="banner-1"
                    priority
                  />
                </PhotoView>
              </div>
            ))}
          </div>
        </PhotoProvider>
        <div id="section-4" className='scroll-mt-[80px] md:scroll-mt-[143px] lg:scroll-mt-[196px]' />
        <div className='my-4 p-4 text-xl sm:text-2xl bg-[#FCD5B5] rounded-lg text-center'>{t('head-4')}</div>
        <PhotoProvider>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((p, i) => (
              <div key={i}>
                <PhotoView src={`/install/other-${p}.jpg`}>
                  <Image
                    className="w-full h-[400px] sm:h-[300px] lg:h-[400px] rounded-4xl border-2"
                    src={`/install/other-${p}.jpg`}
                    width={512}
                    height={512}
                    alt="banner-1"
                    priority
                  />
                </PhotoView>
              </div>
            ))}
          </div>
        </PhotoProvider>
        <div id="section-5" className='scroll-mt-[80px] md:scroll-mt-[143px] lg:scroll-mt-[196px]' />
        <div className='my-4 p-4 text-xl sm:text-2xl bg-[#FCD5B5] rounded-lg text-center'>{t('head-5')}</div>
        <PhotoProvider>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((p, i) => (
              <div key={i}>
                <PhotoView src={`/install/aluminum-${p}.jpg`}>
                  <Image
                    className="w-full h-[400px] sm:h-[300px] lg:h-[400px] rounded-4xl border-2"
                    src={`/install/aluminum-${p}.jpg`}
                    width={512}
                    height={512}
                    alt="banner-1"
                    priority
                  />
                </PhotoView>
              </div>
            ))}
          </div>
        </PhotoProvider>


      </div>
    </div >
  );
}
