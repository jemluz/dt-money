import { ThemeProvider } from 'styled-components';
import { Transactions } from './pages/Transactions';
import { defaultTheme } from './styles/defaultTheme';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Transactions />
      <GlobalStyle />
    </ThemeProvider>
  )
}
