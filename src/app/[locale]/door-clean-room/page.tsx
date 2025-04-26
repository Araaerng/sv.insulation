
'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function DoorPage() {
  const t = useTranslations('door');

  return (
    <div className="p-0 ">
      <div className="relative w-full">
        <Image
          className="w-full h-[50vh]"
          src="/banner-door.png"
          width={512}
          height={512}
          alt="banner-door"
          priority
        />
        <div className="absolute inset-0 flex items-end justify-center mb-4 mx-[10%] md:mx-[20%]">
          <div className="bg-[#D7E4BD] border-4 border-black text-black rounded-xl shadow-lg px-6 py-4 space-y-2">
            <span className="text-xl sm:text-3xl md:text-3xl font-bold text-nowrap">
              {t('title')}
            </span>
            <span className="text-xl sm:text-3xl md:text-3xl font-bold">
              /{t('title-2')}
            </span>
            <br />
            <span className="text-lg md:text-xl">
              {t('desc')}
            </span>
          </div>
        </div>
      </div>
      <div className='max-w-screen-2xl flex flex-col items-center justify-center mx-auto p-4'>
        <div id="section-1" className='scroll-mt-[80px] md:scroll-mt-[143px] lg:scroll-mt-[196px]' />
        <div className='my-5 p-4 font-bold border-4 border-black text-3xl bg-[#D7E4BD] rounded-lg text-center'>{t('head-1')}</div>
        <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center'>
          {[1, 2, 3, 4, 5].map((p, i) => (
            <div key={i}>
              <Image
                className="w-[300px] h-[400px] rounded-4xl border-2"
                src={`/door/door-panal-${p}.png`}
                width={300}
                height={400}
                alt={`door-panel-${p}`}
                priority
              />
            </div>
          ))}
        </div>

        <div className='my-5 p-4 text-lg md:text-xl bg-[#D7E4BD] rounded-lg text-center'>{t('clean-room-door-1')}</div>
        <div className='w-full hidden md:grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {[1, 2, 3].map((p, i) => (
            <div key={i}>
              <Image
                className="w-full h-[400px] rounded-4xl border-2"
                src={`/door/single-swing-door-${p}.png`}
                width={512}
                height={512}
                alt="banner-1"
                priority
              />
            </div>
          ))}
        </div>
        <div className='w-full hidden md:grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div className='col-span-2 my-5 p-4 text-lg md:text-xl bg-[#D7E4BD] rounded-lg text-center'>{t('clean-room-door-2')}</div>
          <div className='my-5 p-4 text-lg md:text-xl bg-[#D7E4BD] rounded-lg text-center'>{t('clean-room-door-3')}</div>
        </div>
        <div className='flex flex-col md:hidden'>
          <div className='w-full flex flex-col sm:flex-row gap-4'>
            {[1, 2].map((p, i) => (
              <div key={i}>
                <Image
                  className="w-full h-[400px] rounded-4xl border-2"
                  src={`/door/single-swing-door-${p}.png`}
                  width={512}
                  height={512}
                  alt="banner-1"
                  priority
                />
              </div>
            ))}
          </div>
          <div className='my-5 p-4 text-lg md:text-xl bg-[#D7E4BD] rounded-lg text-center'>{t('clean-room-door-2')}</div>
        </div>
        <div className='flex flex-col md:hidden'>
          <div className='w-full flex  flex-col sm:flex-row gap-4'>
            <Image
              className="w-full h-[400px] rounded-4xl border-2"
              src={`/door/single-swing-door-3.png`}
              width={512}
              height={512}
              alt="banner-1"
              priority
            />
          </div>
          <div className='my-5 p-4 text-lg md:text-xl bg-[#D7E4BD] rounded-lg text-center'>{t('clean-room-door-3')}</div>
        </div>

        <div className=' grid sm:grid-cols-2  gap-4'>
          {[1, 2].map((p, i) => (
            <div key={i} className="flex justify-center items-center">
              <Image
                className="w-auto h-[350px] md:w-full rounded-4xl border-2"
                src={`/door/double-swing-door-${p}.png`}
                width={512}
                height={512}
                alt="banner-1"
                priority
              />
            </div>
          ))}
        </div>
        <div className='my-5 p-4 text-lg md:text-xl bg-[#D7E4BD] rounded-lg text-center'>{t('clean-room-door-4')}</div>
        <div className=' grid sm:grid-cols-3  gap-4'>
          {[1, 2, 3].map((p, i) => (
            <div key={i} className="flex justify-center items-center">
              <Image
                className="w-auto h-[350px] md:h-[400px] rounded-4xl border-2"
                src={`/door/single-sliding-door-${p}.png`}
                width={512}
                height={512}
                alt="banner-1"
                priority
              />
            </div>
          ))}
        </div>
        <div className='my-5 p-4 text-lg md:text-xl bg-[#D7E4BD] rounded-lg text-center'>{t('clean-room-door-5')}</div>
        <div id="section-2" className='scroll-mt-[80px] md:scroll-mt-[143px] lg:scroll-mt-[196px]' />
        <div className='my-5 p-4 font-bold border-4 border-black text-3xl bg-[#BFBFBF] rounded-lg text-center'>{t('head-2')}</div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
          <div className='sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-2'>
            {[1, 2, 3].map((p, i) => (
              <div key={i} className="flex justify-center items-center w-full">
                <Image
                  className="w-full h-[400px] rounded-4xl border-2"
                  src={`/door/cold-room-single-swing-door-${p}.png`}
                  width={512}
                  height={512}
                  alt="banner-1"
                  priority
                />
              </div>
            ))}
            <div className='col-span-1 sm:col-span-3 my-5 p-4 text-lg md:text-xl bg-[#BFBFBF] rounded-lg text-center'>
              {t('cold-room-door-1')}
            </div>
          </div>

          <div className='flex flex-col justify-center h-full gap-2'>
            <Image
              className="w-auto max-h-[400px] md:h-[400px] rounded-4xl border-2 mx-auto"
              src={`/door/cold-room-double-swing-door.png`}
              width={512}
              height={512}
              alt="banner-1"
              priority
            />
            <div className='my-5 p-4 text-lg md:text-xl bg-[#BFBFBF] rounded-lg text-center'>
              {t('cold-room-door-2')}
            </div>
          </div>
        </div>

        <div className='sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4'>
          {[3, 4, 5].map((p, i) => (
            <div key={i}>
              <Image
                className="w-auto h-[350px] rounded-4xl border-2"
                src={`/door/cold-room-door-${p}.png`}
                width={512}
                height={512}
                alt="banner-1"
                priority
              />
              <div className='my-5 p-4 text-lg md:text-xl bg-[#BFBFBF] rounded-lg text-center'>{t(`cold-room-door-${p}`)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
