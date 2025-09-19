import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
    locales: ['fa', 'en'],
    defaultLocale: 'fa',
    localeDetection: false,
    
    // pathnames: {
        // "/contact": {
            // en: "/contact-me",
            // fr: "/contactez-moi"
        // }
    // }
});

export type Locale = (typeof routing.locales)[number];