
export default (text, size = 150) => {
  if (text.length > size) return `${text.substring(0, size)} ...`;
  return text;
};
