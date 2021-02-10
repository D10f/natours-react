const Composition = ({ img, imgLarge, idx }) => {
  return (
    <img
      srcSet={`${img} 300w, ${imgLarge} 1000w`}
      sizes="(max-width: 900px) 26vw, (max-width: 600px) 80vw, 300px"
      src={imgLarge}
      alt={`photo ${idx + 1}`}
      className={`composition__photo composition__photo--p${idx + 1}`}
    />
  );
};

export default Composition;
