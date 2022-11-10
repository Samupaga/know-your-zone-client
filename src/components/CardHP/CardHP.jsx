const CardHP = ({ className, heading, secondaryInfo }) => {
  return (
    <div className={`${className} card`}>
      <h3 className='card-heading'>{heading}</h3>
      <p className='secondary-info'>{secondaryInfo}</p>
    </div>
  );
};

export default CardHP;
