import React from 'react';
import ReactDOM from 'react-dom';

import Address from './components/Address';

ReactDOM.render(
  <Address
    street="Santa Monica Blvd."
    city="Santa Monica"
    />,
  // <div>Components Need To Be Mounted</div>,
  document.getElementById('root')
)
