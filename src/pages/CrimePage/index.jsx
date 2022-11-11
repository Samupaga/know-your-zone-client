import {
  BigNumberCard,
  CardHIP,
  CardHP,
  Navbar,
  InnerNav,
} from '../../components';
import './crimePage.css';

export default function SummaryPage() {
  return (
    <div className='page-wrapper'>
      <Navbar />
      <h1>Wandsworth</h1>
      <h3 className='motto'>
        <em>"We Serve"</em>
      </h3>
      <InnerNav />
      <div className='rent-tile-wrapper'>
        <CardHIP
          className={'right-column card yellow'}
          imageSrc={
            'https://media-exp1.licdn.com/dms/image/C4E03AQFrCxt_gF8mPg/profile-displayphoto-shrink_800_800/0/1651744010490?e=1672876800&v=beta&t=eIRIryxgQ8MbQ5mc48UxVru8looxGUh0Pj3suahLJLA'
          }
          heading={'Division of Crime'}
          altImageText={'Sarah Soutoul'}
        />
        <CardHIP
          className={'left-column card blue'}
          imageSrc={
            'https://media-exp1.licdn.com/dms/image/C4E03AQFrCxt_gF8mPg/profile-displayphoto-shrink_800_800/0/1651744010490?e=1672876800&v=beta&t=eIRIryxgQ8MbQ5mc48UxVru8looxGUh0Pj3suahLJLA'
          }
          altImageText={'Gantt Chart'}
          secondaryInfo={'Trending crime rates for the past decade.'}
        />
        <div className='three-tile-wrapper right-column'>
          <p className='last-year'>In the Last Year</p>
          <CardHP
            className={'pink three-tile'}
            heading={'2218'}
            secondaryInfo={'Counts of Burglary'}
          />
          <CardHP
            className={'pink three-tile'}
            heading={'7,963'}
            secondaryInfo={'Counts of violent/sexual assault'}
          />
          <CardHP
            className={'pink three-tile'}
            heading={'10,464'}
            secondaryInfo={'Counts of anti-social behaviour'}
          />
        </div>
        <BigNumberCard
          className={'left-column card navy'}
          value={87}
          smallNumber={'/1000'}
          secondaryInfo={'Average Crime Rate'}
        />
      </div>
    </div>
  );
}
