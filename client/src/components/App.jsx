import React, { useState } from 'react';
/* Components */
import OverView from './overview/OverView.jsx';
import Questions from './questions/Questions.jsx';
import Ratings from './ratings/Ratings.jsx';
import RelatedItems from './related_items/RelatedItems.jsx';
import Container from './styles/Container.styled.js';
import Button from './styles/Button.styled.js';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/Global.js';
import { lightTheme, darkTheme } from './styles/theme.js';
import Toggle from './styles/Toggle.js';

const App = () => {

  const [theme, setTheme] = useState('light');
  const [toggled, setToggled] = React.useState(false);

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
    setToggled((s) => !s);
  }


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <Toggle toggled={toggled} onClick={() => toggleTheme()} />
        <OverView />
        <RelatedItems />
        <Questions />
        <Ratings />
      </Container>
    </ThemeProvider>
  );
};

export default App;