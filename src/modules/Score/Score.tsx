import { FC, useMemo } from 'react';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IDetails } from '@/utils/omdbTypes';
import { Wrapper, ColumnBox, RatingContainer, IMDbRatingWrapper, ScoreWrapper, Rating } from './components';

type Props = Partial<IDetails> & {};

// TODO: maybe use generic components

export const Score: FC<Props> = ({ imdbRating, imdbVotes, Metascore }) => {
  const { t } = useTranslation();

  const [imdbStar, imdbScore, imdbOutOf] = useMemo(() => {
    return [imdbRating ? +imdbRating / 10 : 0, imdbRating, '/ 10'];
  }, [imdbRating]);

  const [criticsStar, criticsScore, criticsOutOf] = useMemo(() => {
    return [Metascore ? +Metascore / 100 : 0, Metascore, '/ 100'];
  }, [Metascore]);

  return (
    <Wrapper>
      <ColumnBox>
        <Typography variant='body1'>{t('imdbRating')}</Typography>

        <RatingContainer>
          <Rating readOnly value={imdbStar} max={1} precision={0.1} size='large' />

          <IMDbRatingWrapper>
            <ScoreWrapper>
              <Typography variant='h5'>{imdbScore}</Typography>
              <Typography variant='h6'>{imdbOutOf}</Typography>
            </ScoreWrapper>

            <Typography variant='body2'>{imdbVotes}</Typography>
          </IMDbRatingWrapper>
        </RatingContainer>
      </ColumnBox>

      <ColumnBox>
        <Typography variant='body1'>{t('metascore')}</Typography>

        <RatingContainer>
          <Rating readOnly value={criticsStar} max={1} precision={0.1} size='large' />

          <ScoreWrapper>
            <Typography variant='h5'>{criticsScore}</Typography>
            <Typography variant='h6'>{criticsOutOf}</Typography>
          </ScoreWrapper>
        </RatingContainer>
      </ColumnBox>
    </Wrapper>
  );
};
