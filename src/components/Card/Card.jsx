const Card = ({ value, className, heading, paragraph }) => {
  return (
    <div className={`${className} card`}>
      <h3>{heading}</h3>
      <p>{paragraph}</p>
      <p>
        {`${value > 0 ? '£' : ''}`}
        {value}
      </p>
    </div>
  );
};

export default Card;
