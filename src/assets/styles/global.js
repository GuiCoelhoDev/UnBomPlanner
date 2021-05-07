import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * { 
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    margin: 0;
  }

  body {
    background: linear-gradient(180deg, #F3ECE3 0%, #ECE7E0 27.59%, #F3E7DB 76.78%);
    margin: 0;

    a {
      text-decoration: none;
      color: unset;

      -webkit-tap-highlight-color: rgba(0,0,0,0);
      -webkit-tap-highlight-color: transparent;
    }

    main {
      height: 100vh;
      width: 100vw;
      padding: 0.5rem;
    }

    section {
      height: 100%;
      width: 100%;
      border-radius: 10px;
      border: 1px solid ${({ theme }) => theme.softBrown};

      .page-header {
        width: 100%;
        display: grid;
        align-items: center;
        grid-template-columns: 1fr min-content 1fr;

        .back-link {
          font-size: 0.95rem;
          color: ${({ theme }) => theme.softBrown};

          display: grid;
          grid-template-columns: min-content min-content;
          align-items: center;
          gap: 0.35rem;

          svg {
            height: 1.35rem;
            width: 1.35rem;
          }
        }
      }

      .depth-box {
        background-color: #efe7de;
        box-shadow: inset 6px 6px 8px rgba(200, 162, 124, 0.32),
          inset -6px -6px 16px rgba(255, 254, 252, 0.56);
        border-radius: 10px;
      }

      .box-title {
        font-size: 1.25rem;
        font-weight: 400;
        color: ${({ theme }) => theme.darkerBrown};
      }

      .caption {
        font-size: 1rem;
        font-weight: 400;
        color: ${({ theme }) => theme.darkBrown};
      }

      .subtitle {
        font-size: 1.25rem;
        font-weight: 300;
        color: ${({ theme }) => theme.darkBrown};
      }

      .smaller-text {
        color: ${({ theme }) => theme.darkBrown};
        font-size: 0.85rem;
      }
    }
  }
`;

export default GlobalStyle;
