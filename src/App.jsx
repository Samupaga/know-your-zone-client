import { useState } from 'react';
import './normalize.css';
import './styles.css';
import { Card } from './components';

function App() {
  const londonRent = 900;
  const londonCrime = 900;
  const value = 500;
  return (
    <div className='six-tile-wrapper'>
      <Card
        heading={`£${value} /pcm`}
        className={'pink six-tile'}
        paragraph={'Average Rent'}
      />
      <Card
        value={value}
        className={'yellow six-tile'}
        heading={'Demographics'}
      />
      <Card
        value={value}
        className={'pink six-tile'}
        paragraph={'Average Crime Rate'}
      />
      <Card
        value={value}
        className={'yellow six-tile'}
        heading={'Rent'}
        paragraph={`${value < londonRent ? '⬇️' : '⬆️'}`}
      />
      <Card
        value={value}
        className={'pink six-tile'}
        paragraph={'7.2 on the wellbeing score'}
      />
      <Card
        className={'yellow six-tile'}
        heading={'Crime'}
        paragraph={`${value < londonCrime ? '⬇️' : '⬆️'}`}
      />
    </div>
  );
}

export default App;
