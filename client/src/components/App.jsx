import React, { useEffect } from 'react';
/* Components */
import OverView from './overview/OverView.jsx';
import Questions from './questions/Questions.jsx';
import Ratings from './ratings/Ratings.jsx';
import RelatedItems from './related_items/RelatedItems.jsx';
import Container from './styles/Container.styled.js';
import GlobalStyles from './styles/Global.js';
import makeApiCall from '../store/api';


const App = () => {

  useEffect(() => {
    window.addEventListener("click", onClickHandler);
  }, []);
  
  const onClickHandler = (e) => {
    console.log('event', e)
    let eventElement = e.target.getAttribute('data-element');
    let eventModule = e.target.getAttribute('data-module');
    let eventTime = (new Date(e.timeStamp)).toUTCString();

    let clickID = {
      element: eventElement,
      widget: eventModule,
      time: eventTime
    }

    console.log('clickID', clickID);

    if (clickID.element && clickID.widget && clickID.time) {
      console.log('enough info');
      
      makeApiCall('POST', '/interactions', clickID)
      .then( (res) => {
        console.log('response', res);
      })
      .catch( (err) => {
        console.log('error', err);
      })

    } else {
      console.log('not enough info');
    }
    
  };



  return (
    <>
      <GlobalStyles />
      <Container>
        <OverView />
        <RelatedItems />
        <Questions />
        <Ratings />
      </Container>
    </>
  );
};

export default App;