import styled from '@emotion/styled';
import { FlexBox } from '@/components';


export const Wrapper = styled(FlexBox)`
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const FIRST_LI = 'firstLi';

export const Ul = styled.ul`
  font-size: 16px;
  margin: 0;
  padding: 0;
  padding-left: 0.5rem;
  list-style-type: '•';
  margin-left: -1rem;

  & > .${FIRST_LI} {
    padding-left: 0;

    &::marker {
      content: none;
    }
  }
`;

export const Li = styled.li`
  margin-left: 1rem;
  float: left;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
`;