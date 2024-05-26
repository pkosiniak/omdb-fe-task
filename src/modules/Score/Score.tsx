import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { IDetails } from '@/utils/omdbTypes';
import { RatingBox } from '@/components';
import { Wrapper } from './components';

type Props = Partial<IDetails> & {};

export const Score: FC<Props> = ({ imdbRating, imdbVotes, Metascore }) => {
  const { t } = useTranslation();

  const imdbScore = useMemo(() => (imdbRating?.includes('/') ? imdbRating : `${imdbRating}/10`), [imdbRating]);

  return (
    <Wrapper>
      {imdbRating && <RatingBox Source={t('imdbRating')} Value={imdbScore} votes={imdbVotes} />}

      {Metascore && <RatingBox Source={t('metascore')} Value={Metascore} />}
    </Wrapper>
  );
};
