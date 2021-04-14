import styled from "styled-components";

export const Container = styled.div`
  padding: 0.5rem 2rem;
  border-radius: 2rem;

  box-shadow: 6px 6px 14px rgba(200, 162, 124, 0.4),
    -6px -6px 12px rgba(255, 254, 252, 0.7);

  &.disabled {
    opacity: 0.8;
  }
`;
