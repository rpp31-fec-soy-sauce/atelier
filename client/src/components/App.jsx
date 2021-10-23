import React from 'react';
/* Components */
import OverView from "./overview/OverView.jsx";
import Questions from "./questions/Questions.jsx";
import Ratings from "./ratings/Ratings.jsx";
import RelatedItems from "./related_items/RelatedItems.jsx";

const App = () => {
  return (
    <div>
      <OverView />
      <Questions />
      <Ratings />
      <RelatedItems />
    </div>
  );
};

export default App;