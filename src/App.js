import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import GlobalStyle from './components/styles/Global';
import { lightTheme, darkTheme } from './components/styles/Themes.styled';
import Main from './Main';

function App() {
  const [currentTheme, updateTheme] = useState(lightTheme);

  const handleThemeToggle = () => {
    updateTheme(currentTheme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <>
        <GlobalStyle />
        <Header changeTheme={handleThemeToggle} currentTheme={currentTheme} />
        <Main />
      </>
    </ThemeProvider>
  );
}

export default App