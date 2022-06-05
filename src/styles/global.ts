import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #0A0026;
    --red: #e52e4d;
    --transparent-red: #e52e4d33;
    --green: #04D361;
    --transparent-green: #04D36133;
    --dark-purple: #0C003A;
    --purple: #1E0075;
    --title: #9D9D9D;
    --text: #FFF;

    --max-width: 1120px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  html,
  body {
    width: 100vw;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    background-color: var(--background);
  }

  body,
  button,
  input,
  textarea {
    font-family: Poppins, sans-serif;
    font-weight: 400;
    color: var(--text);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong,
  b {
    font-weight: 600;
  }

  button {
    cursor: pointer;
    font-size: 1rem;
  }

  [disabled] {
    cursor: not-allowed;
    filter: brightness(0.7);
    opacity: 0.6;
  }

  .overlay-react-modal {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #00000099;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  .react-modal {
    width: 100%;
    max-width: 600px;
    min-height: 10rem;
    background-color: var(--background);
    padding: 1rem;
    border-radius: 6px;
  }
`;
