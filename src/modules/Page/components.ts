import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const PageContainer = styled.div`
  background-color: #282c34;
  color: white;
  min-height: 100vh;
`;

export const Header = styled.header`
  padding: 10px;
  height: 60px;
`;

export const Main = styled.main`
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.footer`
  padding: 20px;
`;

export const BackButton = styled(Button)`
  align-items: center;
`;
