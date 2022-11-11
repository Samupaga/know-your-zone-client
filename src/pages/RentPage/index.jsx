import {
  BigNumberCard,
  CardHIP,
  CardHP,
  Navbar,
  InnerNav,
} from '../../components';
import './rentPage.css';

export default function SummaryPage() {
  return (
    <div className='page-wrapper'>
      <h1>Wandsworth</h1>
      <h3 className='motto'>
        <em>"We Serve"</em>
      </h3>
      <InnerNav />
      <div className='rent-tile-wrapper'>
        <CardHIP
          className={'left-column card blue'}
          imageSrc={
            'https://media-exp1.licdn.com/dms/image/C4E03AQFrCxt_gF8mPg/profile-displayphoto-shrink_800_800/0/1651744010490?e=1672876800&v=beta&t=eIRIryxgQ8MbQ5mc48UxVru8looxGUh0Pj3suahLJLA'
          }
          altImageText={'Gantt Chart'}
          secondaryInfo={'Trending rent for the past decade.'}
        />
        <CardHIP
          className={'right-column card yellow'}
          imageSrc={
            'https://media-exp1.licdn.com/dms/image/C4E03AQFrCxt_gF8mPg/profile-displayphoto-shrink_800_800/0/1651744010490?e=1672876800&v=beta&t=eIRIryxgQ8MbQ5mc48UxVru8looxGUh0Pj3suahLJLA'
          }
          heading={'Split of some data.'}
          altImageText={'Sarah Soutoul'}
        />
        <BigNumberCard
          className={'left-column card navy'}
          value={1200}
          smallNumber={'pcm'}
          secondaryInfo={'Average Rent'}
        />
        <div className='four-tile-wrapper right-column'>
          <CardHP
            className={'card pink four-tile'}
            heading={'£900'}
            secondaryInfo={'Single Room'}
          />
          <CardHP
            className={'card pink four-tile'}
            heading={'£1200'}
            secondaryInfo={'1 Bed'}
          />
          <CardHP
            className={'card pink four-tile'}
            heading={'£1500'}
            secondaryInfo={'3 Bed'}
          />
          <CardHP
            className={'card pink four-tile'}
            heading={'£2000'}
            secondaryInfo={'5 Bed'}
          />
        </div>
      </div>
    </div>
  );
}
