import { styled } from '@mui/material';
import { FlexBox } from '@/components';

export const Article = styled(FlexBox)`
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
`;

export const TitleContainer = styled(FlexBox)`
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Wrapper = styled(FlexBox)`
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(3)};
`;
