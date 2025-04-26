import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { defaultLocale, locales } from './i18n';

// Next-Intl middleware
const nextIntlMiddleware = createMiddleware({
	locales,
	defaultLocale,
	localePrefix: 'as-needed',
});

// ใช้งาน next-intl middleware เป็น default
export default function middleware(request: NextRequest) {
	return nextIntlMiddleware(request);
}

// กำหนด matcher สำหรับเส้นทางที่ต้องการให้ middleware ทำงาน
export const config = {
	matcher: ['/((?!api|_next|.*\\..*).*)'],
};