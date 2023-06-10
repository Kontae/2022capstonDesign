import styled from '@emotion/styled';
import { ReactNode } from 'react';

export const Body = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <BodyContainer>
        {children}
      </BodyContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BodyContainer = styled.div`
  width: 1000px;
  height: 700px;
  border: black solid 1px;
`;