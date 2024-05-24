import { styled } from '@mui/material';
import { FlexBox } from '@/components';

export const Wrapper = styled(FlexBox)`
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const PlotWrapper = styled(FlexBox)`
  padding-bottom: ${({ theme }) => theme.spacing(1)};
`;

export const LineWrapper = styled(FlexBox)`
  gap: ${({ theme }) => theme.spacing(2)};
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding-top: ${({ theme }) => theme.spacing(2)};
`;
