
'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

type formType = {
  img: string;
  thick: string;
};

const formType: formType[] = [
  {
    img: "/sandwich-panels/EPS.png",
    thick: "25mm./ 50mm./ 75mm/ 100mm./ 125mm./ 150mm./ 200mm./ 250mm/ 300mm.",
  },
  {
    img: "/sandwich-panels/PU.png",
    thick: "42mm./ 50mm./ 75mm/ 100mm./ 125mm./ 150mm./ 200mm.",
  },
  {
    img: "/sandwich-panels/PIR.png",
    thick: "42mm./ 50mm./ 75mm/ 100mm./ 125mm./ 150mm./ 200mm.",
  },
  {
    img: "/sandwich-panels/Rockwool.png",
    thick: "50mm./ 75mm/ 100mm.",
  }
]

export default function SandwichPanelsPage() {
  const t = useTranslations('sandwich-panels');

  return (
    <div className="p-0">
      <div className="relative w-full">
        <Image
          className="w-full h-[60vh] md:h-[50vh] object-cover"
          src="/banner-sandwich-panels.png"
          width={512}
          height={512}
          alt="banner-sandwich-panels"
          priority
        />
        <div className="absolute inset-0 flex items-start justify-center mt-2 mx-[5%] md:mx-[20%]">
          <div className="bg-[#DDD9C3] text-black rounded-xl shadow-lg px-4 md:px-6 py-4 space-y-2">
            <h1 className=" text-md md:text-3xl font-bold">
              {t('title')}
            </h1>
            <span className=" text-sx md:text-xl">
              {t('desc')}
            </span>
          </div>
        </div>
      </div>
      <div className='max-w-screen-2xl flex flex-col items-center justify-center mx-auto p-4'>
        <div className='w-full flex flex-col md:grid md:grid-cols-3 items-stretch gap-5 mb-4'>
          <div className='w-full flex flex-row md:flex-col gap-2'>
            <div className="w-[50%] md:w-full max-h-[300px] aspect-square relative overflow-hidden rounded-4xl border-2">
              <Image
                src={`/sandwich-panels/sandwich-panels-1.png`}
                alt="sandwich-panels-1"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="w-[50%] md:w-full max-h-[300px] aspect-square relative overflow-hidden rounded-4xl border-2">
              <Image
                src={`/sandwich-panels/sandwich-panels-2.png`}
                alt="sandwich-panels-2"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className='col-span-2 h-full flex flex-col'>
            <div className='flex-1 bg-[#948A54]/70 rounded-[60px] p-5 md:p-10 text-white shadow-lg h-full'>
              <p className='text-lg md:text-2xl lg:text-3xl font-semibold'>{t('paragraph-1')}</p>
              <p className='text-lg md:text-xl lg:text-2xl my-3 font-semibold'>{t('paragraph-2')}</p>
              <div className='grid grid-cols-2 gap-[10%] text-md md:text-xl lg:text-2xl'>
                <div>
                  <p>{t('cold_room')}</p>
                  <p>{t('clean_room')}</p>
                  <p>{t('warehouse')}</p>
                  <p>{t('factories')}</p>
                  <p>{t('test_room')}</p>
                  <p>{t('operating_room')}</p>
                </div>
                <div>
                  <p>{t('supermarket')}</p>
                  <p>{t('office')}</p>
                  <p>{t('drying_room')}</p>
                  <p>{t('animal_housing')}</p>
                  <p>{t('mushroom_farm')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full grid  sm:grid-cols-3 items-stretch gap-2 md:gap-5 mb-4'>
          <Image
            className="object-cover max-h-[300px] aspect-square relative overflow-hidden rounded-4xl border-2"
            src={`/sandwich-panels/sandwich-panels-3.png`}
            width={512}
            height={512}
            alt="sandwich-panels-3"
            priority
          />
          <Image
            className="object-cover max-h-[300px] aspect-square relative overflow-hidden rounded-4xl border-2"
            src={`/sandwich-panels/sandwich-panels-4.png`}
            width={512}
            height={512}
            alt="sandwich-panels-4"
            priority
          />
          <Image
            className="object-cover max-h-[300px] aspect-square relative overflow-hidden rounded-4xl border-2"
            src={`/sandwich-panels/sandwich-panels-5.png`}
            width={512}
            height={512}
            alt="sandwich-panels-5"
            priority
          />
        </div>
        <div className='bg-[#948A54]/70 rounded-4xl p-5 my-10 md:mx-[10%] text-white shadow-lg'>
          <p className='text-2xl font-semibold'>{t('benefit')}</p>
          <p>{t('benefit-desc')}</p>
        </div>
        <div className='flex flex-col gap-4 my-4'>
          {formType.map((f, i) => (
            <div id={`section-${i + 1}`} key={i} className='w-full flex flex-col md:grid md:grid-cols-3 items-stretch gap-4'>
              <Image
                className="w-full max-h-[300px] overflow-hidden rounded-4xl border-2"
                src={f.img}
                width={300}
                height={300}
                alt="sandwich-panels-5"
                priority
              />

              <div className='col-span-2 flex flex-col h-full'>
                <div className='text-center text-2xl p-4 bg-[#9BBB59] rounded-t-lg'>
                  {t(`form-type-${i + 1}`)}
                </div>
                <div className='border p-4 rounded-b-lg flex-1'>
                  <p>{t(`form-type-${i + 1}-desc`)}</p>
                  <p>{t('thick')}</p>
                  {f.thick}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='my-4 flex flex-col lg:flex-row justify-center gap-4 w-full'>
          <PhotoProvider>
            <PhotoView src={`/sandwich-panels/tb-1.png`}>
              <Image
                className="w-full lg:w-auto max-h-[450px] lg:max-h-[320px] xl:max-h-[500px]"
                src={`/sandwich-panels/tb-1.png`}
                width={512}
                height={512}
                alt="tb-1"
                priority
              />
            </PhotoView>
            <PhotoView src={`/sandwich-panels/tb-2.png`}>
              <Image
                className="w-full lg:w-auto max-h-[450px] lg:max-h-[320px] xl:max-h-[500px]"
                src={`/sandwich-panels/tb-2.png`}
                width={512}
                height={512}
                alt="tb-2"
                priority
              />
            </PhotoView>
          </PhotoProvider>

        </div>

      </div>
    </div>
  );
}
