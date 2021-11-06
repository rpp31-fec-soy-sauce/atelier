import React from 'react';
/* Components */
import OverView from './overview/OverView.jsx';
import Questions from './questions/Questions.jsx';
import Ratings from './ratings/Ratings.jsx';
import RelatedItems from './related_items/RelatedItems.jsx';
import Container from './styles/Container.styled.js';
import GlobalStyles from './styles/Global.js';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <OverView />
        <Questions />
        <RelatedItems />
        <Ratings />
      </Container>
    </>
  );
};

export default App;