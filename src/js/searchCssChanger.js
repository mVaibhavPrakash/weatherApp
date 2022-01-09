const searchCssChanger = (e, ref, isFocus) => {
  e.preventDefault();
  if (isFocus) {
    ref.current.style.width = '50vw';
    ref.current.style.border = '1px solid rgba(128,128,128,0.2)';
  } else {
    ref.current.style.width = '30vw';
  }
};

export default searchCssChanger;
