const Button = ({
  color = '',
  style = '',
  text = '',
  animated = false,
  link = '#' }) => {

  const classList = [
    'btn',
    color ? `btn--${color}` : '',
    style ? `btn--${style}` : ''
  ];

  return (
    <button
      className={classList.join(' ')}>
      {text}
    </button>
  );
};

export default Button;

// btn action
// <button className="btn btn--green">Discover All Our Tours</button>

// btn link
// <a className="btn-text" href="#">Learn More &rarr;</a>
