import { styled } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { FlexBox } from '@/components';

export const LineWrapper = styled(FlexBox)`
  gap: ${({ theme }) => theme.spacing(2)};
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding-top: ${({ theme }) => theme.spacing(2)};
  align-items: center;
  flex-wrap: wrap;
`;

export const CupIcon = styled(EmojiEventsIcon)`
  color: gold;
`;
