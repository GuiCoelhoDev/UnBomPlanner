import styled from "styled-components";

export const Container = styled.button`
  padding: 0.35rem 2rem;
  border-radius: 2rem;
  border: none;
  color: ${({ theme }) => theme.darkBrown};
  background-color: transparent;
  font-size: 0.75rem;

  box-shadow: 6px 6px 14px rgba(200, 162, 124, 0.4),
    -6px -6px 12px rgba(255, 254, 252, 0.8);

  &:disabled {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }

  &:not(.disabled):active {
    box-shadow: 4px 4px 5px rgba(200, 162, 124, 0.32),
      -4px -4px 5px rgba(255, 254, 252, 0.56);
  }
`;
