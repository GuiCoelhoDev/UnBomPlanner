import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr min-content 1fr;
  white-space: nowrap;

  .subtitle {
    font-size: 1.2rem;
  }

  .back-link {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.softBrown};

    display: grid;
    grid-template-columns: min-content min-content;
    align-items: center;
    gap: 0.35rem;

    svg {
      height: 1rem;
      width: 1rem;
    }
  }
`;
