const getShortenedHash = (hash: string, charLength: number = 6) => {
  if (hash) {
    return `${hash.slice(0, charLength)}...${hash.slice(
      hash.length - charLength
    )}`;
  }
  return "";
};

export default getShortenedHash;
