import { BigNumberCard, CardHIP, CardHPP } from '../../components';
import './summary.css';

export function SummaryPage() {
  console.log('hi from summary');
  return (
    <div className='six-tile-wrapper'>
      <BigNumberCard
        className={'pink six-tile'}
        value={1200}
        smallNumber={'pcm'}
        secondaryInfo={'Average Rent'}
      />
      <CardHIP
        className={'yellow six-tile'}
        heading={'Demographics'}
        imageSrc={
          'https://www.voxco.com/wp-content/uploads/2021/03/Demographic-Segmentation-1.jpg'
        }
        altImageText={'People standing on a pie chart'}
      />
      <BigNumberCard
        className={'pink six-tile'}
        value={87}
        smallNumber={'/1000'}
        secondaryInfo={'Average Crime Rate'}
      />
      <CardHPP
        className={'yellow six-tile'}
        heading={'Rent'}
        primaryInfo={'⬇️'}
        secondaryInfo={'Below London Average'}
      />
      <CardHPP
        className={'pink six-tile'}
        primaryInfo={'😎'}
        secondaryInfo={'7.2 on the wellbeing score!'}
      />
      <CardHPP
        className={'yellow six-tile'}
        heading={'Crime'}
        primaryInfo={'⬇️'}
        secondaryInfo={'Below London Average'}
      />
    </div>
  );
}
