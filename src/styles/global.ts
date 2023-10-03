import { createGlobalStyle } from 'styled-components'
import { defaultTheme } from './themes/default'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${defaultTheme.baseBackground};
    color: ${defaultTheme.baseText};
  }

  body, input, button, textarea {
    font-family: 'Nunito', sans-serif;
    line-height: 160%;
    font-weight: 400;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${defaultTheme.baseText};
    border-radius: 8px;

    &:hover {
      background: ${defaultTheme.baseSpan};
    }
  }

  ::selection {
    background: ${defaultTheme.baseText};
    color: ${defaultTheme.baseBackground};
  }
`
