import type { Ni18nOptions } from 'ni18n';

const supportedLngs = ['en', 'es', 'bn'];

export const ni18nConfig: Ni18nOptions = {
    fallbackLng: supportedLngs,
    supportedLngs,
    ns: ['common'],
    react: {
        useSuspense: false
    }
}