import { FC } from 'react';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IDetails } from '@/utils/omdbTypes';
import { LineWrapper, PlotWrapper, Wrapper } from './components';

type Props = Partial<IDetails> & { className?: string };

export const Description: FC<Props> = ({ Plot, Director, Writer, Actors, Genre, className }) => {
  const { t } = useTranslation();

  return (
    <Wrapper className={className} component={'section'}>
      <PlotWrapper>
        <Typography variant='body1'>{Plot}</Typography>
      </PlotWrapper>

      <LineWrapper>
        <Typography variant='subtitle1'>{t('director')}</Typography>
        <Typography variant='body1'>{Director}</Typography>
      </LineWrapper>

      <LineWrapper>
        <Typography variant='subtitle1'>{t('writer')}</Typography>
        <Typography variant='body1'>{Writer}</Typography>
      </LineWrapper>

      <LineWrapper>
        <Typography variant='subtitle1'>{t('actors')}</Typography>
        <Typography variant='body1'>{Actors}</Typography>
      </LineWrapper>

      <LineWrapper>
        <Typography variant='subtitle1'>{t('genre')}</Typography>
        <Typography variant='body1'>{Genre}</Typography>
      </LineWrapper>
    </Wrapper>
  );
};
