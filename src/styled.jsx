import styled from 'styled-components';

export const GroupContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  @media (min-width: 50rem) {
    & {
      flex-direction: row;
    }
  }
`