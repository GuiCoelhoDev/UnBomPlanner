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
      border: 1px solid #B48650;

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
