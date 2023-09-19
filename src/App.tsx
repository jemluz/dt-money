import { ThemeProvider } from 'styled-components';
import { Transactions } from './pages/Transactions';
import { defaultTheme } from './styles/defaultTheme';
import { GlobalStyle } from './styles/global';
import { TransactionsProvider } from './contexts/TransactionsContext';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
