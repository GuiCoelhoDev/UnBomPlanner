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

  width: 95%;
  padding: 1.2rem 1rem;

  display: grid;
  grid-template-rows: repeat(3, min-content) 1fr;
  gap: 1rem;

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

  .input-group,
  .textarea-group {
    label {
      display: grid;
      grid-template-columns: min-content min-content;
      align-items: center;
      gap: 0.25rem;
      white-space: nowrap;
      svg {
        height: 1rem;
        width: 1rem;
        color: ${({ theme }) => theme.darkBrown};
      }
    }
  }

  .inputs-container {
    display: grid;
    gap: 0.5rem;

    margin-bottom: 0.5rem;

    .input-group {
      display: grid;
      grid-template-columns: min-content min-content;
      justify-content: space-between;

      input,
      .select {
        width: 5.5rem;
        height: 1.2rem;
        font-size: 0.8rem;
        background-color: #faf3ec;
        padding: 0;
        border-radius: 2px;
        border: none;
        color: ${({ theme }) => theme.darkerBrown};

        text-align: center;

        &::placeholder {
          color: ${({ theme }) => theme.clearBrown};
          font-weight: 300;
        }

        &:focus {
          outline: none;
          border: 1px solid #ffe7ce;
        }
      }

      .select {
        .Dropdown-arrow {
          display: none;
        }

        .Dropdown-placeholder {
          padding-top: 0.1rem;
        }
      }
      .Dropdown-menu {
        font-size: 0.8rem;
        border: none;
        border-top: 1px solid #ffe7ce;

        .Dropdown-option {
          color: ${({ theme }) => theme.darkBrown};
          background-color: #faf3ec;

          &.is-selected {
            background-color: #faeada;
          }
        }
      }
    }

    .textarea-group {
      display: grid;
      gap: 0.5rem;

      textarea {
        border: 0;
        background-color: transparent;
        font-size: 0.8rem;
        min-height: 8rem;
        color: ${({ theme }) => theme.darkerBrown};

        &::placeholder {
          color: ${({ theme }) => theme.clearBrown};
          font-weight: 300;
        }
        &:focus {
          outline: none;
        }
      }
    }
  }
`;
