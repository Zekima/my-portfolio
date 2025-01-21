import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { IntlErrorCode } from 'next-intl';

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    if (!locale || !routing.locales.includes(locale as any)) {
        locale = routing.defaultLocale;
    }

    return {
        onError(error) {
            if (error.code === IntlErrorCode.MISSING_MESSAGE) {
                console.error(error);
            }
        },
        getMessageFallback({ namespace, key, error }) {
            const path = [namespace, key].filter((part) => part != null).join('.');

            if (error.code === IntlErrorCode.MISSING_MESSAGE) {
                return path + ' is not yet translated';
            } else {
                return 'Dear developer, please fix this message: ' + path;
            }
        },
        locale,
        messages: (await import(`../messages/${locale}.json`)).default
    };
});