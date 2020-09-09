import React from 'react';
import ReactDOM from 'react-dom';
import Radio from './radio.js';

import './shared/icons-library';

// Load Nunito Sans typeface
// reference: https://github.com/KyleAMathews/typefaces/tree/master/packages/nunito-sans
import 'typeface-nunito-sans';

ReactDOM.render(
  <React.StrictMode>
    <Radio />
  </React.StrictMode>,
  document.getElementById('root')
);
