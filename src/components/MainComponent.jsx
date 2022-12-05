import React from 'react';
import Section1Component from './main/Section1Component';
import Section2Component from './main/Section2Component';

function MainComponent ({modalOpen}){
  return (
    <div id="main">
    <Section1Component/>
    <Section2Component modalOpen={modalOpen}/>
  </div>
  );
};

export default MainComponent;