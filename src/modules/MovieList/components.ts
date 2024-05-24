import { css, styled } from '@mui/material';
import { FlexBox } from '@/components';

export const Wrapper = styled(FlexBox)`
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  align-items: center;
`;

export const CardList = styled(FlexBox)(
  ({ theme: { spacing } }) => css`
    flex-wrap: wrap;
    gap: ${spacing(2)};
    justify-content: center;
  `
);