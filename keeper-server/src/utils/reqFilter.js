
export default function(obj, allowed = []) {
  return Object.keys(obj)
    .filter(key => allowed.includes(key))
    .reduce((_obj, key) => {
      _obj[key] = obj[key];
      return _obj;
    }, {});
};
