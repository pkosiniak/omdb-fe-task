import { styled } from '@mui/system';
import { FlexBox } from '@/components';

export const Wrapper = styled(FlexBox)`
  gap: ${({ theme }) => theme.spacing(1)};
`;
