/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';
import Image from 'next/image';
import 'react-multi-carousel/lib/styles.css';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

type Errors = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export default function ContactPage() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    let newErrors: Errors = {};

    if (!formData.name) newErrors.name = t('please-enter-name');
    if (!formData.email) newErrors.email = t('please-enter-email');
    if (!formData.phone) newErrors.phone = t('please-enter-phone');
    if (!formData.message) newErrors.message = t('please-enter-message');

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus(t('sending'));

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus(t('success'));
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus(t('not-success'));
      }
    } catch (error) {
      console.error(error);
      setStatus(t('error'));
    }
  };


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
        <div className='w-full flex flex-col items-center justify-center gap-10'>
          <div className='flex flex-col md:flex-row gap-10'>
            <div className='flex flex-col w-full md:w-[50%]'>
              <h1 className="text-xl md:text-3xl font-bold">
                {t('name')}
              </h1>
              <h1 className="text-md md:text-lg">
                {t('address')}
              </h1>
              <div className='flex flex-col gap-5 mt-6 text-lg'>
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
                  <a href="mailto:sv.insulation2015@gmail.com" className="hover:underline whitespace-nowrap dark:text-white">SV.Insulation2015@gmail.com</a>
                </div>
                <div className="flex items-center gap-4 ">
                  <Image src="/facebook.png" className="h-10 w-auto rounded-sm" alt="facebook" width={28} height={28} />
                  <a href="https://web.facebook.com/profile.php?id=100062105632634" target="_blank" className="hover:underline whitespace-nowrap dark:text-white">SV.Insulation Co.,Ltd.</a>
                </div>
                <div className="flex gap-4 items-center">
                  <Image src="/line.png" className="h-10 w-auto" alt="line" width={28} height={28} />
                  <a href="https://line.me/ti/p/~sv.insulation" target="_blank" className="hover:underline whitespace-nowrap dark:text-white">SV.Insulation</a>
                </div>
              </div>
            </div>
            <div className='flex flex-col w-full md:w-[50%]'>
              <h1 className="text-2xl font-bold mb-4">{t('title')}</h1>
              <form onSubmit={handleSubmit} className="space-y-2">
                <input
                  type="text"
                  name="name"
                  placeholder={t('name-form')}
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
                <input
                  type="email"
                  name="email"
                  placeholder={t('email')}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
                <input
                  type="tel"
                  name="phone"
                  placeholder={t('phone')}
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
                <textarea
                  name="message"
                  placeholder={t('message')}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  rows={4}
                ></textarea>
                {errors.message && <p className="text-red-500">{errors.message}</p>}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                  {t('send-message')}
                </button>
              </form>
              {status && <p className="mt-4 text-center">{status}</p>}
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-10">
            <div className='w-full'>
              <h1 className="text-xl md:text-3xl font-bold text-center mb-2">
                {t('office')}
              </h1>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1098.4249043773302!2d100.84350656960301!3d13.561568899175683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d458c63533fd5%3A0xa4f7625406298976!2z4Lia4Lij4Li04Lip4Lix4LiXIOC5gOC4reC4quC4p-C4tS7guK3guLTguJnguIvguLnguYDguKXguIrguLHguYjguJkg4LiI4Liz4LiB4Lix4LiU!5e1!3m2!1sth!2sth!4v1745740707704!5m2!1sth!2sth"
                className="w-full h-[300px] object-cover"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className='w-full'>
              <h1 className="text-xl md:text-3xl font-bold text-center mb-2">
                {t('warehouse')}
              </h1>
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4395.070857729115!2d100.8753606750855!3d13.48723788687767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDI5JzE0LjEiTiAxMDDCsDUyJzQwLjYiRQ!5e1!3m2!1sth!2sth!4v1745740824434!5m2!1sth!2sth"
                className="w-full h-[300px] object-cover"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
