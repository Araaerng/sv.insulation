
'use client';
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import { useTranslations } from 'next-intl';
import './styles.css';
import Link from 'next/link';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const product = [
  {
    name: "aluminum",
    href: "/aluminum",
    img: "/p-1.png"

  },
  {
    name: "eps",
    href: "/sandwich-panels",
    img: "/p-2.png"
  },
  {
    name: "door-clean-room",
    href: "/door-clean-room",
    img: "/p-3.png"
  },
  {
    name: "install-service",
    href: "/install-service",
    img: "/p-4.png"
  },
]

export default function Home() {
  const t = useTranslations('home');
  const [isCarouselLoaded, setIsCarouselLoaded] = useState(false);

  useEffect(() => {
    setIsCarouselLoaded(true);
  }, []);

  return (
    <div className="p-0 ">
      <div className="relative w-full carousel-wrapper">
        {!isCarouselLoaded ? (
          <div>
            <Image
              className="w-full h-[50vh] sm:h-[70vh] object-cover 2xl:h-[50vh]"
              src="images/banner-1.png"
              width={512}
              height={512}
              alt="banner-1"
              priority
            />
          </div>
        ) : (
          <Carousel
            draggable
            showDots
            responsive={responsive}
            ssr
            infinite
            autoPlay
            autoPlaySpeed={10000}
            rewindWithAnimation
            containerClass="carousel-container"
            removeArrowOnDeviceType={['tablet', 'mobile', 'desktop', 'superLargeDesktop']}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div>
              <Image
                className="w-full h-[50vh] sm:h-[70vh] object-cover 2xl:h-[50vh]"
                src="images/banner-1.png"
                width={512}
                height={512}
                alt="banner-1"
                priority
              />
            </div>
            <div>
              <Image
                className="w-full h-[50vh] sm:h-[70vh] object-cover 2xl:h-[50vh]"
                src="images/banner-2.png"
                width={512}
                height={512}
                alt="banner-2"
                priority
              />
            </div>
            <div>
              <Image
                className="w-full h-[50vh] sm:h-[70vh] object-cover 2xl:h-[50vh]"
                src="images/banner-4.png"
                width={512}
                height={512}
                alt="banner-4"
                priority
              />
            </div>
            <div>
              <Image
                className="w-full h-[50vh] sm:h-[70vh] object-cover 2xl:h-[50vh]"
                src="images/banner-5.jpg"
                width={512}
                height={512}
                alt="banner-5"
                priority
              />
            </div>
            <div>
              <Image
                className="w-full h-[50vh] sm:h-[70vh] object-cover 2xl:h-[50vh]"
                src="images/banner-6.jpg"
                width={512}
                height={512}
                alt="banner-6"
                priority
              />
            </div>
            <div>
              <Image
                className="w-full h-[50vh] sm:h-[70vh] object-cover 2xl:h-[50vh]"
                src="images/banner-7.jpg"
                width={512}
                height={512}
                alt="banner-7"
                priority
              />
            </div>
            <div>
              <Image
                className="w-full h-[50vh] sm:h-[70vh] object-cover 2xl:h-[50vh]"
                src="images/banner-8.jpg"
                width={512}
                height={512}
                alt="banner-8"
                priority
              />
            </div>
            <div>
              <Image
                className="w-full h-[50vh] sm:h-[70vh] object-cover 2xl:h-[50vh]"
                src="images/banner-9.jpg"
                width={512}
                height={512}
                alt="banner-9"
                priority
              />
            </div>
          </Carousel>
        )}
      </div>

      <div className='max-w-screen-2xl items-center justify-between mx-auto p-4'>
        <div className=' my-4 p-4 font-semibold bg-[#99cc00] rounded-lg'>
          <h1 className="text-2xl font-bold">
            {t('product-service')}
          </h1>
          <ul className='md:ml-4 flex flex-col gap-2 text-md md:text-xl'>
            <h2 className="font-bold">
              {t('desc-1')}
            </h2>
            <h2 className="font-bold">
              {t('desc-2')}
            </h2>
            <h2 className="font-bold">
              {t('desc-3')}
            </h2>
            <h2 className="font-bold">
              {t('desc-4')}
            </h2>
          </ul>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4'>
          {product.map((p, i) => (
            <Link href={p.href} key={i}>
              <Image
                className="w-full object-cover h-[300px] rounded-4xl border-2"
                src={p.img}
                width={512}
                height={512}
                alt="banner-1"
                priority
              />
              <div className='w-full text-center my-4 p-2 rounded-br-xl rounded-tl-xl text-white text-lg bg-blue-800 shadow-lg' >{t(p.name)}</div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
