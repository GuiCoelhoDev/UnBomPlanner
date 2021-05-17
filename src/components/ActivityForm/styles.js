import styled from "styled-components";

import TextField from "@material-ui/core/TextField";

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(2, min-content) 1fr;
  gap: 0.75rem;

  .input-group,
  .textarea-group,
  .selection-group {
    .smaller-text {
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

      .select,
      .input-date {
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
  }

  .selection-group {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem 0.25rem;

    label {
      grid-column: 1 / 4;
    }
  }

  .textarea-group {
    display: grid;
    grid-template-rows: min-content 1fr;
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
`;

export const TagOption = styled.span`
  text-align: center;
  font-size: 0.85rem;
  padding: 0.1rem;

  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.softerBrown};

  color: ${({ theme }) => theme.softBrown};
  font-weight: 300;

  &.selected {
    color: ${({ theme }) => theme.darkBrown};
    font-weight: 400;
    background-color: ${({ tagColor }) => tagColor};
  }
`;

export const DateInput = styled(TextField)`
  width: 10.5rem;
  height: 1.2rem;
  font-size: 0.8rem;
  background-color: #faf3ec;
  padding: 0;
  border-radius: 2px;
  border: none;
  color: ${({ theme }) => theme.darkerBrown};

  text-align: center;

  input {
    width: 10.5rem !important;
  }

  &::placeholder {
    color: ${({ theme }) => theme.clearBrown};
    font-weight: 300;
  }

  &:focus {
    outline: none;
    border: 1px solid #ffe7ce;
  }
`;
