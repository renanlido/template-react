import { ThemeProvider } from 'styled-components';
import { UserDataContextProvider } from './hooks/useUserData';
import { Home } from './Pages/Home';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <UserDataContextProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <GlobalStyles />
          <Home />
        </div>
      </ThemeProvider>
    </UserDataContextProvider>
  );
}

export default App;
