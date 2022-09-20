// Absolute imports
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from 'styled-react-modal';

// Components
import AppRoutes from 'routes';

// Styles
import theme from 'styles/theme';
import 'App.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <AppRoutes />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
