export const joinArrayObjectProperties = (array: Array<object>, property: string, joiningString: string): string => {
  return array.map(e => e[property]).join(joiningString);
};

export const getSideNames = (array: Array<object>): string => {
  return joinArrayObjectProperties(array, 'name', '/');
};
