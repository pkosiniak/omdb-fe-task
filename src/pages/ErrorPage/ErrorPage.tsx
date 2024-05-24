import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page, ErrorDisplay } from '@/modules';

type Props = {};

export const ErrorPage: FC<Props> = ({}) => {
  const { t } = useTranslation();

  return (
    <Page>
      <ErrorDisplay error={t('notFound404')} showBackButton />
    </Page>
  );
};
