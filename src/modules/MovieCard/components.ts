import { css } from '@mui/material';
import { styled } from '@mui/system';
import { FlexBox } from '@/components';

export const Card = styled(FlexBox)`
  flex-direction: column;
  width: 200px;
  background-color: #1a1a1a;
`;

export const Description = styled(FlexBox)(
  ({ theme }) => css`
    flex-direction: column;
    padding: ${theme.spacing(2)};
    gap: ${theme.spacing(1)};
    justify-content: space-between;
    flex-grow: 1;
  `
);

export const Wrapper = styled(FlexBox)`
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme: { spacing } }) => spacing(1)};
`;
