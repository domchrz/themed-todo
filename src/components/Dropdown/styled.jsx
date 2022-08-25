import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  top: calc(100%  + 1rem);
  right: .375rem;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({theme}) => theme.colors.secondary};

`