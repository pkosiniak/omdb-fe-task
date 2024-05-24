import { Button, Typography } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IMovie } from '@/utils/omdbTypes';
import { Card, Description, Wrapper } from './components';

type Props = IMovie & {};

// TODO: make button action

export const MovieCard: FC<Props> = ({ Poster, Title, Type, Year, imdbID }) => {
  const { t } = useTranslation();

  return (
    <Card>
      <img src={Poster} height={300} style={{ objectFit: 'cover' }} />
      <Description>
        <Wrapper>
          <Typography variant='h6' textAlign={'left'}>
            {Title}
          </Typography>

          <Typography variant='caption'>{`(${Year})`}</Typography>
        </Wrapper>

        <Wrapper>
          <Typography variant='caption'>{t(Type)}</Typography>

          <Button variant='text'>{t('details')}</Button>
        </Wrapper>
      </Description>
    </Card>
  );
};
