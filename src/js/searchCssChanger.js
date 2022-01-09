const searchCssChanger = (e, ref, isFocus) => {
  e.preventDefault();
  if (isFocus) {
    ref.current.style.width = '50vw';
    ref.current.style.left = '25vw';
    ref.current.style.outline = 'none';
  } else {
    ref.current.style.width = '30vw';
    ref.current.style.left = '35vw';
  }
};

export default searchCssChanger;
