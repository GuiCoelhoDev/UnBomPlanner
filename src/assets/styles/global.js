import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * { 
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }

  body {
    background-color: #F3ECE3;
    margin: 0;

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
    }

    .darker-brown {
      color: #43382C;
    }

    .dark-brown {
      color: #704A1E;
    }

    .soft-brown {
      color: #B48650;
    }

    .softer-brown {
      color: #C09C70;
    }

    .clear-brown {
      color: #C5A682;
    }
  }
`;

export default GlobalStyle;
