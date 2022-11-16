const BigNumberCard = ({
  value,
  className,
  secondaryInfo,
  bigNumber,
  smallNumber,
  heading,
}) => {
  return (
    <div className={`${className} card`}>
      <h3 className="card-heading">{heading}</h3>
      <p className="big-number">
        {value} <span className="small-number">{smallNumber}</span>
      </p>

      <p className="secondary-info">{secondaryInfo}</p>
    </div>
  );
};

export default BigNumberCard;
