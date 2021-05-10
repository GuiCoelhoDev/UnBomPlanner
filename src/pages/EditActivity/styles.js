import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-rows: min-content 1fr;
  gap: 1rem;
  justify-items: center;
  padding: 1rem 0.5rem 2rem;

  .form-button {
    justify-self: end;
    margin-right: calc(2.5%);
  }
`;

export const ContentContainer = styled.article`
  height: 100%;
  max-height: 75vh;
  overflow-y: auto;

  width: 95%;
  padding: 1.2rem 1rem;

  display: grid;
  grid-template-rows: min-content 1fr;
  gap: 1rem;

  header {
    display: grid;
    border-bottom: 2px dashed ${({ theme }) => theme.softBrown};
    padding-bottom: 0.35rem;

    .title-input {
      font-size: 1.25rem;
      font-weight: 400;
      color: ${({ theme }) => theme.darkerBrown};

      background-color: transparent;
      border: none;

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: ${({ theme }) => theme.clearBrown};
        font-weight: 300;
      }
    }

    svg {
      color: ${({ theme }) => theme.darkBrown};
      width: 1.4rem;
      height: 1.4rem;
    }
  }
`;
