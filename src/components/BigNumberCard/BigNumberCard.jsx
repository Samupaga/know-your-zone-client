const BigNumberCard = ({
  value,
  className,
  secondaryInfo,
  bigNumber,
  smallNumber,
}) => {
  return (
    <div className={`${className} card`}>
      <p className="big-number">{Math.floor(value)}</p>
      <span className="small-number">{smallNumber}</span>
      <p className="secondary-info">{secondaryInfo}</p>
    </div>
  );
};

export default BigNumberCard;
