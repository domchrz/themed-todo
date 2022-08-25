import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  gap: 1rem;
  min-height: 10rem;
  color: ${({theme}) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const Headline = styled.h2`
  font-weight: normal;
  font-size: ${({theme}) => theme.font.sizes.l};
`
