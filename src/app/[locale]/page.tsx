
import 'bootstrap-icons/font/bootstrap-icons.css'
import {useTranslations} from 'next-intl';
import { getTranslations } from 'next-intl/server';

export default async function Home() {
  // const t = useTranslations('Movies');
    const t = await getTranslations('Movies')
    return (
        <div >
          {t('nav.home')}
        </div>
    );
}
