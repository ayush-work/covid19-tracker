// function for formatting number into en-IN formatted string

export const numFormat = (number) => {
  const formatted = new Intl.NumberFormat("en-IN").format(number);
  return formatted;
};
export default numFormat;
