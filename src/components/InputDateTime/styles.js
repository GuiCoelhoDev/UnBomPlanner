import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  background-color: #faf3ec;

  width: 80vw;
  min-width: 16rem;
  border-radius: 5px;

  padding: 1rem;

  display: grid;
  grid-template-rows: repeat(2, 3rem);
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem 1rem;

  .MuiInputBase-root {
    font-size: 0.85rem;
    padding: 0.25rem;
    color: ${({ theme }) => theme.darkBrown};
  }
  .MuiFormLabel-root {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.softBrown};

    &.Mui-focused {
      color: ${({ theme }) => theme.softBrown};
    }
  }

  .MuiOutlinedInput-root {
    &.Mui-focused {
      .MuiOutlinedInput-notchedOutline {
        border-color: rgba(216, 157, 86, 0.57);
      }
    }
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: rgba(216, 157, 86, 0.37);
  }

  button {
    grid-column: 1 / 3;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;
