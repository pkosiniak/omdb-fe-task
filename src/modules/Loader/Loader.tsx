import { Backdrop, CircularProgress } from '@mui/material';
import { FC } from 'react';

type Props = {
  isLoading?: boolean;
};

export const Loader: FC<Props> = ({ isLoading }) => {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={!!isLoading}>
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};
