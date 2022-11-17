import './faq.css';
function FAQPage() {
  return (
    <div className='faq-page'>
      <h1>About 'Know Your Zone'</h1>
      <p>
        Know Your Zone is a website made to show the necessary information about
        all of the London boroughs, all in one place.
      </p>
      <p>
        Our team has collated data from different sources to bring you the most
        up to date information on the borough.
      </p>
      <hr />
      <p>
        The majority of the data shown on Know Your Zone has been gathered from
        London Datastore, an open source platform created by the London Greater
        Authority (GLA) as a first step towards freeing London’s data. Along
        with datasets provided directly by the GLA, London Datastore also
        contains data supplied by the Office for National Statistics (ONS). For
        cases where the information of interest was not found on London
        Datastore, the ONS website was accessed directly.
      </p>
      <p>
        These datasets are supplied under the UK Open Government License (OGL
        v2).
      </p>
      <p>
        Please visit London Datastore and ONS websites directly for more
        information.
      </p>
      <p>
        The following datasets were used to create the visualisations displayed:
      </p>

      <h3>Crime</h3>
      <ul>
        <li>
          Crime Counts by Borough:
          <li>
            <a>
              https://data.london.gov.uk/dataset/mps-monthly-crime-dahboard-data
            </a>
          </li>
        </li>
      </ul>

      <h3>Rent</h3>
      <ul>
        <li>
          Private Rental Market:
          <li>
            <a>
              https://www.ons.gov.uk/peoplepopulationandcommunity/housing/bulletins/privaterentalmarketsummarystatisticsinengland/previousReleases
            </a>
          </li>
        </li>
      </ul>

      <h3>Demographics</h3>
      <ul>
        <li>
          Race:
          <li>
            <a>https://data.london.gov.uk/dataset/ethnic-groups-borough</a>
          </li>
        </li>
        <li>
          Religion:
          <li>
            <a>
              https://data.london.gov.uk/dataset/percentage-population-religion-borough
            </a>
          </li>
        </li>
        <li>
          Household:
          <li>
            <a>https://www.nomisweb.co.uk/census/2011/ks105ew</a>
          </li>
        </li>
        <li>
          Age:
          <li>
            <a>
              https://data.london.gov.uk/dataset/office-national-statistics-ons-population-estimates-borough
            </a>
          </li>
        </li>
        <li>
          Sex:
          <li>
            <a>
              https://data.london.gov.uk/dataset/office-national-statistics-ons-population-estimates-borough
            </a>
          </li>
        </li>
      </ul>

      <h3>Wellbeing</h3>
      <ul>
        <li>
          Wellbeing Scores:
          <li>
            <a>
              https://data.london.gov.uk/dataset/subjective-personal-well-being-borough
            </a>
          </li>
        </li>
      </ul>

      <p>
        The only dataset that has not been retrieved from London Datastore or
        ONS is the data concerning the second most popular language spoken in
        each borough. This information was taken from the Local Area Research
        and Intelligence Association (LARIA), a UK-based membership body largely
        run by volunteers working in the public sector. You can find the
        relevant information at:
      </p>
      <a>
        https://www.laria.org.uk/2014/08/15/map-reveals-most-common-second-languages-in-london-boroughs/
      </a>
    </div>
  );
}

export default FAQPage;
