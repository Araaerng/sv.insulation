
'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { aluminum } from '@/data/aluminum';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export default function AluminumPage() {
  const t = useTranslations('aluminum');
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Catalog AL.Parts (SV.Insulation).pdf";
    link.download = "Catalog AL.Parts (SV.Insulation).pdf";
    link.click();
  };

  return (
    <div className="p-0 ">
      <div className="relative w-full">
        <Image
          className="w-full h-[50vh] sm:h-[50vh] 2xl:h-[60vh] object-cover"
          src="/banner-aluminum.png"
          width={512}
          height={512}
          alt="banner-aluminum"
          priority
        />
        <div className="absolute inset-0 flex items-end justify-center mb-4 mx-2 md:mx-[28%]">
          <div className="bg-gradient-to-b from-[#D6E4FF] to-[#A3C4FF] rounded-xl shadow-lg px-6 py-4 space-y-2 text-black">
            <h1 className="text-xl md:text-3xl font-bold md:whitespace-nowrap">
              {t('title')}<br />
              {t('title-2')}
            </h1>
            <span className="text-lg md:text-xl">
              {t('desc')}
            </span>
          </div>
        </div>
      </div>
      <div className='max-w-screen-2xl flex flex-col items-center justify-center mx-auto px-[5%]'>
        <div id="section-1" className='scroll-mt-20' />
        <div className='my-10 p-2 font-semibold text-2xl bg-lime-500 rounded-lg text-center'>{t('head-1')}</div>
        <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          <PhotoProvider>
            {aluminum.filter((a) => a.type === 1).map((a) => (
              <div key={a.dwg_no} className="w-full">
                <div className="w-full aspect-square relative overflow-hidden rounded-4xl border-2">
                  <PhotoView src={`/aluminum/${a.img}.png`}>
                    <Image
                      src={`/aluminum/${a.img}.png`}
                      alt={a.dwg_no}
                      fill
                      className="object-cover cursor-pointer"
                      priority
                    />
                  </PhotoView>
                </div>

                <div className='w-full text-center my-4 p-2 rounded-br-xl rounded-tl-xl text-black text-lg bg-[#8EB4E3] shadow-lg'>
                  {t('aluminum')}: {a.name}<br />
                  size: {a.size}<br />
                  Dwg No.({a.dwg_no})
                </div>
              </div>
            ))}
          </PhotoProvider>
        </div>
        <div id="section-2" className='scroll-mt-[80px] md:scroll-mt-[143px] lg:scroll-mt-[196px]' />
        <div className='my-10 p-2 font-semibold text-2xl bg-lime-500 rounded-lg text-center'>{t('head-2')}</div>
        <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          <PhotoProvider>
            {aluminum.filter((a) => a.type === 2).map((a) => (
              <div key={a.dwg_no} className="w-full">
                <div className="w-full aspect-square relative overflow-hidden rounded-4xl border-2">
                  <PhotoView src={`/aluminum/${a.img}.png`}>
                    <Image
                      src={`/aluminum/${a.img}.png`}
                      alt={a.dwg_no}
                      fill
                      className="object-cover cursor-pointer"
                      priority
                    />
                  </PhotoView>
                </div>
                <div className='w-full text-center my-4 p-2 rounded-br-xl rounded-tl-xl text-black text-lg bg-[#8EB4E3] shadow-lg' >
                  {t('aluminum')}: {a.name}<br />
                  size: {a.size}<br />
                  Dwg No.({a.dwg_no})
                </div>
              </div>
            ))}
          </PhotoProvider>
        </div>
        <div id="section-3" className='scroll-mt-[80px] md:scroll-mt-[143px] lg:scroll-mt-[196px]' />
        <div className='my-10 p-2 font-semibold text-2xl bg-lime-500 rounded-lg text-center'>{t('head-3')}</div>
        <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          <PhotoProvider>
            {aluminum.filter((a) => a.type === 3).map((a) => (
              <div key={a.dwg_no} className="w-full">
                <div className="w-full aspect-square relative overflow-hidden rounded-4xl border-2">
                  <PhotoView src={`/aluminum/${a.img}.png`}>
                    <Image
                      src={`/aluminum/${a.img}.png`}
                      alt={a.dwg_no}
                      fill
                      className="object-cover cursor-pointer"
                      priority
                    />
                  </PhotoView>
                </div>
                <div className='w-full text-center my-4 p-2 rounded-br-xl rounded-tl-xl text-black text-lg bg-[#8EB4E3] shadow-lg' >
                  {t('aluminum')}: {a.name}<br />
                  size: {a.size}<br />
                  Dwg No.({a.dwg_no})
                </div>
              </div>
            ))}
          </PhotoProvider>
        </div>
        <div id="section-4" className='scroll-mt-[80px] md:scroll-mt-[143px] lg:scroll-mt-[196px]' />
        <div className='my-10 p-2 font-semibold text-2xl bg-lime-500 rounded-lg text-center'>{t('head-4')}</div>
        <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          <PhotoProvider>
            {aluminum.filter((a) => a.type === 4).map((a) => (
              <div key={a.dwg_no} className="w-full">
                <div className="w-full aspect-square relative overflow-hidden rounded-4xl border-2">
                  <PhotoView src={`/aluminum/${a.img}.png`}>
                    <Image
                      src={`/aluminum/${a.img}.png`}
                      alt={a.dwg_no}
                      fill
                      className="object-cover cursor-pointer"
                      priority
                    />
                  </PhotoView>
                </div>
                <div className='w-full text-center my-4 p-2 rounded-br-xl rounded-tl-xl text-black text-lg bg-[#8EB4E3] shadow-lg' >
                  {t('aluminum')}: {a.name}<br />
                  size: {a.size}<br />
                  Dwg No.({a.dwg_no})
                </div>
              </div>
            ))}
          </PhotoProvider>
        </div>
        <div id="section-5" className='scroll-mt-[80px] md:scroll-mt-[143px] lg:scroll-mt-[196px]' />
        <div className='my-10 p-2 font-semibold text-2xl bg-lime-500 rounded-lg text-center'>{t('head-5')}</div>
        <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          <PhotoProvider>
            {aluminum.filter((a) => a.type === 5).map((a) => (
              <div key={a.dwg_no} className="w-full">
                <div className="w-full aspect-square relative overflow-hidden rounded-4xl border-2">
                  <PhotoView src={`/aluminum/${a.img}.png`}>
                    <Image
                      src={`/aluminum/${a.img}.png`}
                      alt={a.dwg_no}
                      fill
                      className="object-cover cursor-pointer"
                      priority
                    />
                  </PhotoView>
                </div>
                <div className='w-full text-center my-4 p-2 rounded-br-xl rounded-tl-xl text-black text-lg bg-[#8EB4E3] shadow-lg' >
                  {t('aluminum')}: {a.name}<br />
                  size: {a.size}<br />
                  Dwg No.({a.dwg_no})
                </div>
              </div>
            ))}
          </PhotoProvider>
        </div>
        <div id="section-6" className='scroll-mt-[80px] md:scroll-mt-[143px] lg:scroll-mt-[196px]' />
        <div className='my-10 p-2 font-semibold text-2xl bg-lime-500 rounded-lg text-center'>{t('head-6')}</div>
        <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          <PhotoProvider>
            {aluminum.filter((a) => a.type === 6).map((a) => (
              <div key={a.dwg_no} className="w-full">
                <div className="w-full aspect-square relative overflow-hidden rounded-4xl border-2">
                  <PhotoView src={`/aluminum/${a.img}.png`}>
                    <Image
                      src={`/aluminum/${a.img}.png`}
                      alt={a.dwg_no}
                      fill
                      className="object-cover cursor-pointer"
                      priority
                    />
                  </PhotoView>
                </div>
                <div className='w-full text-center my-4 p-2 rounded-br-xl rounded-tl-xl text-black text-lg bg-[#8EB4E3] shadow-lg' >
                  {t('aluminum')}: {a.name}<br />
                  size: {a.size}<br />
                  Dwg No.({a.dwg_no})
                </div>
              </div>
            ))}
          </PhotoProvider>
        </div>
        <div id="section-7" className='scroll-mt-[80px] md:scroll-mt-[143px] lg:scroll-mt-[196px]' />
        <div className='my-10 p-2 font-semibold text-2xl bg-lime-500 rounded-lg text-center'>{t('head-7')}</div>
        <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          <PhotoProvider>
            {aluminum.filter((a) => a.type === 7).map((a) => (
              <div key={a.dwg_no} className="w-full">
                <div className="w-full aspect-square relative overflow-hidden rounded-4xl border-2">
                  <PhotoView src={`/aluminum/${a.img}.png`}>
                    <Image
                      src={`/aluminum/${a.img}.png`}
                      alt={a.dwg_no}
                      fill
                      className="object-cover cursor-pointer"
                      priority
                    />
                  </PhotoView>
                </div>
                <div className='w-full text-center my-4 p-2 rounded-br-xl rounded-tl-xl text-black text-lg bg-[#8EB4E3] shadow-lg' >
                  {t('aluminum')}: {a.name}<br />
                  size: {a.size}<br />
                  Dwg No.({a.dwg_no})
                </div>
              </div>
            ))}
          </PhotoProvider>
        </div>
        <div className='w-full mb-10 flex justify-center'>
          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-[#99cc00] text-black text-xl rounded hover:bg-[#88b300]"
          >
            📄 ดาวน์โหลด Catalog
          </button>
        </div>
      </div>
    </div>
  );
}
