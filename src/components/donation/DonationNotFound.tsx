import { NavLink } from 'react-router-dom';
import { SearchX } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { PATHS } from '@/routes/paths';

export function DonationNotFound() {
  const { t } = useLanguage();
  return (
    <div className="container-page flex flex-col items-center py-24 text-center">
      <SearchX aria-hidden="true" size={44} className="text-saffron-600" />
      <h1 className="mt-4 text-2xl font-semibold">{t('donate.notFound.title')}</h1>
      <p className="mt-2 max-w-md text-ink-500">{t('donate.notFound.body')}</p>
      <NavLink to={PATHS.donate} className="btn-primary mt-6">
        {t('donate.payment.startNew')}
      </NavLink>
    </div>
  );
}
