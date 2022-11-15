const CardHPP = ({ className, heading, primaryInfo, secondaryInfo }) => {
  return (
    <div className={`${className} card`}>
      <h3 className="card-heading">{heading}</h3>
      <p className="big-number">{primaryInfo}</p>
      <p className="secondary-info">{secondaryInfo}</p>
    </div>
  );
};

export default CardHPP;
