import { FC, useMemo } from 'react';
import { Typography } from '@mui/material';
import { Rating as RatingType } from '@/utils/omdbTypes';
import { ColumnBox, RatingContainer, ScoreWrapper, Rating } from './parts';

type Props = RatingType & { className?: string };

export const RatingBox: FC<Props> = ({ Source, Value, className }) => {
  const [star, score, outOf] = useMemo(() => {
    if (Value.includes('%')) {
      const score = Value.split('%')[0];
      return [+score / 100, score, '%'];
    }

    const parts = Value.split('/');
    const score = parts[0];
    const outOf = parts[1];

    return [score ? +score / +outOf : 0, score, `/ ${outOf}`];
  }, [Value]);

  return (
    <ColumnBox className={className}>
      <Typography variant='body1'>{Source}</Typography>

      <RatingContainer>
        <Rating readOnly value={star} max={1} precision={0.1} onChange={() => void 0} size='large' />

        <ScoreWrapper>
          <Typography variant='h5'>{score}</Typography>
          <Typography variant='h6'>{outOf}</Typography>
        </ScoreWrapper>
      </RatingContainer>
    </ColumnBox>
  );
};
