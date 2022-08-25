import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.font};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 1rem;

  ${({ isDone }) =>
    isDone &&
    `
   & h3 {
     text-decoration: line-through;
   }
  `}
`;
