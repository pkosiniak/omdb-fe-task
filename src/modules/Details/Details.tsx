import { FC } from 'react';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IDetails } from '@/utils/omdbTypes';
import { Section } from '@/components';
import { LineWrapper, Wrapper } from './components';

type Props = Partial<IDetails> & {};

export const Details: FC<Props> = ({ Released, Type, Country, Language, BoxOffice, DVD, Production, Website }) => {
  const { t } = useTranslation();

  return (
    <Section>
      <Typography variant='h4'>{t('details')}</Typography>

      <Wrapper>
        <LineWrapper>
          <Typography variant='subtitle1'>{t('released')}</Typography>
          <Typography variant='body1'>{Released}</Typography>
        </LineWrapper>

        <LineWrapper>
          <Typography variant='subtitle1'>{t('type')}</Typography>
          <Typography variant='body1'>{Type}</Typography>
        </LineWrapper>

        <LineWrapper>
          <Typography variant='subtitle1'>{t('country')}</Typography>
          <Typography variant='body1'>{Country}</Typography>
        </LineWrapper>

        <LineWrapper>
          <Typography variant='subtitle1'>{t('language')}</Typography>
          <Typography variant='body1'>{Language}</Typography>
        </LineWrapper>

        <LineWrapper>
          <Typography variant='subtitle1'>{t('boxoffice')}</Typography>
          <Typography variant='body1'>{BoxOffice}</Typography>
        </LineWrapper>

        <LineWrapper>
          <Typography variant='subtitle1'>{t('dvd')}</Typography>
          <Typography variant='body1'>{DVD}</Typography>
        </LineWrapper>

        <LineWrapper>
          <Typography variant='subtitle1'>{t('production')}</Typography>
          <Typography variant='body1'>{Production}</Typography>
        </LineWrapper>

        <LineWrapper>
          <Typography variant='subtitle1'>{t('website')}</Typography>
          <Typography variant='body1'>{Website}</Typography>
        </LineWrapper>
      </Wrapper>
    </Section>
  );
};
