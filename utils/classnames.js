  // https://stackoverflow.com/questions/65912413/how-to-add-multiple-classnames-to-nextjs-elements
const classes = (styles, classes) => {
  const list = classes.split(' ');

  classes = '';
  for (const className of list) {
    classes += `${styles[className]} `
  }
    return classes;
};

export default classes;