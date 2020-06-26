import React, { Component } from 'react';
import './main.css';
import Cabinet from '../cabinet/Cabinet';
import Recommendations from '../recommendations/Recommendations';
import SchoolUploader from '../schoolUploader/SchoolUploader';

class Main extends Component {
  render() {
    return (
      <div className='main'>
        {/* <Cabinet  /> */}
        <Recommendations />
        {/* <SchoolUploader  /> */}
      </div>
    );
  }
}

export default Main;
