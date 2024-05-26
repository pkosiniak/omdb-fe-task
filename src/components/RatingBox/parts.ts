import { styled } from '@mui/system';
import { Rating as MuiRating } from '@mui/material';
import { FlexBox } from '@/components';

export const ColumnBox = styled(FlexBox)`
  gap: ${({ theme }) => theme.spacing(1)};
  flex-direction: column;
  align-items: center;
`;

export const RatingContainer = styled(FlexBox)`
  align-items: center;
`;

export const Rating = styled(MuiRating)`
  display: flex;
  align-items: center;
  font-size: 3rem;
`;

export const ScoreWrapper = styled(FlexBox)`
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const Column = styled(FlexBox)`
  flex-direction: column;
`;
