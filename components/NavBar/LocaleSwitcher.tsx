
import { getUserLocale, setUserLocale } from '@/i18n/locale';
import LocaleSwitcherButtons from './LocaleSwitcherButtons';

export default async function LocaleSwitcher() {

    const currentLocale = await getUserLocale();

    return (
        <LocaleSwitcherButtons currentLocale={currentLocale}/>
    );
}
