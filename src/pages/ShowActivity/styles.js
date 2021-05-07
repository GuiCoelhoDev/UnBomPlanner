import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-rows: min-content 1fr;
  gap: 1rem;
  justify-items: center;
  padding: 1rem 0.5rem 2rem;
`;

export const ContentContainer = styled.article`
  height: 100%;
  max-height: 75vh;
  overflow-y: auto;

  width: 90%;
  padding: 1.2rem 1rem;

  display: grid;
  grid-template-rows: repeat(3, min-content) 1fr;

  header {
    display: grid;
    grid-template-columns: 1fr min-content;
    align-items: center;

    border-bottom: 2px solid ${({ theme }) => theme.softBrown};
    padding-bottom: 0.35rem;

    svg {
      color: ${({ theme }) => theme.darkBrown};
      width: 1.4rem;
      height: 1.4rem;
    }
  }
`;
