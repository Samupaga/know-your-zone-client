const CardHIP = ({
  className,
  heading,
  imageSrc,
  altImageText,
  secondaryInfo,
}) => {
  return (
    <div className={`${className} card`}>
      <h3 className='card-heading'>{heading}</h3>
      <img src={imageSrc} alt={altImageText} />
      <p className='secondary-info'>{secondaryInfo}</p>
    </div>
  );
};

export default CardHIP;
