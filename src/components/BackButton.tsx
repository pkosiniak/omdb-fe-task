import { Button, styled } from '@mui/material';
import { t } from 'i18next';
import { FC, useCallback } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type Props = {};

export const StyledButton = styled(Button)`
  align-items: center;
`;

export const BackButton: FC<Props> = ({}) => {
  const handleClick = useCallback(() => {
    history.back();
  }, []);

  return (
    <StyledButton variant='text' startIcon={<ArrowBackIcon />} onClick={handleClick}>
      {t('back')}
    </StyledButton>
  );
};
