import { DataVisualisation } from '../../components';

const Card = ({
  value,
  className,
  heading,
  primaryInfo,
  imageSrc,
  altImageText,
  secondaryInfo,
}) => {
  return (
    <div className={`${className} card`}>
      <h3 className='card-heading'>{heading}</h3>
      <p className='primary-info'>{primaryInfo}</p>
      <p className='secondary-info'>{secondaryInfo}</p>

      <DataVisualisation imageSrc={imageSrc} altText={altImageText} />
    </div>
  );
};

export default Card;
