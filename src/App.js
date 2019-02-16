import React from 'react';

import Title from  './compontents/Title';
import Form from './compontents/Form';
import Weather from './compontents/Weather';

class App extends React.Component{
  render(){
    return(
      <div>
        <Title />
        <Form />
        <Weather />

      </div>
    );
  }
};

export default App;