import { FC } from 'react';
import { Typography } from '@mui/material';
import { IDetails } from '@/utils/omdbTypes';
import { FIRST_LI, Li, Ul, Wrapper } from './components';

type Props = Partial<IDetails> & {};

export const Title: FC<Props> = ({ Title: title, Year, Rated, Runtime }) => {
  return (
    <Wrapper>
      <Typography variant='h3'>{title}</Typography>

      <Ul>
        <Li className={FIRST_LI}>
          <Typography variant='caption'>{Year}</Typography>
        </Li>
        <Li>
          <Typography variant='caption'>{Rated}</Typography>
        </Li>
        <Li>
          <Typography variant='caption'>{Runtime}</Typography>
        </Li>
      </Ul>
    </Wrapper>
  );
};
