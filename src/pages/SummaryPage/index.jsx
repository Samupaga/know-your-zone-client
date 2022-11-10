import { Card } from '../../components';
import './summary.css';

export function SummaryPage() {
  const londonRent = 900;
  const londonCrime = 900;
  const value = 500;
  return (
    <div className='six-tile-wrapper'>
      <Card
        heading={`£${value} /pcm`}
        className={'pink six-tile'}
        secondaryInfo={'Average Rent'}
      />
      <Card
        className={'yellow six-tile'}
        heading={'Demographics'}
        imageSrc={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNoRmFOHnsncJDep-IP-m7j-PFQiaC-c9_Mrt3cwunkw&s'
        }
        altImageText={'Graph to display demographic change'}
      />
      <Card
        className={'pink six-tile'}
        heading={'87/1000'}
        secondaryInfo={'Average Crime Rate'}
      />
      <Card
        className={'yellow six-tile'}
        heading={'Rent'}
        primaryInfo={`${value < londonRent ? '⬇️' : '⬆️'}`}
        secondaryInfo={`${
          value < londonRent ? 'Below London Average' : 'Above London Average'
        }`}
      />
      <Card
        className={'pink six-tile'}
        primaryInfo={'😎'}
        secondaryInfo={'7.2 on the wellbeing score'}
      />
      <Card
        className={'yellow six-tile'}
        heading={'Crime'}
        primaryInfo={`${value < londonCrime ? '⬇️' : '⬆️'}`}
        secondaryInfo={`${
          value < londonCrime ? 'Below London Average' : 'Above London Average'
        }`}
      />
    </div>
  );
}
