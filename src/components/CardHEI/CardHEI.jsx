const CardHEI = ({ className, heading, emoji, secondaryInfo }) => {
  return (
    <div className={`${className} card`}>
      <h3 className="card-heading">{heading}</h3>
      <p className="emoji">{emoji}</p>
      <p className="secondary-info">{secondaryInfo}</p>
    </div>
  );
};

export default CardHEI;
