const CardHPH = ({ className, heading, primaryInfo, secondaryInfo }) => {
  return (
    <div className={`${className} card`}>
      <h3 className='card-heading'>{heading}</h3>
      <p className='secondary-info'>{secondaryInfo}</p>
      <h3 className='card-heading'>{primaryInfo}</h3>
    </div>
  );
};

export default CardHPH;
