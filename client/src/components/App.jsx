// import React from 'react';
// /* Components */
// import OverView from './overview/OverView.jsx';
// import Questions from './questions/Questions.jsx';
// import Ratings from './ratings/Ratings.jsx';
// import RelatedItems from './related_items/RelatedItems.jsx';
// import Container from './styles/Container.styled.js';
// import GlobalStyles from './styles/Global.js';

// const App = () => {
//   return (
//     <>
//       <GlobalStyles />
//       <Container>
//         <OverView />
//         <RelatedItems />
//         <Questions />
//         <Ratings />
//       </Container>
//     </>
//   );
// };

// export default App;


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

const App = () => {

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <Button onClick={() => toggleTheme()}>Change Theme</Button>
        <OverView />
        <RelatedItems />
        <Questions />
        <Ratings />
      </Container>
    </ThemeProvider>
  );
};

export default App;