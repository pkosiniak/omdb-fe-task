import { FC, useMemo } from 'react';
import { Typography } from '@mui/material';
import { Rating as RatingType } from '@/utils/omdbTypes';
import { ColumnBox, RatingContainer, ScoreWrapper, Rating, Column } from './parts';

type Props = RatingType & {
  votes?: string | number;
  className?: string;
};

export const RatingBox: FC<Props> = ({ Source, Value, votes, className }) => {
  const [star, score, outOf] = useMemo(() => {
    if (Value.includes('%')) {
      const score = Value.split('%')[0];
      return [+score / 100, score, '%'];
    }

    const parts = Value.split('/');
    const score = parts[0];
    const outOf = parts[1];

    return [score ? +score / +outOf || 1 : 0, score, outOf ? `/ ${outOf}` : ''];
  }, [Value]);

  return (
    <ColumnBox className={className}>
      <Typography variant='body1'>{Source}</Typography>

      <RatingContainer>
        <Rating readOnly value={+star} max={1} precision={0.1} onChange={() => void 0} size='large' />

        <Column>
          <ScoreWrapper>
            <Typography variant='h5'>{score}</Typography>
            <Typography variant='h6'>{outOf}</Typography>
          </ScoreWrapper>

          {votes !== undefined && <Typography variant='body2'>{votes}</Typography>}
        </Column>
      </RatingContainer>
    </ColumnBox>
  );
};
