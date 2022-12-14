const CardWellbeing = ({ className }) => {
  return (
    <div className={`${className} wellbeing card`}>
      <h3 className='card-heading'>Tips to improve your wellbeing</h3>
      <p className='wellbeing-info'>
        Personal wellbeing is just that, personal. If your zone has a lower
        wellbeing score, hereβs some things you can do to keep your wellbeing
        happy while you live there.
      </p>
      <strong>
        <ul className='wellbeing-list'>
          <li>Get a daily dose of sunlight βοΈ</li>
          <li>Get active πββοΈ </li>
          <li>Visit green spaces π³ </li>
          <li>Take a visit to some local culture spots π </li>
          <li>Volunteer or get involved in the local community π€</li>
          <li>Eat a healthy diet π₯</li>
          <li>Take up a new hobby β½οΈ</li>
        </ul>
      </strong>
    </div>
  );
};

export default CardWellbeing;
