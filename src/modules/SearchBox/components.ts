import { styled } from '@mui/material';
import { FlexBox } from '@/components';

export const Wrapper = styled(FlexBox)`
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const FilterWrapper = styled(FlexBox)`
  gap: ${({ theme }) => theme.spacing(2)};
`;
