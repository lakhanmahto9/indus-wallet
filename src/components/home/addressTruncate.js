export const truncateString = (str, startLength = 7, endLength = 5) => {
    if (str.length <= startLength + endLength) return str;
    return str.slice(0, startLength) + "....." + str.slice(-endLength);
  };