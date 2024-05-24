import { styled } from '@mui/system';
import { FlexBox } from '@/components';

export const LineWrapper = styled(FlexBox)`
  gap: ${({ theme }) => theme.spacing(2)};
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding-top: ${({ theme }) => theme.spacing(2)};
  align-items: center;
  flex-wrap: wrap;
`;

export const RatingWrapper = styled(FlexBox)`
  border-left: 1px solid rgba(255, 255, 255, 0.12);
  border-right: 1px solid rgba(255, 255, 255, 0.12);
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};
`;
