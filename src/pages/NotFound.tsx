import { NavLink } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { usePageMeta } from '@/hooks/usePageMeta';
import { PATHS } from '@/routes/paths';

export default function NotFound() {
  const { t } = useLanguage();
  usePageMeta({
    title: t('notFound.title'),
    description: t('notFound.body'),
    path: PATHS.home,
  });

  return (
    <div className="container-page flex flex-col items-center py-24 text-center">
      <p className="font-display text-5xl text-saffron-600">404</p>
      <h1 className="mt-3 text-2xl font-semibold text-ink-900">{t('notFound.title')}</h1>
      <p className="mt-2 max-w-md text-ink-500">{t('notFound.body')}</p>
      <NavLink to={PATHS.home} className="btn-primary mt-6">
        {t('common.backToHome')}
      </NavLink>
    </div>
  );
}
