import { FC } from 'react';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IDetails } from '@/utils/omdbTypes';
import { RatingBox } from '@/components/RatingBox';
import { Section } from '@/components';
import { LineWrapper, RatingWrapper } from './components';

type Props = Partial<IDetails> & {};

export const Ratings: FC<Props> = ({ Ratings }) => {
  const { t } = useTranslation();

  return (
    <Section>
      <Typography variant='h4'>{t('ratings')}</Typography>

      <LineWrapper>
        {Ratings?.map((rating, index) => (
          <RatingWrapper key={index}>
            <RatingBox {...rating} />
          </RatingWrapper>
        ))}
      </LineWrapper>
    </Section>
  );
};
