import styled, { css } from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-rows: min-content 1fr 1fr;
  gap: 1rem;
  justify-items: center;
  padding: 1rem 0.5rem 2rem;
`;

export const ActivitiesContainer = styled.article`
  width: 100%;

  display: grid;
  grid-template-rows: min-content 1fr;
  gap: 0.5rem;
  justify-items: center;
  margin-bottom: 0.5rem;

  nav {
    width: 90%;
    display: grid;
    grid-template-columns: 1fr min-content 1fr;
    white-space: nowrap;

    svg {
      justify-self: right;
      width: 1.35rem;
      height: 1.35rem;
      color: ${({ theme }) => theme.softBrown};
    }
  }

  .activities-box {
    display: grid;
    position: relative;
    width: 90%;

    .list-container {
      padding: 1rem 0.75rem 0.5rem;
      overflow-y: scroll;
      max-height: 10rem;
      ul {
        list-style-type: none;
        padding: 0;

        display: grid;
        grid-auto-rows: min-content;
        gap: 0.65rem;
      }
    }

    .add-activity {
      display: grid;
      grid-template-columns: repeat(2, min-content);
      height: min-content;
      align-self: end;
      padding-bottom: 0.25rem;
      justify-content: center;
      align-items: center;
      gap: 0.35rem;

      white-space: nowrap;
      font-size: 0.85rem;
      color: ${({ theme }) => theme.darkBrown};

      svg {
        height: 1.25rem;
        width: 1.25rem;
      }
    }
  }
`;

export const ListItem = styled.li`
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  height: 2rem;
  padding: 0.25rem 0.5rem;

  background-color: #efe9e2;
  box-shadow: 4px 4px 10px rgba(200, 162, 124, 0.32),
    -4px -4px 10px rgba(255, 254, 252, 0.75);
  border-radius: 10px;

  .checkbox {
    width: 1rem;
    height: 1rem;

    background-color: #ffffff;
    box-shadow: inset 2px 2px 5px rgba(200, 162, 124, 0.25);
    border-radius: 2px;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      ${({ checked }) =>
        checked
          ? css`
              width: 0.9rem;
              height: 0.9rem;
              color: ${({ theme }) => theme.softBrown};
            `
          : css`
              display: none;
            `};
    }
  }

  .name {
    white-space: nowrap;
    font-size: 0.75rem;
    text-align: left;

    ${({ checked }) =>
      checked
        ? css`
            color: #967146;
            text-decoration: line-through;
          `
        : ""}
  }

  .tag {
    background-color: #faf3ec;
    padding: 0.1rem 0.35rem;
    color: ${({ theme }) => theme.softBrown};
    font-size: 0.6rem;
    border-radius: 2px;
  }
`;
