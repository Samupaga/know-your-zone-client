const DataVisualisation = ({ imageSrc, altText }) => {
  if (imageSrc) {
    return <img src={imageSrc} alt={altText} />;
  } else {
    return '';
  }
};

export default DataVisualisation;
