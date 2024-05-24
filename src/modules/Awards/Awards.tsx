import { FC } from 'react';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IDetails } from '@/utils/omdbTypes';
import { Section } from '@/components';
import { CupIcon, LineWrapper } from './components';

type Props = Partial<IDetails> & {};

export const Awards: FC<Props> = ({ Awards }) => {
  const { t } = useTranslation();

  return (
    <Section>
      <Typography variant='h4'>{t('awards')}</Typography>

      <LineWrapper>
        <CupIcon fontSize='large' />
        <Typography variant='body1'>{Awards}</Typography>
      </LineWrapper>
    </Section>
  );
};
