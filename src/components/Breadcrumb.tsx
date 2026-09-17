import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { PATHS } from '@/routes/paths';

export interface Crumb {
  label: string;
  to?: string;
}

interface BreadcrumbProps {
  items: Crumb[];
}

/** Accessible breadcrumb trail. The final item is the current page and carries `aria-current`. */
export function Breadcrumb({ items }: BreadcrumbProps) {
  const { t } = useLanguage();
  const trail: Crumb[] = [{ label: t('nav.home'), to: PATHS.home }, ...items];

  return (
    <nav aria-label={t('common.breadcrumb')} className="container-page py-4 text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-ink-500">
        {trail.map((crumb, index) => {
          const isLast = index === trail.length - 1;
          return (
            <Fragment key={`${crumb.label}-${index}`}>
              {index > 0 && (
                <ChevronRight aria-hidden="true" size={14} className="shrink-0 text-sand-400" />
              )}
              <li className="flex items-center">
                {isLast || !crumb.to ? (
                  <span aria-current={isLast ? 'page' : undefined} className="font-medium text-ink-800">
                    {crumb.label}
                  </span>
                ) : (
                  <NavLink to={crumb.to} className="transition hover:text-saffron-700">
                    {crumb.label}
                  </NavLink>
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
