import React from 'react';
// import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import PageFirst from '../pages/PageFirst/PageFirst';
import PageThird from '../pages/PageThird/PageThird';
import PageSecond from '../pages/PageSecond/PageSecond';
import PageFourth from '../pages/PageFourth/PageFourth';
import PageFifth from '../pages/PageFifth/PageFifth';
import PageSixth from '../pages/PageSixth/PageSixth';
import "./index.scss";
import classNames from 'classnames';


const Body = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <PageFirst></PageFirst>
          </div>
          <div className="section">
           <PageSecond></PageSecond>
          </div>
          <div 
          className={classNames("section", "pg-small")}
          >
           <PageThird></PageThird>
          </div>
          <div 
          className={classNames("section", "pg-small")}
          >
           <PageFourth></PageFourth>
          </div>
          <div className="section">
           <PageFifth></PageFifth>
          </div>
          <div className="section">
           <PageSixth></PageSixth>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Body;