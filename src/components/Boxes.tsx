import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { FC } from 'react';

export const FlexBox = styled(Box)`
  display: flex;
`;

const SectionBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  align-items: center;
`;

// TODO: replace any with proper type
export const Section: FC<any> = props => <SectionBox {...props} component={'section'}/>;
